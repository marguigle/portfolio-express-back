import express from 'express';
import estudiosController from '../controllers/estudiosController.js';

const estudiosRouter = express.Router();
const BASE_ROUTE = "/estudios";

estudiosRouter.get(BASE_ROUTE, estudiosController.getEstudios);
estudiosRouter.get(`${BASE_ROUTE}/:id`, estudiosController.getOneEstudio);
estudiosRouter.post(BASE_ROUTE, estudiosController.createEstudio);
estudiosRouter.put(`${BASE_ROUTE}/:id`, estudiosController.updateEstudio);
estudiosRouter.delete(`${BASE_ROUTE}/:id`, estudiosController.deleteEstudio);

export default estudiosRouter;
