import supabase from '../config/Db.js';

// Fetch all users
export const getUsers = async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('users')
            .select('*');

        if (error) throw error;

        res.json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create a new user
export const createUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const { data, error } = await supabase
            .from('users')
            .insert([{ name, email }])
            .select('*'); // Return the inserted data

        if (error) throw error;

        res.status(201).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a user
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from URL params
        const { name, email } = req.body;

        const { data, error } = await supabase
            .from('users')
            .update({ name, email })
            .eq('id', id) // Match the user by ID
            .select('*'); // Return the updated data

        if (error) throw error;

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a user
export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params; // Get user ID from URL params

        const { data, error } = await supabase
            .from('users')
            .delete()
            .eq('id', id); // Match the user by ID

        if (error) throw error;

        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}; 
