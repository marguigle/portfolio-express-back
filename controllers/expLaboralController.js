import ExpLaboralModel from "../models/ExpLaboralModel.js";

const expLaboralController = {
    getExpLaboral: async (req, res) => {
        try {
            const explaboral = await ExpLaboralModel.find();
            res.json({
                response: explaboral,
                success: true,
                error: null
            });
        } catch (error) {
            res.status(500).json({ message: "No se ha podido encontrar la experiencia laboral buscada" });
        }
    },

    getOneExpLaboral: async (req, res) => {
        try {
            const explaboral = await ExpLaboralModel.findById(req.params.id);
            if (!explaboral) {
                return res.status(404).json({ message: "Experiencia laboral no encontrada" });
            }
            res.json({
                response: explaboral,
                success: true,
                error: null
            });
        } catch (error) {
            res.status(500).json({ message: "No se ha podido encontrar la experiencia laboral buscada" });
        }
    },

    createExpLaboral: async (req, res) => {
        try {
            const explaboral = await ExpLaboralModel.create(req.body);
            res.json({
                response: explaboral,
                succes:true,
                status: 200,
                error: null,
                message: "Los datos de la experiencia laboral se han cargado correctamente"
            });
        } catch (error) {
            res.status(500).json({ message: "No se ha podido cargar los datos de la experiencia laboral" });
        }
    },

    updateExpLaboral: async (req, res) => {
        try {
            const explaboral = await ExpLaboralModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!explaboral) {
                return res.status(404).json({ message: "Experiencia laboral no encontrada" });
            }
            res.json({
                response: explaboral,
                success: true,
                error: null,
                message: "Los datos de la experiencia laboral se han actualizado correctamente"
            });
        } catch (error) {
            res.status(500).json({ message: "No se ha podido actualizar los datos de la experiencia laboral" });
        }
    },

    deleteExpLaboral: async (req, res) => {
        try {
            const explaboral = await ExpLaboralModel.findByIdAndDelete(req.params.id);
            if (!explaboral) {
                return res.status(404).json({ message: "Experiencia laboral no encontrada" });
            }
            res.json({
                response: explaboral,
                success: true,
                error: null,
                message: "La experiencia laboral se ha eliminado correctamente"
            });
        } catch (error) {
            res.status(500).json({ message: "No se ha podido eliminar la experiencia laboral" });
        }
    }
};

export default expLaboralController;

