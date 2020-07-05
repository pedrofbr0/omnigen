import express from 'express';

import PointController from './controllers/CanalController'
import FormasPagController from './controllers/FormasPagController'

const routes = express.Router();

const pointsController = new PointController();
const formasPagController = new FormasPagController();

routes.get('/formasPag', formasPagController.index);

routes.get('/points', pointsController.index);
routes.get('/points/:id', pointsController.show);

export default routes;