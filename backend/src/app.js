import express from 'express'
import dbConnect from './config/db.js'
import cors from 'cors'
import { userRoute } from './routes/user/userRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
import {incomeRouter} from './routes/income/incomeRoute.js'
import { expenseRouter } from './routes/expenses/expenseRoute.js'
const app = express()
//middlewares
app.use(express.json())
app.use(cors())
dbConnect()
//routes
app.use('/users', userRoute)
app.use('/income', incomeRouter)
app.use('/expense', expenseRouter)
app.get('/', (req,res) => {
    res.status(200).send("Welcome to my Expense tracker")
    })
    
//error
app.use(notFound)
app.use(errorHandler)
export default app