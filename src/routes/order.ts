import { getOrderController } from "controllers/ordersController";
import { Router } from "express";
import { userMiddlewares } from "middlewares/userMiddlewares";
import { ctrlWrapper } from "utils/ctrlWrapper";

const OrderRouter = Router();

OrderRouter.get("/", userMiddlewares, ctrlWrapper(getOrderController));

export default OrderRouter;
