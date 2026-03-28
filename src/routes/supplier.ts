import { getSuppliersController } from "controllers/suppliersController";
import { Router } from "express";

const SuppliersRouter = Router();

SuppliersRouter.get("/", getSuppliersController);
/* SuppliersRouter.post("/");
SuppliersRouter.put("/:supplierId"); */

export default SuppliersRouter;
