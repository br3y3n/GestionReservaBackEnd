import { UserModel } from "../models/usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async(req, res) => {

    const data = req.body;

    try {

        const foundUser = await UserModel.findOne({ email: data.email });
        if (foundUser) return res.status(400).json({
            message: "Error, ya existe"
        });

        const user = await UserModel(data);

        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(data.password, salt);

        await user.save();

        return res.status(201).json({
            message: "Usuario registrado correctamente.",
            data: user,
        });

    } catch (error) {
        res.status().json({
            message: "Error al registrar",
            error: error.message,
        });
    }
}

export const login = async(req, res) => {

    const data = req.body;

    try {

        const foundUser = await UserModel.findOne({ email: data.email });
        if (!foundUser) return res.status(404).json({
            message: "El usuario no existe."
        });

        const comparePassword = await bcrypt.compare(data.password, foundUser.password);
        if (!comparePassword) return res.status(400).json({
            message: "Credenciales incorrectas."
        });


        jwt.sign(
            { id: foundUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "2hr" },
            (error, token) => {

                if (error) return res.status(400).json({

                });
            }
        )


        res.status(200).json({
            message: "Inicio de sesión correcto.",
            data: comparePassword,
        });



        
    } catch (error) {
        res.status().json({
            message: "Error al iniciar sesion",
            error: error.message,
        });
    }
}
