const express = require("express");
const { createTodo } = require("./types.js");
const { updateTodo } = require("./types.js");
const { Todo } = require("./db/db");
const cors= require("cors");
const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("i am main root ");
});

app.post("/todo", (req, res) => {
  const payload = req.body;
  const todo = createTodo.safeParse(payload);
  console.log(todo);
  if (!todo.success) {
    return res.status(404).json({
      message:
        "The provided input is incorrect or invalid. Please check your request and try again.",
    });
  }
  Todo.create({
    title: todo.data.title,
    description: todo.data.description,
    completed: false,
  }).then(() => {
    res.json({
      message: "To-do Created successfully",
    });
  });
});

app.get("/todos", (req, res) => {
  Todo.find({})
  .then((todo) => {
    res.json({
      todos: todo,
    });
  });
});

app.put("/completed", async (req, res) => {
  const updatePayload = req.body;
  console.log("i am update payload",req.body.id);
  const parsePayload = updateTodo.safeParse(updatePayload);
  console.log("i am parse payload",parsePayload);
  if (!parsePayload.success) {
    return res.status(404).json({
      message:
        "The provided input is incorrect or invalid. Please check your request and try again.",
    });
  }
  //update the updated input
  await Todo.updateOne(
    {
      title: req.body.title,
    },
    {
      completed: true,
    }
  );
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
