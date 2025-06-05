import { compare } from "bcryptjs";
import { Hono } from "hono";
import * as jwt from "jsonwebtoken";
import prisma from "../db";

const login = new Hono();

login.post("/", async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ message: "Email dan password wajib diisi" }, 400);
    }

    const dataLogin = await prisma.user.findUnique({ where: { email } });
    if (!dataLogin) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    const isPasswordValid = await compare(password, dataLogin.password);
    if (!isPasswordValid) {
      return c.json({ message: "Password salah" }, 401);
    }

    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return c.json({ message: "Secret key tidak ditemukan" }, 500);
    }

    const expiresIn = 60 * 60;
    const token = jwt.sign(
      { email, id: dataLogin.id, role: dataLogin.role },
      secretKey,
      { expiresIn }
    );

    // ✅ Set cookie HttpOnly + Secure
    c.header(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}; SameSite=None; Secure`
    );

    return c.json({
      message: "Berhasil login",
      data: {
        id: dataLogin.id,
        email: dataLogin.email,
        role: dataLogin.role,
      },
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default login;
