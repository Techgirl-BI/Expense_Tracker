import expressAsyncHandler from "express-async-handler";
import Income from "../../models/Income.js";

export const createIncome = expressAsyncHandler(async (req, res) => {
  const { title, amount, description, user, category } = req.body;
  try {
    const income = await Income.create({
      title,
      amount,
      description,
      user,
      category,
    });
    res.status(200).json(income);
  } catch (error) {
    res.json(error);
  }
});
export const getAllIncome = expressAsyncHandler(async (req, res) => {
  const {page} = req.query
  try {
    const income = await Income.paginate({}, {limit:10, page:Number(page)});
    res.status(200).json(income);
  } catch (error) {
    res.json(error);
  }
});
export const getIncome = expressAsyncHandler(async (req, res) => {
  const { id } = req?.params;
  try {
    const income = await Income.findById(id);
    res.status(200).json(income);
  } catch (error) {
    res.json;
  }
});
export const updateIncome = expressAsyncHandler(async (req, res) => {
    const { id } = req?.params
    const {title, amount, description, user, category} = req.body
    try {
        const income = await Income.findByIdAndUpdate(id, {
            title,
            amount,
            description,
            user,
            category
        }, {new: true})
res.status(200).json(income)
    } catch (error) {
        res.json(error)
    }
})
export const deleteIncome = expressAsyncHandler(async (req,res) => {
    const {id} = req?.params
    try {
       const income = await Income.findByIdAndDelete(id)
       res.status(200).json(income)
    } catch (error) {
        res.status(error.status).json(error.message)
    }
})