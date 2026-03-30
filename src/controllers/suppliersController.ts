import { Request, Response } from "express";
import {
  getSupplierServices,
  newSupplierServices,
  updateSupplierServices,
} from "../services/suppliers";
import { parseFilterParamsSup } from "../utils/parseFilterParams";
import { parsedPaginationParams } from "../utils/parsePaginationParams";
import { parseSortParamsSup } from "../utils/parseSortParams";
import { supplierSchema } from "../validator/supliersValidation";

const getSuppliersController = async (req: Request, res: Response) => {
  const queryParams = req.query;
  const { page, perPage } = parsedPaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParamsSup(queryParams);
  const filter = parseFilterParamsSup(queryParams);

  const data = await getSupplierServices({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });
  res.json(data);
};

const newSupplierController = async (req: Request, res: Response) => {
  const parseResult = supplierSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "validation failed",
      errors: parseResult.error.format(),
    });
  }

  const supplier = await newSupplierServices(parseResult.data);

  res.status(201).send({ message: "New supplier added.", supplier });
};

const updateSupplierController = async (req: Request, res: Response) => {
  const { supplierId } = req.params;
  const parseResult = supplierSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      message: "validation failed",
      errors: parseResult.error.format(),
    });
  }

  const update = await updateSupplierServices(
    supplierId as string,
    parseResult.data,
  );
  if (!update) {
    return res.status(404).json({ message: "Suplier not found" });
  }
  res.json(update);
};

export {
  getSuppliersController,
  newSupplierController,
  updateSupplierController,
};
