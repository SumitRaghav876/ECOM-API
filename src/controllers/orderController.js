import Order from "../models/Order.js";
import Product from "../models/Product.js";
import { v4 as uuidv4 } from 'uuid';

export const createOrder = async(req,res)=>{
    try{
        const {items}=req.body;
        
        if(!items || items.length===0){
            return res.status(400).json({ error: "Add valid number of items!" })
        }
        let total = 0;

        //validating the stock
        for(const item of items){
            const product=await Product.findOne({id:item.productId});

            if(!product){
                return res.status(404).json({error:`Product with ${item.productId} not found`});
            }

            if (product.stock < item.quantity) {
                return res.status(400).json({ error: `Insufficient stock for ${product.name}. Available: ${product.stock}`});
            }

            total += product.price * item.quantity;
        }

        // deducting stock
        for (const item of items) {
            await Product.updateOne(
                { id: item.productId },
                { $inc: { stock: -item.quantity } } 
            );
        }

        // create order
        const orderId = uuidv4(); 
        const newOrder = new Order({
            orderId,
            items,
            total
        });
        await newOrder.save();

        res.status(201).json({
            orderId: newOrder.orderId,
            total: newOrder.total
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to process order' });
    }
}