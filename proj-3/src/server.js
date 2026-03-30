import express from 'express'
import dotenv from 'dotenv';
import { connDb } from './db/db.js';
import router from './routes/authRoute.js';

const app = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use('/api',router);

// Connection Database
await connDb();

//routes
app.get('/', (req ,res ) => {
    res.send("Hello World");
})

app.listen(PORT, () => {console.log(`Server has started http://localhost:${PORT}`)})