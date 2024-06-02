import express from "express";
import hardSkillsController from "../controllers/hardSkillsController.js";

const hardSkillsRouter = express.Router();
const BASE_ROUTE = "/hardskills";

hardSkillsRouter.get(BASE_ROUTE, hardSkillsController.getHardSkills);
hardSkillsRouter.get(
  `${BASE_ROUTE}/:id`,
  hardSkillsController.getOneHardSkills
);
hardSkillsRouter.post(BASE_ROUTE, hardSkillsController.createHardSkills);
hardSkillsRouter.put(
  `${BASE_ROUTE}/:id`,
  hardSkillsController.updateHardSkills
);
hardSkillsRouter.delete(
  `${BASE_ROUTE}/:id`,
  hardSkillsController.deleteHardSkills
);

export default hardSkillsRouter;
