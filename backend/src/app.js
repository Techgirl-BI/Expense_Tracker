import express from 'express'
import dbConnect from './config/db.js'
import cors from 'cors'
import { userRoute } from './routes/user/userRoute.js'
import { errorHandler, notFound } from './middleware/errorMiddleware.js'
const app = express()
//middlewares
app.use(express.json())
app.use(cors())
dbConnect()
//routes
app.use('/users', userRoute)
//error
app.use(notFound)
app.use(errorHandler)
export default app