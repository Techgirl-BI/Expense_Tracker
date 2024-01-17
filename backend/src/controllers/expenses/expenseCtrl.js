import expressAsyncHandler from "express-async-handler";
import Expense from "../../models/Expenses.js";
export const createExpense = expressAsyncHandler(async (req, res) => {
  const { title, amount, description, user, category, type } = req.body;
  try {
    const expense = await Expense.create({
      title,
      amount,
      description,
      user,
      category,
      type,
    });
    res.status(200).json(expense);
  } catch (error) {
    res.json(error);
  }
});
export const getAllExpense = expressAsyncHandler(async (req, res) => {
  const { page } = req.query; 
  try {
    const expenses = await Expense.paginate({}, { limit: 10, page: Number(page) });
    res.status(200).json(expenses);
  } catch (error) {
    res.json(error);
  }
});

export const getExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const expense = await Expense.findById(id);
    res.status(200).json(expense);
  } catch (error) {
    res.json;
  }
});
export const updateExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  const { title, amount, description, user, category, type } = req.body;
  try {
    const expense = await Expense.findByIdAndUpdate(
      id,
      {
        title,
        amount,
        description,
        user,
        category,
        type,
      },
      { new: true }
    );
    res.status(200).json(expense);
  } catch (error) {
    res.json(error);
  }
});
export const deleteExpense = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const expense = await Expense.findByIdAndDelete(id);
    res.status(200).json(expense);
  } catch (error) {
    res.status(error.status).json(error.message);
  }
});
