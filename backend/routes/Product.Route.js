import express from 'express';
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/Product.Controller.js';

const router = express.Router();

// Define routes
router.get('/', getUsers);       // GET /users
router.post('/', createUser);   // POST /users
router.put('/:id', updateUser);  // PUT /users/:id
router.delete('/:id', deleteUser); // DELETE /users/:id

export default router;