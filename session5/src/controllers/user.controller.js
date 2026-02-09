import asyncHandler from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../model/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import {ApiResponse} from "../utils/ApiResponse.js"
const registerUser = asyncHandler(async (req, res) => {
  // get user deatails form  frontend
  const { fullName, userName, email, password } = req.body;
  // validation check - not empty filed
  console.log("email", email);
  // if(fullName===""){
  //   throw new ApiError("400","full name is required");
  // }
  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All field are required");
  }
  //check if user already exits :userName .emails throw check
  const existedUser = User.findOne({
    $or: [{ userName }, { email }],
  });
  if (!existedUser) {
    throw new ApiError(409, "User with userName or email already exits");
  }

  // check for image ,check success upload avatar

  const avatarLocalPath = req.files?.avatar[0]?.path;
  const coverImageLocalPath = req.files?.coverImage[0]?.path;
  if (!avatarLocalPath) {
    throw new ApiError(400, "avatar file is required");
  }

  //upload the avatar on cloudinary

  const avatar = await uploadOnCloudinary(avatarLocalPath);
  const coverImage = await uploadOnCloudinary(coverImageLocalPath);

  //check for user creation object -create entry in db
  // create user object = create entry in db
  if (!avatar) {
    throw new ApiError(400, "avater file required");
  }

  const user = await User.create({
    fullName,
    avatar: avatar.url,
    coverImage: coverImage?.url || " ",
    email,
    password,
    userName: userName.toLowercase(),
  });

  //remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
    "-password -refreshToken"
  );

  if (!createdUser) {
    throw new ApiError(500, "something went wrong while registering the user");
  }
  // return user creation response when user is created
  return res.status(201).json(
    new ApiResponse(200,createdUser,"User Register Successfully")
  )

});

export { registerUser };
