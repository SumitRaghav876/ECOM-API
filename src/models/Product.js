import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    stock:{
        type:Number,
        required:true
    }
})

const productModel=mongoose.model('Product',productSchema);

export default productModel;