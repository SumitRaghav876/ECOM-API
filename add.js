import fs from 'fs/promises'; 
import Product from './src/models/Product.js';
import {connectDB} from './src/config/db.js';

const addData = async () => {
  try {
        await connectDB();
        
        const data = await fs.readFile('./product.json', 'utf-8');
        const products = JSON.parse(data);

        console.log('Deleting old products...');
        await Product.deleteMany({});

        console.log(`Inserting ${products.length} products...`);
        await Product.insertMany(products);

        console.log('Success! Data added.');
        process.exit();  
    } 
    catch (error) {
        console.error(' Error adding data:', error);
        process.exit(1);
    }
};

addData();