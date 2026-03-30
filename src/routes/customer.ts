import { getCustomerController } from "../controllers/customerController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const CustomerRouter = Router();

CustomerRouter.get("/", userMiddlewares, ctrlWrapper(getCustomerController));

export default CustomerRouter;
