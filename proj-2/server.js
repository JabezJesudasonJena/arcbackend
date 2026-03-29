import express from 'express';
import cors from 'cors';
import { connDB }  from './db/db.js'

// Routes
import {signUpRoute} from './routes/authRoutes.js'


const app = express();
const PORT = 3000;
await connDB();


app.use(cors());
app.use(express.json());

app.post('/api/signup', signUpRoute)

app.get('/', (req, res) => {
  res.send('Hello, World!');
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});