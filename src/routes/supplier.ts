import {
  getSuppliersController,
  newSupplierController,
  updateSupplierController,
} from "controllers/suppliersController";
import { Router } from "express";
import { userMiddlewares } from "middlewares/userMiddlewares";
import { ctrlWrapper } from "utils/ctrlWrapper";

const SuppliersRouter = Router();

SuppliersRouter.get("/", userMiddlewares, ctrlWrapper(getSuppliersController));
SuppliersRouter.post("/", userMiddlewares, ctrlWrapper(newSupplierController));
SuppliersRouter.put(
  "/:supplierId",
  userMiddlewares,
  ctrlWrapper(updateSupplierController),
);

export default SuppliersRouter;
