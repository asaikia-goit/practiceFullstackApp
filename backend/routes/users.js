import express from 'express';
const router = express.Router();

import {
    createUser,
    getUsers,
} from '../controller/users.js';

router.route('/').get(getUsers).post(createUser);

// Export the router
export { router as usersRoute };
