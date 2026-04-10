import { getDashboardController } from "../controllers/dashboardController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const DashboardRouter = Router();
/**
 * @swagger
 * /dashboard:
 *   get:
 *     summary: Get dashboard overview data
 *     tags:
 *       - Dashboard
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               metrics:
 *                 totalProducts: 0
 *                 totalSuppliers: 0
 *                 totalCustomers: 0
 *               recentCustomers:
 *                 - _id: "id"
 *                   image: "url"
 *                   name: "name"
 *                   email: "email"
 *                   spent: "0"
 *               transactions:
 *                 - _id: "id"
 *                   name: "transaction name"
 *                   amount: 0
 *                   type: "Income"
 */
DashboardRouter.get("/", userMiddlewares, ctrlWrapper(getDashboardController));

export default DashboardRouter;
