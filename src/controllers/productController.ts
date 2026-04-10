import { Request, Response } from "express";
import {
  deleteProductServices,
  getProductServices,
  newProductServices,
  updateProductServices,
} from "../services/product";
import { parseFilterParams } from "../utils/parseFilterParams";
import { parsedPaginationParams } from "../utils/parsePaginationParams";
import { parseSortParams } from "../utils/parseSortParams";
import { productSchema } from "../validator/productValidation";

const getProductController = async (req: Request, res: Response) => {
  const queryParams = req.query;
  const { page, perPage } = parsedPaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParams(queryParams);

  const filter = parseFilterParams(queryParams);

  const data = await getProductServices({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json(data);
};

const updateProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;
  const parseResult = productSchema.safeParse(req.body);

  if (!parseResult.success) {
    return res.status(400).json({
      message: "validation failed",
      errors: parseResult.error.format(),
    });
  }
  const update = await updateProductServices(
    productId as string,
    parseResult.data,
  );
  if (!update) {
    return res.status(404).json({
      message: "Product not found",
    });
  }
  res.json({
    message: "Product updated successfully",
    data: update,
  });
};

const deleteProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const remove = await deleteProductServices(productId as string);
  if (!remove) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product remove successfully", product: remove });
};

const newProductController = async (req: Request, res: Response) => {
  const parseResult = productSchema.safeParse(req.body);
  if (!parseResult.success) {
    return res.status(400).json({
      message: "validation failed",
      errors: parseResult.error.format(),
    });
  }

  const product = await newProductServices(parseResult.data);

  res.status(201).send({ message: "New product added.", product });
};

export {
  getProductController,
  updateProductController,
  deleteProductController,
  newProductController,
};
