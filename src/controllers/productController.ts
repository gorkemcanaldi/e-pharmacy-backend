import { Request, Response } from "express";
import { getProdutServices } from "services/product";
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

export { getProductController };
