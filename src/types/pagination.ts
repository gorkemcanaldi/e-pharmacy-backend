export interface PaginationParams {
  page?: string | number | null;
  perPage?: string | number | null;
}

export type SortOrder = "asc" | "desc";

// Product sort alanları
export type ProductSortFields =
  | "_id"
  | "name"
  | "suppliers"
  | "stock"
  | "price"
  | "category"
  | "updatedAt";

// Supplier sort alanları
export type SupplierSortFields =
  | "_id"
  | "name"
  | "address"
  | "suppliers"
  | "date"
  | "amount"
  | "status";

// Order sort alanları
export type OrderSortFields =
  | "_id"
  | "name"
  | "address"
  | "products"
  | "price"
  | "status"
  | "order_date";

// Customer sort alanları
export type CustomerSortFields =
  | "_id"
  | "name"
  | "address"
  | "image"
  | "email"
  | "spent"
  | "phone"
  | "register_date";

// Generic sort params interface
export interface SortParams<TSortField = string> {
  sortBy?: TSortField;
  sortOrder?: SortOrder;
}
