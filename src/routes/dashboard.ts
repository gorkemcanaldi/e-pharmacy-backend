import { getDashboardController } from "../controllers/dashboardController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const DashboardRouter = Router();

DashboardRouter.get("/", userMiddlewares, ctrlWrapper(getDashboardController));

export default DashboardRouter;
