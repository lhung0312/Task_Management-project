const express = require("express");
const router = express.Router();
const {
  getAllUser,
  postCreateUser,
  putUpdateUser,
  deleteUserById,
} = require("../controllers/user.controller");
router.get("", getAllUser);
router.post("", postCreateUser);
router.put("", putUpdateUser);
router.delete("/:id", deleteUserById);

module.exports = router;
