import Product from "../models/Product.js";

export const getProducts = async(req,res)=>{
    try{
        const products=await Product.find({},{_id:0,_v:0});
        res.json(products);
    }
    catch(error){
        res.status(500).json({
            error:"Error while fetching product"
        });
    }
}

