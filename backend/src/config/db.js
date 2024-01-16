import mongoose from "mongoose";
const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://rachealonimisi:ohunene123@racheals-cluster.c4ckoip.mongodb.net/expense_tracker",
      { useUnifiedTopology: true, useNewUrlParser: true }
    );
    console.log(`Database is connected`);
  } catch (error) {
    console.log(`error ${error}`);
  }
};
export default dbConnect;
