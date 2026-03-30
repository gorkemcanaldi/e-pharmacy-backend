import {
  DEFAULT_PAGINATION_VALUES,
  SORT_FİELDS,
  SORT_FİELDS_SUPPLİERS,
  SORT_ORDER,
  SORT_FİELDS_ORDERS,
  SORT_FİELDS_CUSTOMERS,
} from "../constants/pagination";

const parseSortBy = (sortBy) => {
  if (SORT_FİELDS.includes(sortBy)) {
    return sortBy;
  }
  return DEFAULT_PAGINATION_VALUES.sortBy;
};

export const parseSortParams = (query) => {
  const sortBy = parseSortBy(query.sortBy);
  const sortOrder = parseSortOrder(query.sortOrder);
  return {
    sortBy,
    sortOrder,
  };
};

const parseSortOrder = (sortOrder) => {
  if (SORT_ORDER.includes(sortOrder)) {
    return sortOrder;
  }
  return DEFAULT_PAGINATION_VALUES.sortOrder;
};

// suppliers
const parseSortBySup = (sortBy) => {
  if (SORT_FİELDS_SUPPLİERS.includes(sortBy)) {
    return sortBy;
  }
  return DEFAULT_PAGINATION_VALUES.sortBy;
};

export const parseSortParamsSup = (query) => {
  const sortBy = parseSortBySup(query.sortBy);
  const sortOrder = parseSortOrder(query.sortOrder);
  return {
    sortBy,
    sortOrder,
  };
};

// orders

const parseSortByOr = (sortBy) => {
  if (SORT_FİELDS_ORDERS.includes(sortBy)) {
    return sortBy;
  }
  return DEFAULT_PAGINATION_VALUES.sortBy;
};

export const parseSortParamsOr = (query) => {
  const sortBy = parseSortByOr(query.sortBy);
  const sortOrder = parseSortOrder(query.sortOrder);
  return {
    sortBy,
    sortOrder,
  };
};

// customer

const parseSortByCus = (sortBy) => {
  if (SORT_FİELDS_CUSTOMERS.includes(sortBy)) {
    return sortBy;
  }
  return DEFAULT_PAGINATION_VALUES.sortBy;
};
export const parseSortParamsCus = (query) => {
  const sortBy = parseSortByCus(query.sortBy);
  const sortOrder = parseSortOrder(query.sortOrder);
  return {
    sortBy,
    sortOrder,
  };
};
