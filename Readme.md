🚀 E-commerce Backend API
        A robust RESTful API built with Node.js, Express, and MongoDB, following the MVC (Model-View-Controller) architecture. This project handles product management, persistent cart logic, and order processing with real-time inventory updates.

📌 Features
- Product Listing: Fetch all products or specific items from MongoDB.
- Cart Management: Add items to a persistent cart with quantity validation.
- Order System: 
  - Generates unique Order IDs using the `uuid` package.
  - Validates stock availability before confirming orders.
  - Automatically deducts stock upon successful checkout.
- Error Handling: Custom middleware for malformed JSON and specific business logic errors.

 🛠️ Tech Stack
- Runtime: Node.js (ES6 Modules)
- Framework: Express.js
- Database: MongoDB (via Mongoose)
- Utilities: `uuid` for unique identifiers(id), `dotenv` for environment security.

📂 Project Structure
src/
├── config/       Database and Environment configurations
├── controllers/  Business logic (Products, Cart, Orders)
├── models/       Mongoose Schemas (Product, Cart, Order)
├── routes/       Express Route definitions
└── server.js     Application entry/starting point

⚙️ Setup & Installation
Clone the repository

Install Dependencies:
	npm install

Environment Variables: Create a .env file in the root and add:
	PORT=3000
	MONGO_URI=your_mongodb_connection_string

Add Data: Run your add.js script to add data in the database.

Start Server:
	npm start