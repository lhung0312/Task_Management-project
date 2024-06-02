const express = require("express");
const router = express.Router();
const {
  getAllProject,
  getProjectById,
  postCreateProject,
  putUpdateProject,
  deleteProjectById,
} = require("../controllers/project.controller");
router.get("", getAllProject);
router.get("/:id", getProjectById);
router.post("", postCreateProject);
router.put("", putUpdateProject);
router.delete("/:id", deleteProjectById);

module.exports = router;
