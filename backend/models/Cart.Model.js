import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    user_id: {
        type: String, // Reference to the user in PostgreSQL
        required: true,
    },
    products: [
        {
            product_id: {
                type: mongoose.Schema.Types.ObjectId, // Reference to the product in MongoDB
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
        },
    ],
    total_amount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        enum: ['pending', 'shipped', 'delivered', 'cancelled'],
        default: 'pending',
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
});

// Create a model for the order schema
const Order = mongoose.model('Order', orderSchema);
export default Order;