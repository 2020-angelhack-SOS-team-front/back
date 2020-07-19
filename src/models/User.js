const express = require("express");
const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
   name: String,
   email: {
      type: String,
      trim: true,
      unique: 1,
   },
   password: {
      type: String,
      minlength: 5,
   },
   image: String,
   roel: Number,
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
