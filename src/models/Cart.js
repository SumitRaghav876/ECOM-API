import mongoose from "mongoose";

const cartSchema=new mongoose.Schema({
    cartId:{
        type:String,
        default:'default_cart'
    },
    items:[{
        productId:{
            type:String,
            required:true
        },
        quantity:{
            type:Number,
            required:true
        }
    }]
});

const cartModel=mongoose.model('Cart',cartSchema);
export default cartModel;