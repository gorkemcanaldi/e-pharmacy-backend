import { DEFAULT_PAGINATION_VALUES } from "../constants/pagination";

const parseNumber = (value, defaultValue) => {
  const parsedValue: number = value;
  return isNaN(parsedValue) ? defaultValue : parsedValue;
};

export const parsedPaginationParams = (query) => {
  const page = parseNumber(query.page, DEFAULT_PAGINATION_VALUES.page);
  const perPage = parseNumber(query.perPage, DEFAULT_PAGINATION_VALUES.perPage);
  return {
    page,
    perPage,
  };
};
