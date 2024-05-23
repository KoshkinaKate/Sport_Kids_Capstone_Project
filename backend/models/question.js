const mongoose = require("mongoose")
const questionSchema = new mongoose.Schema({

    body: String,
})

const Question = mongoose.model("Question", questionSchema)

module.exports = Question