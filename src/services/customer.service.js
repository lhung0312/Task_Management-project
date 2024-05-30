const { ReturnDocument } = require("mongodb");
const Customer = require("../models/customer");

const createCustomerService = async (
  name,
  phone,
  email,
  description,
  imageURL
) => {
  try {
    return await Customer.create({
      name,
      phone,
      email,
      description,
      image: imageURL,
    });
  } catch (error) {
    console.log(error);
    return null;
  }
};
const createArrayCustomerService = async (arr) => {
  try {
    return await Customer.insertMany(arr);
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = { createCustomerService, createArrayCustomerService };
