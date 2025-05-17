import { Hono } from "hono";
import prisma from "../db";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = new Hono();

login.post("/", async (c) => {
  try {
    const { email, password } = await c.req.json();
    const dataLogin = await prisma.user.findUnique({
      where: { email }
    });

    if (!dataLogin) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    const isPasswordValid = await bcrypt.compare(password, dataLogin.password);
    if (!isPasswordValid) {
      return c.json({ message: "Password salah" }, 401);
    }

    const Payload = { email, id: dataLogin.id };
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return c.json({ message: "Secret key tidak ditemukan" }, 500);
    }

    const expiresIn = 60 * 60; // 1 jam
    const token = jwt.sign(Payload, secretKey, { expiresIn });

    // Simpan token ke cookie + atur header CORS
    c.header(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}; SameSite=Lax`
    );
    c.header("Access-Control-Allow-Origin", "http://localhost:5173");
    c.header("Access-Control-Allow-Credentials", "true");

    return c.json(
      {
        message: "Berhasil login",
        data: {
          id: dataLogin.id,
          email: dataLogin.email
        }
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default login;
