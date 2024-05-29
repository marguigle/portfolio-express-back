import { Schema, model } from "mongoose";

const estudiosSchema = new Schema({
        tipo: {type:String},
        lugar: {type:String},
        titulo:{type:String} ,
        fecha: {type:String}
},
{
    timeStamps:true
})

const EstudiosModel = model("estudios", estudiosSchema);

export default EstudiosModel;
