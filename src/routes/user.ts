import { Router } from "express";
import {
  loginController,
  logoutContoller,
  refreshController,
  registerController,
} from "../controllers/user";
import { ctrlWrapper } from "utils/ctrlWrapper ";

const UserRouter = Router();

UserRouter.post("/register", ctrlWrapper(registerController));
UserRouter.post("/login", ctrlWrapper(loginController));
UserRouter.post("/refresh", ctrlWrapper(refreshController));
UserRouter.post("/logout", ctrlWrapper(logoutContoller));

export default UserRouter;
