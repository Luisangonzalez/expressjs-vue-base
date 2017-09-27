import express from 'express';
import bodyParser from 'body-parser';

import { routes } from './routes/index';

const app = express();

app.use(bodyParser.json());

routes(app);

// Allowed all origin (only in dev)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// Static folder
app.use('/', express.static('../front/dist'));

export { app };
