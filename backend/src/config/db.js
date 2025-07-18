// NODE MODULES...
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

// Global cache to persist connection across serverless function calls
if (!global._mongoose) {
  global._mongoose = { conn: null, promise: null };
}

// ESTABLISHES A CONNECTION TO THE MONGOdB DATABASE TO THE MONGOOSE...
export const connectToDatabase = async () => {
  if (global._mongoose.conn) {
    console.log('✅ Using cached MongoDB connection');
    return global._mongoose.conn;
  }

  if (!global._mongoose.promise) {
    console.log('🔄 Creating new MongoDB connection...');
    global._mongoose.promise = await mongoose.connect(MONGODB_URI, {
      dbName: 'blog-db-mern',
      appName: 'Blog APP MERN',
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 30000,
      connectTimeoutMS: 30000,
    });
  }

  try {
    global._mongoose.conn = await global._mongoose.promise;
    console.log('✅ MongoDB connected');
    return global._mongoose.conn;
  } catch (err) {
    console.error('❌ MongoDB connection failed', err);
    throw err;
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
