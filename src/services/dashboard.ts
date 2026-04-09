import { CustomerModel } from "../db/models/Customer";
import { IncomeExpenseModel } from "../db/models/IncomeExpense";
import { ProductModel } from "../db/models/Product";
import { SupplierModel } from "../db/models/Suppliers";

const dashboardServices = async () => {
  const totalProducts = await ProductModel.countDocuments();
  const totalSuppliers = await SupplierModel.countDocuments();
  const totalCustomers = await CustomerModel.countDocuments();

  const recentCustomers = await CustomerModel.find({})
    .sort({ createdAt: -1 })
    .limit(5)
    .select("image photo name email spent");

  const transactions = await IncomeExpenseModel.find({})
    .sort({ createdAt: -1 })
    .limit(6);

  return {
    metrics: {
      totalProducts,
      totalSuppliers,
      totalCustomers,
    },
    recentCustomers,
    transactions,
  };
};

export { dashboardServices };
