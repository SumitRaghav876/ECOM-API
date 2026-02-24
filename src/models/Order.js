import mongoose from "mongoose";

const orderSchema=new mongoose.Schema({
    orderId:{
        type:String,
        required:true,
        unique:true
    },
    items:[{
        productId:{
            type:String
        },
        quantity:{
            type:Number
        }
    }],
    total:{
        type:Number,
        required:true
    },
    createdAt:{
        type:Date,
        default: Date.now
    }
});

const orderModel=mongoose.model('Order',orderSchema);
export default orderModel;