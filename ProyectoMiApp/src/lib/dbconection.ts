import mongoose from "mongoose";

const dbConnection = async () => {
  try {

    const mongodbAtlas = process.env.MONGODB_URI || ""; // Obtener URI de conexión de .env
   
    await mongoose.connect(mongodbAtlas);
    console.log("DB Online");
    
  } catch (error) {
    console.error(error);
    throw new Error("Error en la base de datos");
  }
};

export default dbConnection;
