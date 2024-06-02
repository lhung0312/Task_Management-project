const mongoose = require("mongoose");
var mongoose_delete = require("mongoose-delete");
const Joi = require("joi");

const userSchema = new mongoose.Schema(
  {
    // _id- underscore id ≠ id(sql)
    name: { type: String, required: true },
    email: Joi.string()
      .required()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      }),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    session: Joi.string(),
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
