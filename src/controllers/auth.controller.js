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
        res.status(500).json({
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
            { _id: foundUser._id },
            process.env.JWT_SECRET,
            { expiresIn: "1hr" },
            (error, token) => {

                if (error) return res.status(400).json({
                    message: "Error al generar el token.",
                    error: error.message,
                });

                res.cookie("token", "", {
                    secure: true,
                    sameSites: "none",
                    httpOnly: false
                });

                return res.status(200).json({
                    message: "Inicio de sesión correcto.",
                    data: { token, user: foundUser },
                });

            }
        );
        
    } catch (error) {
        res.status(500).json({
            message: "Error al iniciar sesion",
            error: error.message,
        });
    }
}


export const verifyToken = async(req, res) => {

    const { token } = req.cookies;

    try {

        if (!token) return res.status(404).json({
            message: "No hay cookies activas",
        });

        jwt.verify(token, process.env.JWT_SECRET, async(error, user) => {

            if(error) return res.status(400).json({
                message: "Error al verificar el token.",
                error: error.message
            });

            const foundUser = await UserModel.findById(user._id);

            if(!foundUser) return res.status(404).json({
                message: "Usuario no encontrado."
            });

            return res.status(200).json({
                user: foundUser,
            });

        });
    

    } catch (error) {
        res.status(500).json({
            message: "Error al verificar el token.",
            error: error.message,
        });
    }
}