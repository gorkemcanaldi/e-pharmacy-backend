import { Request, Response } from "express";
import { getOrderServices } from "../services/orders";
import { parseFilterParamsOr } from "../utils/parseFilterParams";
import { parsedPaginationParams } from "../utils/parsePaginationParams";
import { parseSortParamsOr } from "../utils/parseSortParams";

const getOrderController = async (req: Request, res: Response) => {
  const queryParams = req.query;
  const { page, perPage } = parsedPaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParamsOr(queryParams);

  const filter = parseFilterParamsOr(queryParams);
  const data = await getOrderServices({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });
  res.json(data);
};

export { getOrderController };
