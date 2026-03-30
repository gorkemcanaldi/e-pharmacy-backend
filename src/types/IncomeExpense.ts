export interface IncomeExpense {
  name: string;
  type: IncomeExpenseAmount;
  amount: number;
}

export enum IncomeExpenseAmount {
  Expense = "Expense",
  Income = "Income",
  Error = "Error",
}
