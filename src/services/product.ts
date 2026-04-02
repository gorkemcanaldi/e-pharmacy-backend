import { DEFAULT_PAGINATION_VALUES } from "../constants/pagination";
import { ProductModel } from "../db/models/Product";
import {
  CreateProductRequest,
  ProductServiceParams,
  UpdateProductRequest,
} from "../types/product";

const getProductServices = ({
  page = DEFAULT_PAGINATION_VALUES.page,
  perPage = DEFAULT_PAGINATION_VALUES.perPage,
  sortBy = DEFAULT_PAGINATION_VALUES.sortBy,
  sortOrder = DEFAULT_PAGINATION_VALUES.sortOrder,
  filter = {},
}: ProductServiceParams) => {
  const skip = (page - 1) * perPage;
  const limit = perPage;

  const productQuery = ProductModel.find();

  if (filter.category) {
    productQuery.where("category", filter.category);
  }
  if (filter.name) {
    productQuery.where("name", new RegExp(filter.name, "i"));
  }
  if (filter.suppliers) {
    productQuery.where("suppliers").in(filter.suppliers.split(","));
  }
  if (filter.stock !== null && filter.stock !== undefined) {
    productQuery.where("stock").lte(filter.stock);
  }
  if (filter.price !== null && filter.price !== undefined) {
    productQuery.where("price").lte(filter.price);
  }

  return productQuery
    .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
    .skip(skip)
    .limit(limit);
};

const updateProductServices = async (
  prdouctId: string,
  data: UpdateProductRequest,
) => {
  return await ProductModel.findByIdAndUpdate(prdouctId, data, {
    returnDocument: "after",
    includeResultMetadata: true,
  });
};

const deleteProductServices = async (productId: string) => {
  return await ProductModel.findByIdAndDelete(productId);
};

const newProductServices = async (data: CreateProductRequest) => {
  return await ProductModel.create(data);
};

export {
  getProductServices,
  updateProductServices,
  deleteProductServices,
  newProductServices,
};
