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
})
//login User
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req?.body;
  // Find the user in db
  const user = await User.findOne({ email });

  // Check if user exists and if the password matches
  if (user && (await user.isPasswordMatch(password))) {
    try {
      // Send response with isAdmin and token
      res.status(200).json({
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
      });
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    // Send response for invalid credentials
    res.status(401).json({ error: "Invalid credentials" });
  }
});
