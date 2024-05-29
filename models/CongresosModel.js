import { Schema,model } from "mongoose";

const congresosSchema = new Schema({

lugar:{type:String},
titulo:{type:String}
},{
    timeStamps:true
})

const CongresosModel = model("congresos",congresosSchema);

export default CongresosModel ;