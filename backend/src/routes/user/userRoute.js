import express from 'express'
import { allUsers, loginUser, registerUser } from '../../controllers/user/userCtrl.js'
export const userRoute = express.Router()

userRoute.post('/register', registerUser)
userRoute.post('/login', loginUser)
userRoute.get('/', allUsers)

