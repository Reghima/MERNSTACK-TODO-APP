const mongoose = require("mongoose");

const TodoSchema = mongoose.Schema(
  {
    title: String,
  },
  { timestamps: true }
);

const Todo = mongoose.model("Todo", TodoSchema);
module.exports = { Todo };
