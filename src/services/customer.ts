import { DEFAULT_PAGINATION_VALUES } from "constants/pagination";
import { CustomerModel } from "db/models/Customer";
import { CustomerServiceParams } from "types/customer";

const getCustomerServices = async ({
  page = DEFAULT_PAGINATION_VALUES.page,
  perPage = DEFAULT_PAGINATION_VALUES.perPage,
  sortBy = DEFAULT_PAGINATION_VALUES.sortBy,
  sortOrder = DEFAULT_PAGINATION_VALUES.sortOrder,
  filter = {},
}: CustomerServiceParams) => {
  const skip = (page - 1) * perPage;
  const limit = perPage;
  const customQuery = CustomerModel.find();

  if (filter.name) {
    customQuery.where("name", new RegExp(filter.name, "i"));
  }
  if (filter.address) {
    customQuery.where("address", filter.address);
  }
  if (filter.email) {
    customQuery.where("email", filter.email);
  }
  if (filter.spent !== undefined && filter.spent !== null) {
    customQuery.where("spent").lte(filter.spent);
  }
  if (filter.phone !== undefined && filter.phone !== null) {
    customQuery.where("phone").lte(filter.phone);
  }

  return customQuery
    .sort({ [sortBy]: sortOrder === "asc" ? 1 : -1 })
    .skip(skip)
    .limit(limit);
};

export { getCustomerServices };
