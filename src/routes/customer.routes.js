const express = require("express");
const router = express.Router();
const {
  //   getAllCustomer,
  //   getCustomerById,
  postCreateArrayCustomer,
  postCreateCustomer,
} =
  //   putUpdateCustomer,
  //   deleteCustomerById,
  require("../controllers/customer.controller");
// router.get("", getAllCustomer);
// router.get("/:id", getCustomerById);
router.post("", postCreateCustomer);
router.post("/array", postCreateArrayCustomer);

// router.put("", putUpdateCustomer);
// router.delete("/:id", deleteCustomerById);

module.exports = router;
