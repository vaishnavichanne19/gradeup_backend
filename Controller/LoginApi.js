import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"
import dotenv from "dotenv";
import { LoginPage } from "../Model/LoginModule.js";

dotenv.config();

export const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const existingUser = await LoginPage.findOne({ email });

          if (existingUser) {
            return res.status(409).json({
                message: "User already exists, you can login",
                success: false
            });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        await LoginPage.create({username, email, password: hashedPassword });

        res.status(201).json({
            message: "Signup successfully",
            success: true
        });
    } catch (err) {
        console.error("Signup error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};


export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

           const user = await LoginPage.findOne({ email });
  if (!user) return res.status(400).json({ error: "Email Not Found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ error: "Incorrect Password" });


        const jwtToken = jwt.sign(
            { email: user.email, id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '24h' }
        );

        res.status(200).json({
            message: "Login Success",
            success: true,
            jwtToken,
            email: user.email,
            username: user.username
        });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
};
