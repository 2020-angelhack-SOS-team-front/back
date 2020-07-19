import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes';
import cors from 'cors';

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: false }));

app.use(routes)

export { app };
