import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import "./config/database.js";
import personaRouter from "./routes/personaRouter.js";
import expLaboralRouter from "./routes/expLaboralRouter.js";
import estudiosRouter from "./routes/estudiosRouter.js";
import actDocenteRouter from "./routes/actDocenteRouter.js";
import congresosRouter from "./routes/congresosRouter.js";
import hardSkillsRouter from "./routes/hardSkillsRouter.js";
import proyectosRouter from "./routes/proyectosRouter.js";
dotenv.config();
const app = express();
app.listen(process.env.PORT, () => {
  console.log("server running on port " + process.env.PORT);
});

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("bienvenido a mi servidor");
});

app.use("/api", personaRouter);
app.use("/api", expLaboralRouter);
app.use("/api", estudiosRouter);
app.use("/api", actDocenteRouter);
app.use("/api", congresosRouter);
app.use("/api", hardSkillsRouter);
app.use("/api", proyectosRouter);
