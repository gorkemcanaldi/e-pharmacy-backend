import {
  deleteProductController,
  getProductController,
  newProductController,
  updateProductController,
} from "../controllers/productController";
import { Router } from "express";
import { userMiddlewares } from "../middlewares/userMiddlewares";
import { ctrlWrapper } from "../utils/ctrlWrapper";

const ProductRouter = Router();
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Get all products (optional search by name)
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: query
 *         name: name
 *         required: false
 *         schema:
 *           type: string
 *         description: Optional search by product name
 *     responses:
 *       200:
 *         description: Products fetched successfully (sorted by newest first)
 */
ProductRouter.get("/", userMiddlewares, ctrlWrapper(getProductController));
/**
 * @swagger
 * /products:
 *   post:
 *     summary: Create new product
 *     tags:
 *       - Products
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
 *               - suppliers
 *               - stock
 *               - price
 *               - category
 *             properties:
 *               name:
 *                 type: string
 *               suppliers:
 *                 type: string
 *               stock:
 *                 type: number
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Product created successfully
 */
ProductRouter.post("/", userMiddlewares, ctrlWrapper(newProductController));
/**
 * @swagger
 * /products/{productId}:
 *   put:
 *     summary: Update product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
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
 *               suppliers:
 *                 type: string
 *               stock:
 *                 type: number
 *               price:
 *                 type: number
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Product updated successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Product updated successfully
 *               data: {}
 */
ProductRouter.put(
  "/:productId",
  userMiddlewares,
  ctrlWrapper(updateProductController),
);
/**
 * @swagger
 * /products/{productId}:
 *   delete:
 *     summary: Delete product
 *     tags:
 *       - Products
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: productId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product deleted successfully
 *         content:
 *           application/json:
 *             example:
 *               message: Product remove successfully
 *               product: {}
 */
ProductRouter.delete(
  "/:productId",
  userMiddlewares,
  ctrlWrapper(deleteProductController),
);

export default ProductRouter;
