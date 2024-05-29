import ActDocenteModel from '../models/ActDocenteModel.js'

const actDocenteController = {

    getActDocentes: async(req,res)=>{
        try {
           const actDocente = await ActDocenteModel.find()
            res.json({
                response: actDocente,
                success: true,
                error: null
            })
            } catch (error) {
                res.status(500).json({ message: "No se ha podido encontrar la actividad docente buscada" });  
            }
         },

    getOneActDocente:async(req,res)=>{
        try {
            const actDocente =await ActDocenteModel.findById(req.params.id)
            if (!actDocente) {
                return res.status(404).json({ message: "Actividad docente  no encontrada" });
            }
            res.json({
                response: actDocente,
                success: true,
                error: null

            })

        } catch (error) {
            res.status(500).json({ message: "No se ha podido encontrar la actividad docente buscada" }); 
        }

    },

    createActDocente:async(req,res)=>{
     try {
        const actDocente = await ActDocenteModel.create(req.body)
        res.json({
            response:actDocente,
            success:true,
            error:null,
            status:200,
            message: "La actividad docente se han cargado correctamente"

        })
     } catch (error) {
        res.status(500).json({message:"no se ha podido guardar la actividad docente"})
     }

    },
    updateActDocente:async(req,res)=>{
        try {
            const actDocenteActualizado = await ActDocenteModel.findByIdAndUpdate(req.params.id,req.body, { new: true })
            res.json({
                response:actDocenteActualizado,
                status:200,
                success:true,
                error:null,
                message:"La actividad docente se ha actualizado correctamente"
            })
            
        } catch (error) {
            res.status(500).json({message:"no se ha podido actualizar la actividad docente"})
        }
    },
    deleteActDocente:async(req,res)=>{
        try {
            const actDocente = await ActDocenteModel.findByIdAndDelete(req.params.id);
            if(!actDocente){
            res.status(500).json({ message: "No se ha podido eliminar la actividad docente seleccionada" })
            }
            res.json({
                success:true,
                message:"La actividad docente se elimino correctamente"
            })
            return
            
        } catch (error) {
            res.status(500).json({
           
                success:false,
                message:"error al borrar la actividad docente"})
        }
    }  

}

export default actDocenteController