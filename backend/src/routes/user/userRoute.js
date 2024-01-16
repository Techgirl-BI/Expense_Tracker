import express from 'express'
import { allUsers, registerUser } from '../../controllers/user/userCtrl.js'
export const userRoute = express.Router()

userRoute.post('/register', registerUser)
userRoute.get('/', allUsers)

