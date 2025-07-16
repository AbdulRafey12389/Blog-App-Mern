//NODE MODULES...
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';

// CUSTOM MODULES
import { connectToDatabase, disconnectFromDatabase } from './src/config/db.js';
import v1Routes from './src/routes/v1/index.js';

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

// SERVER LISTENING HERE with eife...
(async () => {
  try {
    await connectToDatabase(process.env.MONGODB_URI);

    app.use('/api/v1', v1Routes); // SERVER LISTENING HERE with eife...

    app.listen(PORT, () => {
      console.log(`Server running: http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`Faild to start the se ${error}`);
  }
})();

// HANDLE SHUTDOW SERVER OR DISCONNECTING DATABASE...
const handleServerShutdown = async () => {
  try {
    await disconnectFromDatabase();

    console.warn('Server SHUTDOWN');

    process.exit(0);
  } catch (error) {
    console.error('Error during server  shutdown', error);
  }
};

// LISTENS FOR TERMINATION SIGNALS (`SIGNTERM` AND `SIGINT`).
process.on('SIGTERM', handleServerShutdown);
process.on('SIGINT', handleServerShutdown);
