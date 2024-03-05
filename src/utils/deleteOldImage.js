import { ApiError } from "./ApiError";
import fs from "fs";

export const deleteOldImage = async (localFilePath) => {
  try {
    fs.unlinkSync(localFilePath);
  } catch (error) {
    throw new ApiError(500, "Error while deleting old image");
  }
};
