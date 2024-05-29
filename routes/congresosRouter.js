import express from 'express'

import congresosController from '../controllers/congresosController.js'

const congresosRouter = express.Router();
const BASE_ROUTE = "/congresos";

congresosRouter.get(BASE_ROUTE,congresosController.getCongresos);
congresosRouter.get( `${BASE_ROUTE}/:id`,congresosController.getOneCongreso);
congresosRouter.post(BASE_ROUTE,congresosController.createCongreso);
congresosRouter.put(`${BASE_ROUTE}/:id`,congresosController.updateCongreso);
congresosRouter.delete(`${BASE_ROUTE}/:id`,congresosController.deleteCongreso);

export default congresosRouter