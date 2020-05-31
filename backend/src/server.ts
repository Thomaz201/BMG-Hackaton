import 'reflect-metadata';
import cors from 'cors';
import express from 'express';
import routes from './routes/index';

import './database/index';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('Servidor Back-End Iniciado na porta 3333! ╰(*°▽°*)╯');
});
