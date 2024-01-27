const express = require("express")
const { getTodos,
    newTodo,
    updateTodo,
    deleteTodo,
    compeleteTodo,
    categorizeTodo } = require("../controller/Todo")
const app = express()

// app - /api/v1/todos/all
app.get("/all", getTodos)

// app - /api/v1/todos/category
app.get("/category", categorizeTodo)

// app - /api/v1/todos/new
app.post("/new", newTodo);

// app - /api/v1/todos/complete/:id
app.patch("/complete/:id", compeleteTodo)

// app - /api/v1/todos/:id
app.route("/:id")
    .patch(updateTodo)
    .delete(deleteTodo)

module.exports = app