import { app } from './app';
import dotenv from 'dotenv';
import { connectDatabase } from './database/connection';

dotenv.config()

const HOST = process.env.HOST || 'localhost'
const PORT = Number(process.env.PORT || 3000)

app.listen(PORT, HOST, async (err) => {
  await connectDatabase();
  if (err) {
    console.error(err);
  }
  console.log(`server is running on ${HOST}:${PORT}`);
});
