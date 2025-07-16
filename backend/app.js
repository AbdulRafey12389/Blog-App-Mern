//NODE MODULES...
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// INITIALIZE APP...
const app = express();
dotenv.config();

// CUSTOM VARIABLES...
const PORT = process.env.PORT || 5000;

// MIDDLEWARES...
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());

app.get('/', (req, res) => {
  res.send('working');
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
