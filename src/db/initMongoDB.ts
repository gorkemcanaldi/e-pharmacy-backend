import mongoose from "mongoose";

const initMongoDB = async () => {
  try {
    const { MONGO_USER, MONGO_PASSWORD, MONGO_URL, MONGO_DB, MONGO_OPTIONS } =
      process.env;

    await mongoose.connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_URL}/${MONGO_DB}?${MONGO_OPTIONS}`,
    );
    console.log("connected to the database");
  } catch (error) {
    console.log(error);
  }
};
export default initMongoDB;
