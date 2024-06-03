const express = require("express");
const router = express.Router();
const {
  getAllCustomer,
  postCreateArrayCustomer,
  postCreateCustomer,
  putUpdateCustomer,
  deleteACustomer,
} = require("../controllers/customer.controller");
router.get("", getAllCustomer);
router.post("", postCreateCustomer);
router.post("/array", postCreateArrayCustomer);
router.put("", putUpdateCustomer);
router.delete("/:id", deleteACustomer);

module.exports = router;
