import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';
const expenseSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  type: {
    type: String,
    required: [true, "type is required"],
    default: "Expense",
  }
});

expenseSchema.plugin(mongoosePaginate)
const Expense = mongoose.model('Expense', expenseSchema);

export default Expense;
