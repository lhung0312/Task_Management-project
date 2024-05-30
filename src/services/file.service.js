const { json } = require("body-parser");
const path = require("path");

const UploadSingleFileService = async (fileObject) => {
  //path extension
  const baseName = path.basename(fileObject.name);
  const extName = path.extname(fileObject.name);
  const resolvePath = path.resolve(__dirname, "../public/images");
  const finalNameFile = `${baseName}_${Date.now()}${extName}`;
  const uploadPath = `${resolvePath}/${finalNameFile}`;

  try {
    await fileObject.mv(uploadPath);
    return finalNameFile;
  } catch (error) {
    return {
      err: JSON.stringify(error),
    };
  }
};

module.exports = UploadSingleFileService;
