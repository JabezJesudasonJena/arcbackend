import express from 'express';
import cors from 'cors';
import { connDB }  from './db/db.js';
import dotenv from 'dotenv';


//Middleware
import { authMiddleware } from './middlewares/authMiddleware.js';

dotenv.config()

// Routes
import router from './routes/authRoutes.js'


const app = express();
const PORT = 3000;
await connDB();


app.use(cors());
app.use(express.json());
app.use('/api/signs', router)

// error handling middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

// Test api endpoint
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/test', authMiddleware, (req, res) => {
  res.json({message: "Entered"})
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});