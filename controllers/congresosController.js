import CongresosModel from "../models/CongresosModel.js";

const congresosController ={
getCongresos:async(req,res)=>{
    try {
        const congresos = await CongresosModel.find()
        res.json({
            response:congresos,
            success:true,
            error:null
        })
        
    } catch (error) {
        res.status(500).json({message:"no se han podido encotrar congresos"})
        
    }
},

getOneCongreso:async(req,res)=>{
try {
    const congreso = await CongresosModel.findById(req.params.id)
    if(!congreso){
        return res.status(404).json({message:"congreso no encontrado"})
    }
} catch (error) {
    res.status(500).json({message:"No se ha podido encontrar el congreso buscado"})
    
}

},

createCongreso:async(req,res)=>{
try {
    const congreso = await CongresosModel.create(req.body)
    res.json({
        response:congreso,
        success:true,
        error:null,
        status:200,
        message:"El congreso se ha cargado correctamente"



    })
} catch (error) {
    res.status(500).json({message:"no se ha podido guardar el congreso"}) 
}

},

updateCongreso:async(req,res)=>{
    try {
        const congresoActualizado = await CongresosModel.findByIdAndUpdate(req.params.id,req.body,{new:true})
        res.json({
            response:congresoActualizado,
            status:200,
            success:true,
            error:null,
            message:"La actividad docente se ha actualizado correctamente"


        })
    } catch (error) {
        res.status(500).json({message:"no se ha podido actualizar el congreso seleccionado"})
    }
  
},

deleteCongreso: async(req,res)=>{
    try {
        const congreso = await CongresosModel.findByIdAndDelete(req.params.id)
        if(!congreso){
            res.status(500).json({message:"El congreso no se ha encontrado"})
        }
        res.json({
            success:true,
            message:"El congreso se ha eliminado correctamente"
        })
    } catch (error) {
        
    }

}

}
export default congresosController