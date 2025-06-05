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
      // Log error ini di server untuk debugging, jangan kirim detail ke klien
      console.error("Kesalahan Server Internal: JWT_SECRET tidak ditemukan.");
      return c.json(
        { message: "Terjadi kesalahan konfigurasi pada server" },
        500
      );
    }

    const expiresIn = 60 * 60; // 1 jam
    const token = jwt.sign(
      { email: dataLogin.email, id: dataLogin.id, role: dataLogin.role }, // Gunakan email dari dataLogin untuk konsistensi
      secretKey,
      { expiresIn }
    );

    // Set cookie HttpOnly
    c.header(
      "Set-Cookie",
      `token=${token}; HttpOnly; Path=/; Max-Age=${expiresIn}; SameSite=None; Secure`
    );

    // Kembalikan data user dan token di body respons
    // Frontend mungkin memerlukan ini jika tidak bisa hanya mengandalkan cookie (misalnya untuk state management)
    return c.json(
      {
        message: "Berhasil login",
        data: {
          id: dataLogin.id,
          email: dataLogin.email,
          role: dataLogin.role,
          token: token // Kirim token juga di body
        }
      },
      200
    );
  } catch (error) {
    console.error("Error saat login:", error); // Log error sebenarnya di server
    return c.json({ message: "Terjadi kesalahan internal pada server" }, 500);
  }
});

export default login;
