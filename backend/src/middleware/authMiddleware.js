import jwt from 'jsonwebtoken'
import User from "../models/User.js"
import expressAsyncHandler from 'express-async-handler'

export const authMiddleWare = expressAsyncHandler(async (req,res,next) => {
    let token;
    if(req?.headers?.authorization?.startsWith("Bearer")){
        token = req?.headers?.authorization?.split(" ")[1];
        try {
          if(token) {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await User.findById(decoded.id);
            //attatch user to the request object
            req.user = user;
            next();
          }
        } catch (error) {
           throw new Error("Not Authorized token expired") 
        }
    } else{
        throw new Error("There is no token attatched to the header")
    }
})