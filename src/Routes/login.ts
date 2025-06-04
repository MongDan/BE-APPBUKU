import { compare } from "bcryptjs";
import { Hono } from "hono";
import * as jwt from "jsonwebtoken";
import prisma from "../db";

const login = new Hono();

const FRONTEND_ORIGIN = "https://booknest-client.vercel.app"; // Ganti sesuai frontend deploy URL kamu

login.options("/", (c) => {
  c.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
  c.header("Access-Control-Allow-Credentials", "true");
  c.header("Access-Control-Allow-Headers", "Content-Type");
  c.header("Access-Control-Allow-Methods", "POST, OPTIONS");
  return c.body(null, 204);
});

login.post("/", async (c) => {
  try {
    const { email, password } = await c.req.json();

    if (!email || !password) {
      return c.json({ message: "Email dan password wajib diisi" }, 400);
    }

    const dataLogin = await prisma.user.findUnique({
      where: { email }
    });

    if (!dataLogin) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    const isPasswordValid = await compare(password, dataLogin.password);
    if (!isPasswordValid) {
      return c.json({ message: "Password salah" }, 401);
    }

    const Payload = { email, id: dataLogin.id, role: dataLogin.role };
    const secretKey = process.env.JWT_SECRET;
    if (!secretKey) {
      return c.json({ message: "Secret key tidak ditemukan" }, 500);
    }

    const expiresIn = 60 * 60; // 1 jam
    const token = jwt.sign(Payload, secretKey, { expiresIn });

    // Set-Cookie aman untuk cross-origin
    c.header(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}; SameSite=None; Secure`
    );

    // Header CORS untuk response
    c.header("Access-Control-Allow-Origin", FRONTEND_ORIGIN);
    c.header("Access-Control-Allow-Credentials", "true");

    return c.json(
      {
        message: "Berhasil login",
        data: {
          id: dataLogin.id,
          email: dataLogin.email,
          role: dataLogin.role
        }
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default login;
