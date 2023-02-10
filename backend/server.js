import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoDB } from './config/db.js';

import { usersRoute } from './routes/users.js';

dotenv.config();

// Connect to mongo
MongoDB();

const app = express();

// Body Parser
app.use(express.json());

// Allow CORS
app.use(cors());

// Mount routers
app.use('/users', usersRoute);

// Listen to the PORT
const PORT = process.env.PORT || 5005;

app.listen(PORT, () => {
    return console.log(`Server started on PORT ${PORT}`.yellow.bold);
});