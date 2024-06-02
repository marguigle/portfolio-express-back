import { Schema,model } from "mongoose";

const hardSkillsSchema= new Schema({
skill:{type:String},
nivel:{type:String},
porcentaje:{typeof:Number}
},{
    timestamps:true
})
const HardSkillsModel = model("hardSkills",hardSkillsSchema);

export default HardSkillsModel