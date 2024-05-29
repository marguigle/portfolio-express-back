import { Schema, model } from "mongoose";

const actDocenteSchema = new Schema({
    titulo: {type:String},
    lugar:{type:String}
}, {
    timeStamps:true
})

const ActDocenteModel = model("actDocente", actDocenteSchema);

export default ActDocenteModel;