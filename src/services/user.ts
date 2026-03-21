import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import usersCollection from "../db/models/User";
import { LoginInput, RegisterInput } from "validator/userValidator";
import jwt from "jsonwebtoken";

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
  const user = await usersCollection.findOne({ email });
  if (!user) {
    throw createHttpError(404, "user not found.");
  }
  const passwordControl = await bcrypt.compare(password, user.password);
  if (!passwordControl) {
    throw createHttpError(400, "incorrect password.");
  }
  const accessToken = jwt.sign(
    {
      id: user._id,
      email: user.email,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "15m" },
  );

  const refreshToken = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET as string,
    { expiresIn: "24h" },
  );
  return { accessToken, refreshToken };
};
const refreshUser = async (refreshToken: string) => {
  if (!refreshToken) {
    throw createHttpError(401, "No refresh token");
  }
  try {
    const decoded = jwt.verify(
      refreshToken,
      process.env.JWT_SECRET as string,
    ) as { id: string };

    const user = await usersCollection.findById(decoded.id);
    if (!user) {
      throw createHttpError(403, "User not found or logged out");
    }

    const newAccessToken = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "15m" },
    );
    return { accessToken: newAccessToken };
  } catch (error) {
    throw createHttpError(403, "Invalid or expired refresh token");
  }
};

export { registerUser, loginUser, refreshUser };
