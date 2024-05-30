const UploadSingleFileService = require("../services/file.service");

const postUploadSingleFile = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    res.status(400).send("No files were uploaded.");
    return;
  }
  const fileObject = req.files.image;

  let file = await UploadSingleFileService(fileObject);
  return res.status(200).json({
    errorCode: 0,
    data: `upload success imageFile: ${file}`,
  });
};
module.exports = postUploadSingleFile;
