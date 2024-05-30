const express = require("express");
const router = express.Router();
const postUploadFiles = require("../controllers/file.controller");

router.post("", postUploadFiles);
module.exports = router;
