import mongoose from "mongoose";
import "dotenv/config.js";
mongoose
  .connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("🔍database conected");
  })
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err.message);
  });
