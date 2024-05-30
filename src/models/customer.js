const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: String,
  email: String,
  description: String,
  image: String,
});
const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
