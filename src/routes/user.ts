import { Router } from "express";
import { registerController } from "../controllers/user";
import { ctrlWrapper } from "utils/ctrlWrapper ";

const UserRouter = Router();

UserRouter.post("/register", ctrlWrapper(registerController));

export default UserRouter;
