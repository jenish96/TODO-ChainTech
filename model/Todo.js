const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please Enter Todo Title"]
    },
    description: {
        type: String,
    },
    completed: {
        type: Boolean,
        default: false
    },
    category: {
        type: String,
        required: [true, "Please Enter Todo Category"],
        enum: ["personal", "work", "collage", "health", "finance", "other"]
    },
    due_date: {
        type: Date,
        required: [true, "Please Enter Due-Date"]
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("todos", todoSchema)