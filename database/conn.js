import mongoose from 'mongoose';

const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL);

    if (connection.readyState === 1) {
      console.log('DB Connected');
    }
  } catch (error) {
    return Promise.reject(errors);
  }
};

export default connectMongo;
