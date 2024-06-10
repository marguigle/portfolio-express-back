import HardSkillsModel from "../models/HardSkillsModel.js";
import mongoose from "mongoose";
const hardSkillsController = {
  getHardSkills: async (req, res) => {
    try {
      const hardSkills = await HardSkillsModel.find();

      res.json({
        response: hardSkills,
        success: true,
        error: null,
      });
    } catch (error) {
      res.status(500).json({ message: "no se han encontrado hard skills" });
    }
  },

  getOneHardSkills: async (req, res) => {
    try {
      const hardSkill = await HardSkillsModel.findById(req.params.id);
      if (!hardSkill) {
        return res
          .status(400)
          .json({ message: " hardSkill buscada no existe" });
      }
      res.json({
        response: hardSkill,
        success: true,
        error: null,
      });
    } catch (error) {
      res.status(500).json({ message: "error al buscar la hard skill" });
    }
  },

  createHardSkills: async (req, res) => {
    try {
      const hardSkill = await HardSkillsModel.create(req.body);
      console.log(req.body);
      res.json({
        response: hardSkill,
        success: true,
        error: null,
        status: 200,
        message: "la hard skill se ha cargado correctamente",
      });
    } catch (error) {
      res.stus(500).json({
        error: true,
        message: "no se ha logrado guardar la hard skill cargada",
      });
    }
  },

  updateHardSkills: async (req, res) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "ID de hard skill no válido",
      });
    }

    try {
      const newHardSkill = await HardSkillsModel.findByIdAndUpdate(
        id,
        req.body,
        { new: true }
      );

      if (!newHardSkill) {
        return res.status(404).json({
          error: true,
          success: false,
          message: "No se ha encontrado la hard skill para actualizar",
        });
      }

      res.json({
        response: newHardSkill,
        status: 200,
        success: true,
        error: null,
        message: "La hard skill se ha actualizado correctamente",
      });
    } catch (error) {
      console.error(error); // Registrar el error para depuración
      res.status(500).json({
        error: true,
        success: false,
        message: "No se ha podido actualizar la hard skill",
      });
    }
  },

  deleteHardSkills: async (req, res) => {
    try {
      const hardSkill = await HardSkillsModel.findByIdAndDelete(req.params.id);
      if (!hardSkill) {
        return res.status(400).json({
          message: "la hard skill que intenta borrar no se encuentra",
        });
      }
      res.json({
        success: true,
        message: "la hard skill selecionada se ha eliminado correctamente",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "error al borrar la hard skill",
      });
    }
  },
};
export default hardSkillsController;
