import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import usersCollection from "../db/models/User";
import { RegisterInput } from "validator/userValidator";

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

export { registerUser };
