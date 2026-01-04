import mongoose from "mongoose";

const SubTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
  complete: {
    type: String,
    default: false,
  },
  createBy: {
    type: mongoose.Schema.Types.ObjectId,   
    ref: "User",
  },
});

export const SubTodo = mongoose.model("SubTodo", SubTodoSchema);
