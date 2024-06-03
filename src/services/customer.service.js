const Customer = require("../models/customer");
const aqp = require("api-query-params");

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
const allCustomerService = async (page, limit, queryString) => {
  try {
    let results;
    if (page && limit) {
      const { filter, sort, projection, population } = aqp(queryString);
      delete filter.page;
      const offset = (page - 1) * limit;
      results = await Customer.find(filter)
        .skip(offset)
        .limit(limit)
        .sort(sort)
        .select(projection)
        .populate(population)
        .exec();
    } else {
      results = await Customer.find();
    }
    return results;
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
