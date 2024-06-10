import ProyectosModel from "../models/ProyectosModel.js";

const proyectosController = {
  getProyectos: async (req, res) => {
    try {
      const proyectos = await ProyectosModel.find();
      res.json({
        response: proyectos,
        success: true,
        error: null,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se ha podido encontrar los proyectos buscados" });
    }
  },

  getOneProyecto: async (req, res) => {
    try {
      const proyecto = await ProyectosModel.findById(req.params.id);
      if (!proyecto) {
        return res.status(404).json({ message: "Proyecto  no encontrado" });
      }
      res.json({
        response: proyecto,
        success: true,
        error: null,
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "No se ha podido encontrar el proyecto buscado" });
    }
  },
  createProyecto: async (req, res) => {
    try {
      const proyecto = await ProyectosModel.create(req.body);
      res.json({
        response: proyecto,
        success: true,
        error: null,
        status: 200,
        message: "El poryecto se han cargado correctamente",
      });
    } catch (error) {
      res.status(500).json({ message: "no se ha podido guardar el proyecto" });
    }
  },
  updateProyecto: async (req, res) => {
    try {
      const proyectoActualizado = await ProyectosModel.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      res.json({
        response: proyectoActualizado,
        status: 200,
        success: true,
        error: null,
        message: "El proyecto se ha actualizado correctamente",
      });
    } catch (error) {
      res
        .status(500)
        .json({ message: "no se ha podido actualizar el proyecto" });
    }
  },
  deleteProyecto: async (req, res) => {
    try {
      const proyecto = await ProyectosModel.findByIdAndDelete(req.params.id);
      if (!proyecto) {
        res.status(500).json({
          message: "No se ha podido eliminar el proyecto seleccionada",
        });
      }
      res.json({
        success: true,
        message: "El proyecto se elimino correctamente",
      });
      return;
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "error al borrar el proyectoe",
      });
    }
  },
};

export default proyectosController;
