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
const allCustomerService = async () => {
  try {
    return await Customer.find();
  } catch (error) {
    console.log(error);
    return null;
  }
};
const updateCustomerService = async (
  _id,
  name,
  phone,
  email,
  description,
  image
) => {
  try {
    return await Customer.updateOne(
      { _id },
      { name, phone, email, description, image }
    );
  } catch (error) {
    console.log(error);
    return null;
  }
};
const deleteCustomerService = async (id) => {
  try {
    return await Customer.deleteById(id);
  } catch (error) {
    console.log(error);
    return null;
  }
};
module.exports = {
  createCustomerService,
  createArrayCustomerService,
  allCustomerService,
  updateCustomerService,
  deleteCustomerService,
};
