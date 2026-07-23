import User from '../models/User.js';
import bcrypt from 'bcryptjs';

export const createUser = async (req, res) => {
        try {
            const existingUser = await User.findOne({  email: req.body.email  });
            if (existingUser) {
                return res.status(400)
                    .json({
                        message: 'Usuario ya existe'
                    });
            }
            const hashedPassword = await bcrypt.hash( req.body.password, 10 );
            const user = new User({
                    email: req.body.email,
                    password: hashedPassword,
                    role: req.body.role
                });
            const savedUser = await user.save();
            console.log("Usuario creado : ", savedUser);
            res.status(201).json({ message: 'Usuario creado' });
            //res.status(201).json(savedUser);
        }
        catch (error) {
            res.status(500).json({ message: error.message });
        }
    }