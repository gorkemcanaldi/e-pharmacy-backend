import { registerSchema } from "validator/userValidator";
import { registerUser } from "../services/user";
import { Request, Response } from "express";
const registerController = async (req: Request, res: Response) => {
  const userData = registerSchema.parse(req.body);
  const data = await registerUser(userData);

  res.status(201).send({
    message: "user registration successful",
    status: 201,
    data,
  });
};

export { registerController };
