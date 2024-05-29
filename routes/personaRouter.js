import express from 'express';
import personaController from '../controllers/personaController.js';

const personaRouter = express.Router();
const BASE_ROUTE = "/persona";
personaRouter.get(BASE_ROUTE, personaController.getPersona);
personaRouter.post(BASE_ROUTE, personaController.createPersona);
personaRouter.put(`${BASE_ROUTE}/:id`, personaController.updatePersona);
personaRouter.delete(`${BASE_ROUTE}/:id`, personaController.deletePersona);

export default personaRouter;
