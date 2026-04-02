import { CustomerServiceParams } from "../types/customer";
import { OrderServiceParams, OrderStatus } from "../types/order";
import { ProductCategory, ProductServiceParams } from "../types/product";
import { SupplierServicesParams, SuppliersStatus } from "../types/supplier";

const parseNumber = (
  value: string | number | null | undefined,
): number | null => {
  if (value === null || value === undefined) {
    return null;
  }
  const par = Number(value);
  return isNaN(par) ? null : par;
};

// product

const parseCategory = (ctgry?: string): ProductCategory | undefined => {
  const categories = Object.values(ProductCategory);
  return categories.includes(ctgry as ProductCategory)
    ? (ctgry as ProductCategory)
    : undefined;
};

export const parseFilterParams = (query: ProductServiceParams["filter"]) => {
  const { name, suppliers, stock, price, category } = query ?? {};
  return {
    name,
    suppliers,
    stock: parseNumber(stock),
    category: parseCategory(category),
    price: parseNumber(price),
  };
};

// suppliers

const parseStatus = (st?: string): SuppliersStatus | null => {
  return Object.values(SuppliersStatus).includes(st as SuppliersStatus)
    ? (st as SuppliersStatus)
    : null;
};

export const parseFilterParamsSup = (
  query: SupplierServicesParams["filter"],
) => {
  const { name, address, suppliers, date, amount, status } = query ?? {};
  const statusValue = status ? parseStatus(status) : null;
  const amountValue = amount != null ? parseNumber(amount) : null;
  return {
    name,
    address,
    suppliers,
    date,
    amount: amountValue,
    status: statusValue,
  };
};

// orders

const parseStatusOr = (st?: string): OrderStatus | undefined => {
  const statuses = Object.values(OrderStatus);
  return statuses.includes(st as OrderStatus) ? (st as OrderStatus) : undefined;
};

export const parseFilterParamsOr = (query: OrderServiceParams["filter"]) => {
  const { name, address, products, price, status, order_date } = query ?? {};
  const statusValue = status ? parseStatusOr(status) : null;
  const priceValue = price != null ? parseNumber(price) : null;
  const productsValue = products != null ? parseNumber(products) : null;
  return {
    name,
    address,
    order_date,
    status: statusValue,
    price: priceValue,
    products: productsValue,
  };
};

export const parseFilterParamsCus = (
  query: CustomerServiceParams["filter"],
) => {
  const { name, email, address, image, spent, phone, register_date } =
    query ?? {};
  const spentValue = spent != null ? parseNumber(spent) : null;
  const phoneValue = phone != null ? parseNumber(phone) : null;
  return {
    name,
    email,
    address,
    image,
    register_date,
    spent: spentValue,
    phone: phoneValue,
  };
};
