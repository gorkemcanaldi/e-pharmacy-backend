import {
  LoginInput,
  loginSchema,
  RegisterInput,
  registerSchema,
} from "validator/userValidator";
import {
  loginUser,
  logoutUser,
  refreshUser,
  registerUser,
  userInfo,
} from "../services/user";
import { Request, Response } from "express";

const registerController = async (req: Request, res: Response) => {
  const userData: RegisterInput = registerSchema.parse(req.body);
  const data = await registerUser(userData);

  res.status(201).send({
    message: "user registration successful",
    status: 201,
    data,
  });
};

const loginController = async (req: Request, res: Response) => {
  const userData: LoginInput = loginSchema.parse(req.body);
  const { accessToken, refreshToken } = await loginUser(userData);
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    // secure:true,
    sameSite: "strict",
  });

  res.status(200).send({
    message: "login successful",
    status: 200,
    accessToken,
  });
};

const refreshController = async (req: Request, res: Response) => {
  const userCookie = req.cookies.refreshToken;
  const { accessToken } = await refreshUser(userCookie);
  res.status(200).send({
    message: "token refreshed",
    status: 200,
    accessToken,
  });
};

const logoutContoller = async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;
  const authHeader = req.headers.authorization;
  const accessToken = authHeader ? authHeader.split(" ")[1] : null;

  const result = await logoutUser(refreshToken, accessToken);

  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "strict",
    // secure: true,
  });

  res.status(200).send(result);
};

const userInfoController = async (req: Request, res: Response) => {
  const userId = (req as any).user?.id;
  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  const user = await userInfo(userId);

  res.status(200).send({
    name: user.name,
    email: user.email,
  });
};

export {
  registerController,
  loginController,
  refreshController,
  logoutContoller,
  userInfoController,
};
