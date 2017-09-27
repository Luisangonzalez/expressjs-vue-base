import { api } from './api';

import cors from 'cors';

// TODO Enable all cors, change with enviroment variable

export let routes = (app) => {

  app.use(cors(true));
  api(app);

};
