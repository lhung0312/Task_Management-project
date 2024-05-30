const path = require("path");

const singleFileService = async (fileObject) => {
  //path extension
  let baseName = path.basename(fileObject.name);
  let extName = path.extname(fileObject.name);
  let resolvePath = path.resolve(__dirname, "../public/images");
  let finalNameFile = `${baseName}_${Date.now()}${extName}`;
  let uploadPath = `${resolvePath}/${finalNameFile}`;
  try {
    await fileObject.mv(uploadPath);
    return {
      status: "success",
      path: finalNameFile,
      error: null,
    };
  } catch (error) {
    return {
      status: "failed",
      path: null,
      error: JSON.stringify(error),
    };
  }
};
const multipleFilesService = async (filesArray) => {
  try {
    let resultArray = [];
    let countElement = 0;
    for (let i = 0; i < filesArray.length; i++) {
      let baseName = path.basename(filesArray[i].name);
      let extName = path.extname(filesArray[i].name);
      let resolvePath = path.resolve(__dirname, "../public/images");
      let finalNameFile = `${baseName}_${Date.now()}${extName}`;
      let uploadPath = `${resolvePath}/${finalNameFile}`;
      try {
        await filesArray[i].mv(uploadPath);
        resultArray.push({
          status: "success",
          path: filesArray[i].name,
          error: null,
        });
        countElement++;
      } catch (error) {
        resultArray.push({
          status: "failed",
          path: null,
          err: JSON.stringify(error),
        });
      }
    }
    return { countElement: countElement, resultArray: resultArray };
  } catch (error) {
    console.log(error);
  }
};

module.exports = { multipleFilesService, singleFileService };
