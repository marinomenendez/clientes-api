import mongoose from 'mongoose';

export const connectDB = async () => {
    await mongoose.connect(
        "mongodb+srv://admin:admin@cluster0.6kqbm73.mongodb.net/base"
    );
    console.log("Mongo conectado");
}; 