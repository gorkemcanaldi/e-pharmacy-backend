import { getOrderController } from "../controllers/ordersController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const OrderRouter = Router();
/**
 * @swagger
 * /orders:
 *   get:
 *     summary: Get all orders (optional search by name)
 *     tags:
 *       - Orders
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional search by order name
 *     responses:
 *       200:
 *         description: Orders fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - _id: "69d..."
 *                   name: "John Doe"
 *                   address: "Istanbul"
 *                   products: 3
 *                   price: 120.5
 *                   status: "Pending"
 *                   order_date: "2026-04-10T00:00:00.000Z"
 */
OrderRouter.get("/", userMiddlewares, ctrlWrapper(getOrderController));

export default OrderRouter;
