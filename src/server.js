import express from "express";
import { connectDB } from "./config/db.js";
import { ENV } from "./config/env.js";

import productRoutes from "./routes/productRoutes.js";
import cartRoutes from "./routes/cartRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";

const app=express();

//middleware to parse json bodies
app.use(express.json());

connectDB();

app.use('/',productRoutes);
app.use('/',cartRoutes);
app.use('/',orderRoutes);

// error handler for invalid json syntax in requests
app.use((err,req,res,next)=>{
    if(err instanceof SyntaxError && err.status===400 && 'body' in err){
        return res.status(400).json({error:"Invalid json format"});
    }
    next(err);
})

const PORT=ENV.PORT || 3000;

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
});