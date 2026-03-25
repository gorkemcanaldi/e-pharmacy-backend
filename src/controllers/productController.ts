import { Request, Response } from "express";
import {
  deleteProductServices,
  getProdutServices,
  updateProductServices,
} from "services/product";
import { parseFilterParams } from "utils/parseFilterParams";
import { parsedPaginationParams } from "utils/parsePaginationParams";
import { parseSortParams } from "utils/parseSortParams";

const getProductController = async (req: Request, res: Response) => {
  const queryParams = req.query;
  const { page, perPage } = parsedPaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParams(queryParams);

  const filter = parseFilterParams(queryParams);

  const data = await getProdutServices({
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
  const data = req.body;

  const update = await updateProductServices(productId as string, data);
  if (!update) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(update);
};

const deleteProductController = async (req: Request, res: Response) => {
  const { productId } = req.params;

  const remove = await deleteProductServices(productId as string);
  if (!remove) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json({ message: "Product remove successfully", product: remove });
};

export {
  getProductController,
  updateProductController,
  deleteProductController,
};
