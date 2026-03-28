import { Request, Response } from "express";
import { getSupplierServices } from "services/suppliers";
import { parseFilterParamsSup } from "utils/parseFilterParams";

import { parsedPaginationParams } from "utils/parsePaginationParams";
import { parseSortParamsSup } from "utils/parseSortParams";

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

export { getSuppliersController };
