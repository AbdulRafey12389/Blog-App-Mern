// NODE MODULES...
import mongoose from 'mongoose';

// CLIENT OPTIONS...
const clientOption = {
  dbName: 'blog-db-mern',
  appName: 'Blog APP MERN',
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// ESTABLISHES A CONNECTION TO THE MONGOdB DATABASE TO THE MONGOOSE...
export const connectToDatabase = async (mongoUri) => {
  if (!mongoUri) {
    throw new Error('MongoDb URI is not defined in the configuration...');
  }

  try {
    await mongoose.connect(mongoUri, clientOption);

    console.log('MongoDb Connected Sucessfully.');
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    console.error('Error connecting to the database.', error);
  }
};

// DISCONNECTS FROM THE MONGODB DATABASE USING MONGOOSE...
export const disconnectFromDatabase = async () => {
  try {
    await mongoose.disconnect();

    console.log('Disconnecting database successfully.');
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }

    console.error('Error to Disconnecting mongoDb database.', error);
  }
};
