import {
  getSuppliersController,
  newSupplierController,
  updateSupplierController,
} from "../controllers/suppliersController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const SuppliersRouter = Router();
/**
 * @swagger
 * /suppliers:
 *   get:
 *     summary: Get all suppliers (optional search by name)
 *     tags:
 *       - Suppliers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional search by supplier name
 *     responses:
 *       200:
 *         description: Suppliers fetched successfully
 *         content:
 *           application/json:
 *             example:
 *               data:
 *                 - _id: "69c81a0706323ed47009948a"
 *                   name: "Olga Semklo"
 *                   address: "Gulshan-1"
 *                   suppliers: "ACI"
 *                   date: "2023-09-19T00:00:00.000Z"
 *                   amount: 9852.64
 *                   status: "Active"
 */
SuppliersRouter.get("/", userMiddlewares, ctrlWrapper(getSuppliersController));
/**
 * @swagger
 * /suppliers:
 *   post:
 *     summary: Create new supplier
 *     tags:
 *       - Suppliers
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - address
 *               - suppliers
 *               - date
 *               - amount
 *               - status
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               suppliers:
 *                 type: string
 *               date:
 *                 type: string
 *                 example: "2023-09-18"
 *               amount:
 *                 type: number
 *               status:
 *                 type: string
 *                 example: Active
 *     responses:
 *       201:
 *         description: New supplier added successfully
 *         content:
 *           application/json:
 *             example:
 *               message: New supplier added.
 *               data:
 *                 _id: "69d8f2dfd5a44010e54c607a"
 *                 name: "Mirko Fisuk"
 *                 address: "Uttara-62"
 *                 suppliers: "blabla"
 *                 date: "2023-09-18T00:00:00.000Z"
 *                 amount: 6952.53
 *                 status: "Active"
 */
SuppliersRouter.post("/", userMiddlewares, ctrlWrapper(newSupplierController));
/**
 * @swagger
 * /suppliers/{supplierId}:
 *   put:
 *     summary: Update supplier
 *     tags:
 *       - Suppliers
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: supplierId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               address:
 *                 type: string
 *               suppliers:
 *                 type: string
 *               date:
 *                 type: string
 *               amount:
 *                 type: number
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Supplier updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Supplier updated successfully
 *               data:
 *                 _id: "69d8f2dfd5a44010e54c607a"
 *                 name: "Updated Name"
 *                 address: "Updated Address"
 *                 suppliers: "blabla"
 *                 date: "2023-09-18T00:00:00.000Z"
 *                 amount: 6952.53
 *                 status: "Active"
 *       404:
 *         description: Supplier not found
 */
SuppliersRouter.put(
  "/:supplierId",
  userMiddlewares,
  ctrlWrapper(updateSupplierController),
);

export default SuppliersRouter;
