import { Schema, model } from "mongoose";

const expLaboralSchema = new Schema({
    lugar: { type: String },
    cargo: { type: String },
    fecha: { type: String },
    logos: { type: String }
}, {
    timestamps: true
});

const ExpLaboralModel = model("expLaboral", expLaboralSchema);

export default ExpLaboralModel;
