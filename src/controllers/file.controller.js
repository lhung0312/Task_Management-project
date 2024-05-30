const {
  multipleFilesService,
  singleFileService,
} = require("../services/file.service");

const postUploadFiles = async (req, res) => {
  if (!req.files || Object.keys(req.files).length === 0) {
    return res.status(400).send("No files were uploaded.");
  }
  if (Array.isArray(req.files.image) === false) {
    let file = await singleFileService(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: file,
    });
  } else {
    let files = await multipleFilesService(req.files.image);
    return res.status(200).json({
      errorCode: 0,
      data: files,
    });
  }
};
module.exports = postUploadFiles;
