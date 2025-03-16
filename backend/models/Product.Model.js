import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Product = mongoose.model("Product", productSchema);
export default Product;

// Product → products (lowercase + plural).


// Pehla argument ({}) schema ke {fields} ko define karta hai (jaise name, price, image).
// Dusra argument ({}) schema ke {options} ko define karta hai (jaise timestamps, versionKey, etc.)