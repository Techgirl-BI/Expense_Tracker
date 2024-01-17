import mongoose from "mongoose";
import bcrypt from "bcryptjs";
import mongoosePaginate from "mongoose-paginate-v2"

const incomeSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: [true, "User id is required"]
      },
      description: {
        type: String,
        required: [true, "description is required"],
      },
      amount: {
        type: Number,
        required: [true, "amount is required"]
      },
      category: {
        type: String,
        required: [true, "category is required"]
      },
      date: {
        type: Date,
        default: Date.now,
      },
      type: {
        type: String,
        required: [true, "type is required"],
        default: "Income"
      }
    }, {
      timeStamp: new Date,
    
      toJSON: {
        virtuals: true,
      },
      toObject: {
        virtuals: true,
      },
    });    
    incomeSchema.plugin(mongoosePaginate);
const Income = mongoose.model("Income", incomeSchema)

export default Income