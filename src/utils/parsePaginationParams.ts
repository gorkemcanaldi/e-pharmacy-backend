import { DEFAULT_PAGINATION_VALUES } from "../constants/pagination";
import { PaginationParams } from "../types/pagination";

const parseNumber = (
  value: string | number | null | undefined,
  defaultValue: number,
): number => {
  if (value === null || value === undefined) {
    return defaultValue;
  }
  const parsedValue = Number(value);
  return isNaN(parsedValue) ? defaultValue : parsedValue;
};

export const parsedPaginationParams = (query: PaginationParams) => {
  const page = parseNumber(query.page, DEFAULT_PAGINATION_VALUES.page);
  const perPage = parseNumber(query.perPage, DEFAULT_PAGINATION_VALUES.perPage);
  return {
    page,
    perPage,
  };
};
