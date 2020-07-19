import mongoose from 'mongoose';

export const connectDatabase = async () => {
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