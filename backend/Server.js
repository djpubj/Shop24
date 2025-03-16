import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/User.Route.js';
import { connectDB } from './config/Db.js';
import productRoutes from './routes/Product.Route.js'

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use('/users', userRoutes); // All user routes will be under /users
app.use("/products",productRoutes); // All user routes will be under /products

// Start the server
app.listen(PORT, () => {
    connectDB();
    console.log('Server started at http://localhost:' + PORT);
});