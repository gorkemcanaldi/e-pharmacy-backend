import { getCustomerController } from "../controllers/customerController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const CustomerRouter = Router();
/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get all customers (optional search by name)
 *     tags:
 *       - Customers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional search by customer name
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - _id: "69c..."
 *                   image: "https://..."
 *                   name: "John Doe"
 *                   email: "john@mail.com"
 *                   spent: "1200"
 *                   phone: 5551234567
 *                   address: "Istanbul"
 *                   register_date: "2026-04-10T00:00:00.000Z"
 */
CustomerRouter.get("/", userMiddlewares, ctrlWrapper(getCustomerController));

export default CustomerRouter;
