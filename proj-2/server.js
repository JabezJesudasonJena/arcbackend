import express from 'express';
import cors from 'cors';
import { connDB }  from './db/db.js';
import dotenv from 'dotenv';

//Routers
import roleRouter from './routes/authRouteRole.js';
import router from './routes/authRoutes.js'

//Middleware
import { authMiddleware } from './middlewares/authMiddleware.js';


// Get the env
dotenv.config()

const app = express();
const PORT = 3000;
await connDB();


app.use(cors());
app.use(express.json());

// Use Routes
app.use('/api/signs', router);
app.use('/api/singsrole', roleRouter);

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

app.get('/admin' , (req, res) => {
  res.status(200).json({User : "admin"});
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});