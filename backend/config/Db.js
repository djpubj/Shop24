import { createClient } from '@supabase/supabase-js';
import mongoose from "mongoose";
import dotenv from 'dotenv';


// supabase connection ----------------------->

dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;

//--------------------------------------------<



// Mongodb connection ----------------------->

export const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected: ${conn.connection.host}`);
    }
    catch (error) { 
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
}

//--------------------------------------------<
