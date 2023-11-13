import mongoose from "mongoose";
const DatabseConnection = async () => {
  try {
    const DB = await mongoose.connect(process.env.DB_URI);
    console.log(`DB Is Connecte ${DB.connection.host}`);
  } catch (error) {
    console.log(`DB Could not connected`, error);
  }
};

export default DatabseConnection;
