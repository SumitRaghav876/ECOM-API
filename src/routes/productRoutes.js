import express from "express";

const router=express.Router();

import {getProducts} from "../controllers/productController.js";
router.get('/products',getProducts);

export default router;