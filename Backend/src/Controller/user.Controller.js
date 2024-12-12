import wrapAsync from "../util/wrapAsync.js";
import { ApiResponse } from "../util/responseHandler.js";
import { ApiError } from "../util/errorHandler.js";
import { User } from "../Model/user.Model.js";
import { createUserValidation } from "../Validation/user.Validation.js";

export const createUser = wrapAsync(async (req, res, next) => {
    const { error } = createUserValidation.validate({
        ...req.body,
        photo: req.file?.path,
    });

    if (error) {
        return next(new ApiError(400, error.details[0].message));
    }

    const { name, email, description, address, hobby, location } = req.body;

    const newUser = new User({
        name,
        email,
        description,
        address,
        hobby,
        location,
        photo: req.file.path,
    });

    await newUser.save();

    res.status(201).json(
        new ApiResponse(201, newUser, "User Created Successfully")
    );
});

export const getAllUsers = wrapAsync(async (req, res, next) => {
    const users = await User.find();

    if (users.length === 0) {
        return next(new ApiError(404, "No User Found"));
    }

    res.status(200).json(new ApiResponse(200, users, "All Users"));
});

export const getUserId = wrapAsync(async (req, res, next) => {
    const { id } = req.body;

    const user = await User.findById(id);

    if (!user) {
        return next(new ApiError(404, "User Not Found"));
    }

    res.status(200).json(new ApiResponse(200, user, "User Found Successfully"));
});

export const updateUser = wrapAsync(async (req, res, next) => {});
