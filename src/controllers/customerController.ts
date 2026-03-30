import { Request, Response } from "express";
import { getCustomerServices } from "../services/customer";
import { parseFilterParamsCus } from "../utils/parseFilterParams";
import { parsedPaginationParams } from "../utils/parsePaginationParams";
import { parseSortParamsCus } from "../utils/parseSortParams";

const getCustomerController = async (req: Request, res: Response) => {
  const queryParams = req.query;
  const { page, perPage } = parsedPaginationParams(queryParams);
  const { sortBy, sortOrder } = parseSortParamsCus(queryParams);
  const filter = parseFilterParamsCus(queryParams);

  const data = await getCustomerServices({
    page,
    perPage,
    sortBy,
    sortOrder,
    filter,
  });

  res.json(data);
};

export { getCustomerController };
