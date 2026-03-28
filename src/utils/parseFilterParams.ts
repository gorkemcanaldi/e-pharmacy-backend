const parseNumber = (value) => {
  const par: number = value;
  if (isNaN(par)) {
    return null;
  }
  return par;
};
// product

const parseCategory = (ctgry) => {
  const category = [
    "Medicine",
    "Heart",
    "Head",
    "Hand",
    "Leg",
    "Dental Care",
    "Skin Care",
  ];

  if (category.includes(ctgry)) {
    return ctgry;
  }

  return null;
};

export const parseFilterParams = (query) => {
  const { name, suppliers, stock, price, category } = query;
  const categoryValue = parseCategory(category);
  const stockValue = parseNumber(stock);
  const priceValue = parseNumber(price);

  return {
    name,
    suppliers,
    stock: stockValue,
    category: categoryValue,
    price: priceValue,
  };
};

// suppliers

const parseStatus = (st) => {
  const status = ["Active", "Deactive"];
  if (status.includes(st)) {
    return st;
  }
  return null;
};

export const parseFilterParamsSup = (query) => {
  const { name, address, suppliers, date, amount, status } = query;
  const statusValue = parseStatus(status);
  const amountValue = parseNumber(amount);
  return {
    name,
    address,
    suppliers,
    date,
    amount: amountValue,
    status: statusValue,
  };
};
