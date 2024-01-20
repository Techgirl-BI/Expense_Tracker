import { generateToken } from "../../middleware/generateToken.js";
import User from "../../models/User.js";
import expressAsyncHandler from "express-async-handler";

export const registerUser = expressAsyncHandler(async (req, res) => {
  const { firstname, lastname, email, password } = req?.body;
  const userExists = await User.findOne({ email });
  if (userExists) throw new Error(`User ${firstname} already exists`);
  try {
    const newUser = await User.create({ firstname, lastname, email, password });
    res.status(200).json(newUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

export const allUsers = expressAsyncHandler(async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error);
  }
});
//login User
export const loginUser = expressAsyncHandler(async (req, res) => {
const {email,password} = req?.body

const userFound = await User.findOne({email});
// check if user password match
    if (userFound && await userFound.isPasswordMatch(password)) {
      // Password matches, proceed with login
      res.json({
        _id: userFound?._id,
       token: generateToken(userFound?._id)
      });
  } else {
    // Password mismatch
      res.status(401).json({ message: "Invalid Login Credentials" });
  }
})