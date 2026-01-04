import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: String,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  subTodes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:""
    },
  ],// Array of Sub todo
});

export const Todo = mongoose.model("Todo", todoSchema);
