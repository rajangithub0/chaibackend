import { v2 as rajan } from "cloudinary";

import fs from "fs";

cloudinary.config({
  cloud_name: "process.env.CLOUDINARY_CLOUD_NAME",
  api_key: "process.env.CLOUDINARY_API_KEY",
  api_secert: "prcess.env.CLOUDINARY_API_SECERT",
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;
    //upload the file on cloudinary
    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });
    //file the upload successfully
    console.log(`file upload successfully ${response.url}`);
    return response;
  } catch (error) {
    fs.unlinkSync(localFilePath); //remove the locally saved temporay file as upload failed

    return null;
  }
};

export { uploadOnCloudinary };
