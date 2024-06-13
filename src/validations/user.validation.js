const Joi = require("joi");
Joi.objectId = require("joi-objectid")(Joi);

const validatesIsValidId = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
  });
  const { error } = schema.validate(req.params, { abortEarly: false });
  if (error) {
    return res.status(401).json({
      errorCode: -1,
      msg: "false",
      data: error.details,
    });
  }
  next();
};
const validateCreateUser = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(30).required(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .required(),
    password: Joi.string()
      .pattern(new RegExp("^[a-zA-Z0-9]{6,18}$"))
      .required(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(401).json({
      errorCode: -1,
      msg: "false",
      data: error.details,
    });
  }
  next();
};
const validateUpdateUser = (req, res, next) => {
  const schema = Joi.object({
    id: Joi.objectId().required(),
    name: Joi.string().min(3).max(30).required().optional(),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net"] },
      })
      .optional(),
  });
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    return res.status(401).json({
      errorCode: -1,
      msg: "false",
      data: error.details,
    });
  }
  next();
};

module.exports = {
  validatesIsValidId,
  validateCreateUser,
  validateUpdateUser,
};
