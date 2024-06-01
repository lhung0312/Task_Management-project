const {
  createCustomerService,
  createArrayCustomerService,
  allCustomerService,
  updateCustomerService,
  deleteCustomerService,
} = require("../services/customer.service");
const {
  multipleFilesService,
  singleFileService,
} = require("../services/file.service");
const postCreateCustomer = async (req, res) => {
  let { name, phone, email, description } = req.body;
  let imageURL = "";
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  } else {
    let image = await singleFileService(req.files.image);
    imageURL = image.path;
  }
  let customer = await createCustomerService(
    name,
    phone,
    email,
    description,
    imageURL
  );
  return res.status(200).json({
    errorCode: 0,
    data: customer,
  });
};
const postCreateArrayCustomer = async (req, res) => {
  let customers = await createArrayCustomerService(req.body);
  if (customers) {
    return res.status(201).json({
      errorCode: 0,
      data: customers,
    });
  } else {
    return res.status(201).json({
      errorCode: -1,
      data: customers,
    });
  }
};
const getAllCustomer = async (req, res) => {
  let allCustomer = await allCustomerService();
  return res.status(200).json({
    errorCode: 0,
    data: allCustomer,
  });
};
const putUpdateCustomer = async (req, res) => {
  const _id = req.body.id;
  const { name, phone, email, description } = req.body;
  let imageURL = "";
  if (req.files || Object.keys(req.files).length === 0) {
    let image = await singleFileService(req.files.image);
    imageURL = image.path;
  }

  let newCustomer = await updateCustomerService(
    _id,
    name,
    phone,
    email,
    description,
    imageURL
  );
  return res.status(200).json({
    errorCode: 0,
    data: newCustomer,
  });
};
const deleteACustomer = async (req, res) => {
  let deletedUser = await deleteCustomerService(req.params.id);
  return res.status(200).json({
    errorCode: 0,
    data: deletedUser,
  });
};
module.exports = {
  postCreateCustomer,
  postCreateArrayCustomer,
  getAllCustomer,
  putUpdateCustomer,
  deleteACustomer,
};
