import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {
        try {
            const {
                email,
                password
            } = req.body;

            //Validadmos usuario con findOne()
            const user =  await User.findOne({ email });
            if (!user) {
                return res
                    .status(401)
                    .json({
                        message: 'Usuario no encontrado'
                    });
            }
            //Validamos contraseña con bcrypt.compare()
            const validPassword = await bcrypt.compare( password, user.password );
            if (!validPassword) {
                return res
                    .status(401)
                    .json({
                        message: 'Credenciales incorrectas'
                    });
            }
            //Si llega hasta aquí, genera token y lo devuelve
            const token =
                jwt.sign(
                    {
                        id: user._id,
                        email: user.email,
                        role: user.role
                    },
                    "Mundial2026",
                    //process.env.JWT_SECRET, //pendiente de externalizar en la variable de env
                    {
                        expiresIn: '1h'
                    }
                );
            res.json({ token });
        }
        catch (error) {
            res.status(500).json({
                    message: error.message
            });
        }
    };
