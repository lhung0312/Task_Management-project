const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  // _id- underscore id ≠ id(sql)
  name: String,
  email: String,
  password: String,
});
const User = mongoose.model("user", userSchema);

module.exports = User;
