import express from "express";
import proyectosController from "../controllers/proyectosController.js";

const proyectosRouter = express.Router();
const BASE_ROUTE = "/proyectos";

proyectosRouter.get(BASE_ROUTE, proyectosController.getProyectos);
proyectosRouter.get(`${BASE_ROUTE}/:id`, proyectosController.getOneProyecto);
proyectosRouter.post(BASE_ROUTE, proyectosController.createProyecto);
proyectosRouter.put(`${BASE_ROUTE}/:id`, proyectosController.updateProyecto);
proyectosRouter.delete(`${BASE_ROUTE}/:id`, proyectosController.deleteProyecto);

export default proyectosRouter;
