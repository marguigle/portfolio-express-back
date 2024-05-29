import express from 'express';
import expLaboralController from '../controllers/expLaboralController.js';

const expLaboralRouter = express.Router();
const BASE_ROUTE = "/explaboral";

expLaboralRouter.get(BASE_ROUTE, expLaboralController.getExpLaboral);
expLaboralRouter.get(`${BASE_ROUTE}/:id`, expLaboralController.getOneExpLaboral);
expLaboralRouter.post(BASE_ROUTE, expLaboralController.createExpLaboral);
expLaboralRouter.put(`${BASE_ROUTE}/:id`, expLaboralController.updateExpLaboral);
expLaboralRouter.delete(`${BASE_ROUTE}/:id`, expLaboralController.deleteExpLaboral);

export default expLaboralRouter;
