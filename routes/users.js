import  express from "express";
import { deleteUser, getAllUser , getSingleUser, updateUser } from "./../controllers/userController.js";
const router= express.Router()
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";

// updated new user
router.put('/:id', verifyUser, updateUser)

// delete new user
router.delete('/:id',verifyUser,deleteUser)

// getSingle user
router.get('/:id',verifyUser ,getSingleUser)

// create getAll user
router.get('/', verifyAdmin , getAllUser)

export default router;