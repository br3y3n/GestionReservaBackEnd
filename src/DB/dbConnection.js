import mongoose from "mongoose";

export const dbConnection = async() => {
    try {
        await mongoose.connect("mongodb+srv://juantest:juantest123@cluster0.9zu8e.mongodb.net/gestion-reserva?retryWrites=true&w=majority&appName=Cluster0");
        console.log("<< DB conectada >>");
        
    } catch (error) {
        console.log("<< Error al conectar la DB >>");
    }
}