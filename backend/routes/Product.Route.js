import express from "express";

import { getalluser,insertnewuser,updateuser,deleteuser } from "../controllers/Product.Controller.js";
const router=express.Router();

router.get("/",getalluser)
router.post("/",insertnewuser)

export default router;