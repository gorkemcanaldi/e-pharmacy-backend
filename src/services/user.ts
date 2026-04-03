import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import usersCollection from "../db/models/User";
import { LoginInput, RegisterInput } from "../validator/userValidator";
import jwt from "jsonwebtoken";
import sessionsCollection from "../db/models/Sessions";

const registerUser = async (UserData: RegisterInput) => {
  const { email, password } = UserData;
  const checkEmail = await usersCollection.findOne({ email });
  if (checkEmail) {
    throw createHttpError(409, "This email address was previously registered.");
  }

  const hashPassword = await bcrypt.hash(password, 10);

  const user = await usersCollection.create({
    ...UserData,
    password: hashPassword,
  });

  const { password: _, ...safeUser } = user.toObject();
  return safeUser;
};

const loginUser = async (userData: LoginInput) => {
  const { email, password } = userData;
  const user = await usersCollection.findOne({ email }).select("+password");
  if (!user) {
    throw createHttpError(404, "user not found.");
  }
  const passwordControl = await bcrypt.compare(password, user.password);
  if (!passwordControl) {
    throw createHttpError(400, "incorrect password.");
  }
  const accessToken = jwt.sign(
    {
      id: user._id.toString(),
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  const refreshToken = jwt.sign(
    {
      id: user._id.toString(),
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" },
  );

  await sessionsCollection.create({
    userId: user._id,
    accessToken,
    refreshToken,
    accessTokenValidUntil: new Date(Date.now() + 15 * 60 * 1000),
    refreshTokenValidUntil: new Date(Date.now() + 24 * 60 * 60 * 1000),
  });
  return { accessToken, refreshToken };
};
const refreshUser = async (refreshToken: string) => {
  if (!refreshToken) {
    throw createHttpError(401, "No refresh token");
  }
  const decoded = jwt.decode(refreshToken) as { id: string } | null;
  if (!decoded) {
    throw createHttpError(403, "invalid refresh token");
  }
  const session = await sessionsCollection.findOne({ refreshToken });
  if (!session) {
    throw createHttpError(403, "session not found");
  }
  if (session.refreshTokenValidUntil < new Date()) {
    throw createHttpError(403, "refresh token expired");
  }
  const verified = jwt.verify(refreshToken, process.env.JWT_SECRET as string);
  if (!verified) {
    throw createHttpError(403, "invalid refresh token signature");
  }

  const newAccessToken = jwt.sign(
    { id: session.userId.toString() },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" },
  );

  session.accessToken = newAccessToken;
  session.accessTokenValidUntil = new Date(Date.now() + 24 * 60 * 60 * 1000);
  await session.save();
  return { accessToken: newAccessToken };
};

const logoutUser = async (
  refreshToken: string | null,
  accessToken: string | null,
) => {
  const query: any = {};
  if (refreshToken) query.refreshToken = refreshToken;
  if (accessToken) query.accessToken = accessToken;

  if (Object.keys(query).length === 0) {
    return { message: "allready logged out" };
  }

  await sessionsCollection.deleteOne(query);
  return { message: "logout successful" };
};

const userInfo = async (userId: string) => {
  const user = await usersCollection.findById(userId).select("name email");
  if (!user) {
    throw createHttpError(404, "user not found");
  }
  return user;
};

export { registerUser, loginUser, refreshUser, logoutUser, userInfo };
