const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getUserById,
  postCreateUser,
  putUpdateUser,
  deleteUserById,
} = require("../controllers/user.controller");
const {
  validatesIsValidId,
  validateCreateUser,
  validateUpdateUser,
} = require("../validations/user.validation");
router.get("", getAllUser);
router.get("/:id", validatesIsValidId, getUserById);
router.post("", validateCreateUser, postCreateUser);
router.put("", validateUpdateUser, putUpdateUser);
router.delete("/:id", validatesIsValidId, deleteUserById);

module.exports = router;
