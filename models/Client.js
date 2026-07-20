import mongoose from "mongoose";

const ClientSchema =
    new mongoose.Schema({
        nombre: {
            type: String,
            required: true
        },
        ciudad: {
            type: String,
            required: true
        },
        facturacion: {
            type: Number,
            required: true
        }
    });
export default mongoose.model(
    'Client',
    ClientSchema
);