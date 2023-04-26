const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  text: "",
});

module.exports = mongoose.model("ToDo", todoSchema);
