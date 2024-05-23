const mongoose = require('mongoose');

const sportSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    body: {
        type: String,
        required: true,
        trim: true
    },
    picture: {
        type: String,
        required: true,
        trim: true
    }
});

const Sport = mongoose.model("Sport", sportSchema);

module.exports = Sport
