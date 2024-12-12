import express from "express";
import {
    createAdmin,
    deleteAdmin,
    getAdminById,
    getAllAdmin,
    loginAdmin,
    updateAdmin,
} from "../Controller/admin.Controller.js";

const router = express.Router();

router.post("/create-admin", createAdmin);
router.get("/get-all-admin", getAllAdmin);
router.get("/get-admin-by-id", getAdminById);
router.delete("/delete-admin", deleteAdmin);
router.put("/update-admin", updateAdmin);
router.post("/admin-login", loginAdmin);

export { router as adminRoutes };
