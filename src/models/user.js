const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");

const userSchema = new mongoose.Schema(
  {
    // _id- underscore id ≠ id(sql)
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: String,
    session: String,
  },
  {
    timestamps: true,
  }
);
userSchema.plugin(
  mongoose_delete,
  // { deletedAt: true },
  { overrideMethods: "all" }
);

const User = mongoose.model("user", userSchema);

module.exports = User;
