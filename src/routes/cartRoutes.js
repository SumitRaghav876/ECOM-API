import express from "express";

const router=express.Router();

import {getCart , addToCart} from "../controllers/cartController.js";
router.post('/cart/add',addToCart);
router.get('/cart', getCart);

export default router;