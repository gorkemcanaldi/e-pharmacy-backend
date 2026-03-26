import {
  deleteProductController,
  getProductController,
  newProductController,
  updateProductController,
} from "controllers/productController";
import { Router } from "express";
import { userMiddlewares } from "middlewares/userMiddlewares";
import { ctrlWrapper } from "utils/ctrlWrapper";

const ProductRouter = Router();

ProductRouter.get("/", userMiddlewares, ctrlWrapper(getProductController));
ProductRouter.post("/", userMiddlewares, ctrlWrapper(newProductController));
ProductRouter.put(
  "/:productId",
  userMiddlewares,
  ctrlWrapper(updateProductController),
);
ProductRouter.delete(
  "/:productId",
  userMiddlewares,
  ctrlWrapper(deleteProductController),
);

export default ProductRouter;
