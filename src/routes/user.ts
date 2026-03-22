import { Router } from "express";
import {
  loginController,
  logoutContoller,
  refreshController,
  registerController,
  userInfoController,
} from "../controllers/user";
import { userMiddlewares } from "middlewares/userMiddlewares";
import { ctrlWrapper } from "utils/ctrlWrapper";

const UserRouter = Router();

UserRouter.post("/register", ctrlWrapper(registerController));
UserRouter.post("/login", ctrlWrapper(loginController));
UserRouter.post("/refresh", ctrlWrapper(refreshController));
UserRouter.post("/logout", ctrlWrapper(logoutContoller));
UserRouter.get("/user-info", userMiddlewares, ctrlWrapper(userInfoController));

export default UserRouter;
