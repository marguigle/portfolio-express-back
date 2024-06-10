import { Schema, model } from "mongoose";

const proyectosSchema = new Schema(
  {
    titulo: { type: String },
    imgs: [{ type: String }],
    tecnologias: { type: String },
  },
  {
    timestamps: true,
  }
);

const ProyectosModel = model("proyecto", proyectosSchema);
export default ProyectosModel;
