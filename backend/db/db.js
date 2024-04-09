const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://satya07thota:MJmaR2gI7DvgOm2d@cluster0.avmsmqf.mongodb.net/todo"
  )

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});
console.log("hello world");
const Todo = mongoose.model("Todo", todoSchema);

module.exports = {
  Todo,
};
