const mongoose = require("mongoose");
const { isEmail,isStrongPassword } = require("validator");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
    validate: [isEmail, "Enter a valid email"],
  },

  name: {
    type: String,
    required: [true, "Please enter the name"],
    maxlength: [40, "Username must be less than or equal to 40 characters"],
  },
  password: {
    type: String,
    required: [true, "Enter the password"],
    minlength: [6, "The password should be minimum 6 characters"],

    validate: [isStrongPassword, "Password is too weak"],
  },
});

const User = mongoose.model("user", userSchema);

module.exports = User;
