import mongoose from "mongoose";

export async function connectDB() {
  try {
    let connection;
    console.log("connection?.connection=>", connection?.connection);
    console.log("connection?.connection.lcoal=>", process.env.MONGODB_URI);
    console.log("connection?.connection boolian=>", connection?.connection?.readyState !=1);
    if (connection?.connection?.readyState != 1) {
      connection = await mongoose.connect(process.env.MONGODB_URI);
      console.log("DB Connected");
    }
  } catch (err) {
    console.log("err dbconnect=>", err);
  } 
}