import express from 'express'
import { createExpense, deleteExpense, getAllExpense, getExpense, updateExpense } from '../../controllers/expenses/expenseCtrl.js'
import { authMiddleWare } from '../../middleware/authMiddleware.js'
export const expenseRouter = express.Router()

expenseRouter.get('/:id', authMiddleWare, getExpense)
expenseRouter.get('/', authMiddleWare, getAllExpense )
expenseRouter.post('/',authMiddleWare, createExpense)
expenseRouter.patch('/:id', authMiddleWare, updateExpense )
expenseRouter.delete('/:id', authMiddleWare, deleteExpense)


