import { DEFAULT_PAGINATION_VALUES } from "../constants/pagination";
import { SupplierModel } from "../db/models/Suppliers";
import {
  CreateSupplierRequest,
  SupplierServicesParams,
  UpdateSupplierRequest,
} from "../types/supplier";

const getSupplierServices = async ({
  page = DEFAULT_PAGINATION_VALUES.page,
  perPage = DEFAULT_PAGINATION_VALUES.perPage,
  sortBy = DEFAULT_PAGINATION_VALUES.sortBy,
  sortOrder = DEFAULT_PAGINATION_VALUES.sortOrder,
  filter = {},
}: SupplierServicesParams) => {
  const skip = (page - 1) * perPage;
  const limit = perPage;
  const supplierQuery = SupplierModel.find();

  if (filter.status) {
    supplierQuery.where("status", filter.status);
  }
  if (filter.name) {
    supplierQuery.where("name", new RegExp(filter.name, "i"));
  }
  if (filter.address) {
    supplierQuery.where("address", new RegExp(filter.address, "i"));
  }
  if (filter.amount !== null && filter.amount !== undefined) {
    supplierQuery.where("amount").lte(filter.amount);
  }
  return supplierQuery
    .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
    .skip(skip)
    .limit(limit);
};

const newSupplierServices = async (data: CreateSupplierRequest) => {
  return await SupplierModel.create(data);
};

const updateSupplierServices = async (
  supplierId: string,
  data: UpdateSupplierRequest,
) => {
  return await SupplierModel.findByIdAndUpdate(supplierId, data, {
    returnDocument: "after",
  });
};

export { getSupplierServices, newSupplierServices, updateSupplierServices };
