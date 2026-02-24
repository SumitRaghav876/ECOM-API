import Cart from "../models/Cart.js";
import Product from "../models/Product.js";

export const addToCart = async(req,res)=>{
    try{
        const {productId,quantity}=req.body;

        // to validate the requests
        if(!productId || !quantity || quantity<=0){
            return res.status(400).json({error:"Invalid productId or quantity"});
        }

        // to check if the product exists or not
        const product = await Product.findOne({ id: productId });
        if(!product){
            return res.status(404).json({error:"Product not found"});
        }

        // finding or creating default cart
        let cart=await Cart.findOne({cartId:'default_cart'});
        if(!cart){ // create new cart
            cart=new Cart({cartId:'default_cart',items:[]});
        }

        const itemIndex=cart.items.findIndex((item)=>{
            return item.productId===productId;
        });
        if(itemIndex > -1){
            cart.items[itemIndex].quantity += quantity;
        }
        else{
            cart.items.push({productId,quantity});
        }

        await cart.save();
        res.json({success:true});
    }
    catch(error){
        res.status(500).json({error:"failed to add item to cart"});
    }
};

export const getCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({ cartId: 'default_cart' });

    if (!cart) {
      return res.json([]); 
    }
    res.json(cart.items);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve cart' });
  }
};