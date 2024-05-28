const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    index: true
  },
  password: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true, // Ensure username is required
    unique: true,   // Ensure username is unique
    sparse: true    // This ensures the unique index is not applied to documents where username is null
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;


// Schema?: We create Models for our data and funnel the instances of those models through the routes we created.
