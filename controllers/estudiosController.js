import EstudiosModel from '../models/EstudiosModel.js'

const estudiosController = {

    getEstudios: async(req,res)=>{
        try {
           const estudios = await EstudiosModel.find()
            res.json({
                response: estudios,
                success: true,
                error: null
            })
            } catch (error) {
                res.status(500).json({ message: "No se ha podido encontrar los estudios buscados" });  
            }

    },
    getOneEstudio:async(req,res)=>{
        try {
            const estudio =await EstudiosModel.findById(req.params.id)
            if (!estudio) {
                return res.status(404).json({ message: "Estudio no encontrado" });
            }
            res.json({
                response: estudio,
                success: true,
                error: null

            })

        } catch (error) {
            res.status(500).json({ message: "No se ha podido encontrar el estudio buscado" }); 
        }

    },
    createEstudio:async(req,res)=>{
     try {
        const estudio = await EstudiosModel.create(req.body)
        res.json({
            response:estudio,
            success:true,
            error:null,
            status:200,
            message: "El estudio se han cargado correctamente"

        })
     } catch (error) {
        res.status(500).json({message:"no se ha podido guardar el estudio"})
     }

    },
    updateEstudio:async(req,res)=>{
        try {
            const estusioActualizado = await EstudiosModel.findByIdAndUpdate(req.params.id,req.body, { new: true })
            res.json({
                response:estusioActualizado,
                status:200,
                success:true,
                error:null,
                message:"El estudio se ha actualizado correctamente"
            })
            
        } catch (error) {
            res.status(500).json({message:"no se ha podido actualizar el estudio"})
        }
    },
    deleteEstudio:async(req,res)=>{
        try {
            const estudio = await EstudiosModel.findByIdAndDelete(req.params.id);
            if(!estudio){
            res.status(500).json({ message: "No se ha podido eliminar el estudio seleccionado" })
            }
            res.json({
                success:true,
                message:"Es estudio se elimino correctamente"
            })
            return
            
        } catch (error) {
            res.status(500).json({
           
                success:false,
                message:"error al borrar el estudio"})
        }

    }
  

}

export default estudiosController