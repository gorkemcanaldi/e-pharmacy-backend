import { DEFAULT_PAGINATION_VALUES } from "constants/pagination";
import { OrderModel } from "db/models/Order";
import { OrderServiceParams } from "types/order";

const getOrderServices = async ({
  page = DEFAULT_PAGINATION_VALUES.page,
  perPage = DEFAULT_PAGINATION_VALUES.perPage,
  sortBy = DEFAULT_PAGINATION_VALUES.sortBy,
  sortOrder = DEFAULT_PAGINATION_VALUES.sortOrder,
  filter = {},
}: OrderServiceParams) => {
  const skip = (page - 1) * perPage;
  const limit = perPage;
  const orderQuery = OrderModel.find();

  if (filter.status) {
    orderQuery.where("status", filter.status);
  }
  if (filter.name) {
    orderQuery.where("name", new RegExp(filter.name, "i"));
  }
  if (filter.address) {
    orderQuery.where("address", filter.address);
  }
  if (filter.price !== undefined && filter.price !== null) {
    orderQuery.where("price").lte(filter.price);
  }
  if (filter.products !== undefined && filter.products !== null) {
    orderQuery.where("products").lte(filter.products);
  }

  return orderQuery
    .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
    .skip(skip)
    .limit(limit);
};

export { getOrderServices };
