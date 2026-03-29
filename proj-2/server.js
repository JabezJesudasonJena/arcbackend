import express from 'express';
import cors from 'cors';
import { connDB }  from './db/db.js';
import dotenv from 'dotenv'

dotenv.config()

// Routes
import router from './routes/authRoutes.js'


const app = express();
const PORT = 3000;
await connDB();


app.use(cors());
app.use(express.json());
app.use('/api/signs', router)

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});