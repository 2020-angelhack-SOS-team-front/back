import { app } from './app';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

const HOST = process.env.HOST || 'localhost'
const PORT = Number(process.env.PORT || 3000)

const connectDatabase = async () => {
  return new Promise((resolve, reject) => {
    mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
      keepAlive: 300000,
      connectTimeoutMS: 30000,
    }, (err) => {
      if (err) {
        reject(err);
      } else {
        console.log(`successfully connect database`);
        resolve();
      }
    });
  })
}

app.listen(PORT, HOST, async (err) => {
  await connectDatabase();
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${HOST}:${PORT}`);
});
