const {
  createCustomerService,
  createArrayCustomerService,
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
module.exports = { postCreateCustomer, postCreateArrayCustomer };