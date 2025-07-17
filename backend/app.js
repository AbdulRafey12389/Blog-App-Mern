//NODE MODULES...
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// CUSTOM MODULES
import { connectToDatabase, disconnectFromDatabase } from './src/config/db.js';
import v1Routes from './src/routes/v1/index.js';

// INITIALIZE APP...
const app = express();
dotenv.config();

// CUSTOM VARIABLES...
// const PORT = process.env.PORT || 5000;

// MIDDLEWARES...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.send('working');
});

app.use('/api/v1', v1Routes);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, async () => {
  console.log(`Server listening on port http://localhost:${PORT}`);

  await connectToDatabase(process.env.MONGODB_URI);
});

server.on('close', async () => await disconnectFromDatabase());
