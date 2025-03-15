import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/Product.Route.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Register routes
app.use('/users', userRoutes); // All user routes will be under /users

// Start the server
app.listen(PORT, () => {
    console.log('Server started at http://localhost:' + PORT);
});