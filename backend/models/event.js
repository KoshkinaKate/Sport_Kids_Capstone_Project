const mongoose = require("mongoose")
const eventSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true, //make this title field mandatory
        trim: true  //removes whitespace from the title
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        enum: ['upcoming', 'ongoing', 'completed'],
        default: 'upcoming'
    },
    
})

const Event = mongoose.model("Event", eventSchema)

module.exports = Event