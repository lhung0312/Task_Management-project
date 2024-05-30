const express = require("express");
const router = express.Router();
const postUploadSingleFile = require("../controllers/file.controller");

router.post("", postUploadSingleFile);
module.exports = router;
