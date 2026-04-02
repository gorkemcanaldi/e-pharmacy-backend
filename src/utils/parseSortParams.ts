import {
  DEFAULT_PAGINATION_VALUES,
  SORT_FİELDS,
  SORT_FİELDS_SUPPLİERS,
  SORT_ORDER,
  SORT_FİELDS_ORDERS,
  SORT_FİELDS_CUSTOMERS,
} from "../constants/pagination";
import {
  SortParams,
  SortOrder,
  ProductSortFields,
  SupplierSortFields,
  OrderSortFields,
  CustomerSortFields,
} from "../types/pagination";

const parseSortOrder = (sortOrder?: string): SortOrder => {
  return SORT_ORDER.includes(sortOrder as SortOrder)
    ? (sortOrder as SortOrder)
    : (DEFAULT_PAGINATION_VALUES.sortOrder as SortOrder);
};

// products
const parseSortBy = (sortBy?: string): ProductSortFields => {
  return SORT_FİELDS.includes(sortBy ?? "")
    ? (sortBy as ProductSortFields)
    : (DEFAULT_PAGINATION_VALUES.sortBy as ProductSortFields);
};

export const parseSortParams = (query: SortParams<ProductSortFields>) => {
  return {
    sortBy: parseSortBy(query.sortBy),
    sortOrder: parseSortOrder(query.sortOrder),
  };
};

// suppliers
const parseSortBySup = (sortBy?: string): SupplierSortFields => {
  return SORT_FİELDS_SUPPLİERS.includes(sortBy ?? "")
    ? (sortBy as SupplierSortFields)
    : (DEFAULT_PAGINATION_VALUES.sortBy as SupplierSortFields);
};

export const parseSortParamsSup = (query: SortParams<SupplierSortFields>) => {
  return {
    sortBy: parseSortBySup(query.sortBy),
    sortOrder: parseSortOrder(query.sortOrder),
  };
};

// orders
const parseSortByOr = (sortBy?: string): OrderSortFields => {
  return SORT_FİELDS_ORDERS.includes(sortBy ?? "")
    ? (sortBy as OrderSortFields)
    : (DEFAULT_PAGINATION_VALUES.sortBy as OrderSortFields);
};

export const parseSortParamsOr = (query: SortParams<OrderSortFields>) => {
  return {
    sortBy: parseSortByOr(query.sortBy),
    sortOrder: parseSortOrder(query.sortOrder),
  };
};

// customers
const parseSortByCus = (sortBy?: string): CustomerSortFields => {
  return SORT_FİELDS_CUSTOMERS.includes(sortBy ?? "")
    ? (sortBy as CustomerSortFields)
    : (DEFAULT_PAGINATION_VALUES.sortBy as CustomerSortFields);
};

export const parseSortParamsCus = (query: SortParams<CustomerSortFields>) => {
  return {
    sortBy: parseSortByCus(query.sortBy),
    sortOrder: parseSortOrder(query.sortOrder),
  };
};
