import express from 'express'
import { createIncome, deleteIncome, getAllIncome, getIncome, updateIncome } from '../../controllers/income/incomeCtrl.js'
import { authMiddleWare } from '../../middleware/authMiddleware.js'
export const incomeRouter = express.Router()

incomeRouter.post('/', authMiddleWare, createIncome)
incomeRouter.get('/', authMiddleWare, getAllIncome)
incomeRouter.get('/:id', authMiddleWare , getIncome	)
incomeRouter.patch('/:id', authMiddleWare, updateIncome)
incomeRouter.delete('/:id', authMiddleWare, deleteIncome)


