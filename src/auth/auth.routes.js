const express = require("express");
const router = express.Router();
const {
  postLoginUser,
  postRegisterUser,
  postLogoutUser,
} = require("./auth.controller");
const localMiddleWare = require("../middlewares/local.middleware");
const isAuthMiddleWare = require("../middlewares/isAuth.middleware");

router.post("/register", postRegisterUser);
router.post("/login", localMiddleWare, postLoginUser);
router.post("/logout", isAuthMiddleWare, postLogoutUser);

module.exports = router;
