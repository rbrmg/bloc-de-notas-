// controllers/authController.js

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getUserByEmail, createUser } from "../models/user.js";

const register = async (req, res) => {
  try {
    const { username, password, email } = req.body;

    // Verificar si el correo electrónico ya está registrado
    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return res
        .status(409)
        .json({
          status: "error",
          message: "El correo electrónico ya está registrado",
        });
    }

    // Hash de la contraseña antes de almacenarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear nuevo usuario
    const userId = await createUser(username, hashedPassword, email);

    // Puedes generar un token de sesión aquí si lo necesitas

    return res
      .status(201)
      .json({ status: "ok", message: "Usuario registrado", data: { userId } });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Verificar si el usuario existe
    const user = await getUserByEmail(email);
    if (!user) {
      return res
        .status(401)
        .json({ status: "error", message: "Credenciales inválidas" });
    }

    // Verificar la contraseña
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res
        .status(401)
        .json({ status: "error", message: "Credenciales inválidas" });
    }

    // Crear un token JWT con la información del usuario
    const tokenInfo = {
      id: user.id,
      role: user.role, // Puedes incluir el rol u otra información relevante
    };

    const token = jwt.sign(tokenInfo, process.env.SECRET, {
      expiresIn: process.env.EXPIRE,
    });

    return res
      .status(200)
      .json({
        status: "ok",
        message: "Inicio de sesión exitoso",
        data: { token },
      });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ status: "error", message: "Error interno del servidor" });
  }
};

export { register, login };
