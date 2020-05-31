import { Router } from 'express';
import usersRouter from './user.routes';
import goalsRouter from './goal.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/goals', goalsRouter);

export default routes;
