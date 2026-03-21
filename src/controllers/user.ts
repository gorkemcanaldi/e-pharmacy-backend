import {
  LoginInput,
  loginSchema,
  RegisterInput,
  registerSchema,
} from "validator/userValidator";
import { loginUser, refreshUser, registerUser } from "../services/user";
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
  res.status(200).send({ accessToken });
};

const logoutContoller = async (req: Request, res: Response) => {
  const refreshToken = req.cookies?.refreshToken;
  if (!refreshToken) {
    res.status(200).send({
      message: "already logged out",
      status: 200,
    });
  }
  res.clearCookie("refreshToken", {
    httpOnly: true,
    sameSite: "strict",
    // secure: true,
  });

  res.status(200).send({
    message: "logout successful",
    status: 200,
  });
};

export {
  registerController,
  loginController,
  refreshController,
  logoutContoller,
};
