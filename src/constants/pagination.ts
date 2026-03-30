const SORT_ORDER = ["asc", "desc"];

const SORT_FİELDS = [
  "_id",
  "name",
  "suppliers",
  "stock",
  "price",
  "category",
  "updatedAt",
];
const SORT_FİELDS_SUPPLİERS = [
  "_id",
  "name",
  "address",
  "suppliers",
  "date",
  "amount",
  "status",
];

const SORT_FİELDS_ORDERS = [
  "_id",
  "name",
  "address",
  "products",
  "price",
  "status",
  "order_date",
];

const SORT_FİELDS_CUSTOMERS = [
  "_id",
  "name",
  "address",
  "image",
  "email",
  "spent",
  "phone",
  "register_date",
];

const DEFAULT_PAGINATION_VALUES = {
  page: 1,
  perPage: 5,
  sortBy: "_id",
  sortOrder: "asc",
};

export {
  DEFAULT_PAGINATION_VALUES,
  SORT_ORDER,
  SORT_FİELDS,
  SORT_FİELDS_SUPPLİERS,
  SORT_FİELDS_ORDERS,
  SORT_FİELDS_CUSTOMERS,
};
