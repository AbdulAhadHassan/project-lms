import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    let connection;
    console.log("connection=>",connection?.connection?.readyState);
    if(connection?.connection?.readyState != 1){
      connection = await mongoose.connect(process.env.MONGO_URL);
      console.log("Database connected successfully");

    }

  }catch(err){
    console.log(err);

  }
};
