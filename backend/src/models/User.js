import mongoose from "mongoose";
import bcrypt from "bcryptjs";
const userSchema = mongoose.Schema({
    firstname: {
        type: String,
        required: [true, "first name is required"]
    },
    lastname: {
        type: String,
        required: [true, "last name is required"]
    },
    email: {
        type: String,
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        required: [true, "Password is required"]
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
},
 {timestamp: true}
 )
 userSchema.pre('save', async function (next) {
    if (!this.isModified("password")) return next()
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
    next()
 })

 //verify password
 userSchema.methods.isPasswordMatch = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
 }

const User = mongoose.model("User", userSchema)
export default User