const express = require("express")
const todoRoute = require("./routes/Todo")
require('./utils/config')
const app = express()

app.use(express.json())

app.use("/api/v1/todos", todoRoute)

app.get("/", async (req, res) => {
    res.send("Working...")
})

app.listen("5000", () => {
    console.log("Server Running on http://localhost:5000/api/v1")
})