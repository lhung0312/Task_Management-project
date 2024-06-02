const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");

const customerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    phone: String,
    email: { type: String, required: true },
    description: String,
    image: String,
  },
  {
    timestamps: true,
  }
);
customerSchema.plugin(
  mongoose_delete,
  // { deletedAt: true },
  { overrideMethods: "all" }
);

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
