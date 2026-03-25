import { getProductController } from "controllers/productController";
import { Router } from "express";
import { userMiddlewares } from "middlewares/userMiddlewares";
import { ctrlWrapper } from "utils/ctrlWrapper";

const ProductRouter = Router();

ProductRouter.get("/", userMiddlewares, ctrlWrapper(getProductController));
ProductRouter.put("/:productId");
export default ProductRouter;
