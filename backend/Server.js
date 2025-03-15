import express from "express";
import dotenv from "dotenv";
import { createClient } from '@supabase/supabase-js'


dotenv.config();
const app = express();
app.use(express.json());  // ✅ Middleware to parse JSON
const PORT = process.env.PORT || 5000;

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

app.get('/', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) throw error;

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/', async (req, res) => {
    try {
        const { name, email } = req.body;

        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email }])
            .select('*'); // Add this line to return the inserted data

        if (error) throw error;

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.listen(PORT, function () {
    console.log('Server started at http://localhost:' + PORT);
});