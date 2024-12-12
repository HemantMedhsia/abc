import express from "express";
import {
    createUser,
    getAllUsers,
    getUserId,
    updateUser,
} from "../Controller/user.Controller.js";
import upload from "../util/multerConfig.js";

const router = express.Router();

router.post("/create-user", upload.single("img"), createUser);
router.get("/get-all-user", getAllUsers);
router.get("/get-single-user", getUserId);
router.put("/update-user/:id", updateUser);

export { router as userRoutes };
