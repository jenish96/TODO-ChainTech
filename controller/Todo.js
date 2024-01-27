const Todo = require("../model/Todo");

// GET All Tasks
const getTodos = async (req, res) => {
    try {
        const todos = await Todo.find();
        res.status(200).json({
            success: true,
            todos
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

// GET Task in to Categories
const categorizeTodo = async (req, res) => {
    try {
        const qry = [
            {
                $facet: {
                    "personal": [{
                        $match: { category: "personal" }
                    }],
                    "work": [{
                        $match: { category: "work" }
                    }],
                    "collage": [{
                        $match: { category: "collage" }
                    }],
                    "health": [{
                        $match: { category: "health" }
                    }],
                    "finance": [{
                        $match: { category: "finance" }
                    }]
                }
            }
        ]
        const todos = await Todo.aggregate(qry);
        res.status(200).json({
            success: true,
            todos
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

// Create New Task
const newTodo = async (req, res) => {
    try {
        const { title, description, due_date } = req.body

        if (!title || !description || !due_date) {
            res.status(400).json({
                success: false,
                message: "All Fields are Required!"
            })
        } else {
            const todo = await Todo.insertMany(req.body)
            res.status(201).json({
                success: true,
                todo
            })
        }
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

// Mark Task as Complete
const compeleteTodo = async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await Todo.findById(id);
        if (todo.completed) {
            res.status(200).json({
                success: true,
                message: "Task is already Completed!"
            })
        }
        await Todo.updateOne({ _id: id }, { $set: { "completed": true } })
        res.status(200).json({
            success: true,
            message: "Task is Completed"
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

// Update Task
const updateTodo = async (req, res) => {
    try {
        const payload = req.body
        const { id } = req.params

        const todo = await Todo.updateOne({ _id: id }, { $set: payload })
        res.status(200).json({
            success: true,
            message: "Todo Updated Successfully"
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

// Delete Task
const deleteTodo = async (req, res) => {
    try {
        const { id } = req.params
        const todo = await Todo.findByIdAndDelete(id)
        res.status(200).json({
            success: true,
            message: "Todo Deleted Successfully"
        })
    } catch {
        res.status(500).json({
            success: false,
            message: "An unknown error has occurred."
        })
    }
}

module.exports = { getTodos, newTodo, updateTodo, deleteTodo, compeleteTodo, categorizeTodo }