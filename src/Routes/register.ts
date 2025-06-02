import { Hono } from "hono";
import prisma from "../db";
import {hash} from "bcryptjs";

const register = new Hono();

const adminKey = process.env.ADMIN_SECRET;

register.post("/", async (c) => {
  try {
    const { name, email, password, role, adminSecret } = await c.req.json();

    if (!name || !email || !password) {
      return c.json({ message: "name, email, dan password wajib diisi" }, 400);
    }

    // Validasi format email sederhana (opsional)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return c.json({ message: "Email tidak valid" }, 400);
    }

    // Validasi role, default ke USER kalau tidak ada atau tidak valid
    const validRoles = ["USER", "ADMIN"];
    const userRole = validRoles.includes(role) ? role : "USER";

    if (userRole === "ADMIN" && adminSecret !== adminKey) {
      return c.json({ message: "Kode rahasia admin salah" }, 403);
    }

    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return c.json({ message: "Email sudah digunakan" }, 400);
    }

    const hashedPass = await hash(password, 10);

    const dataUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass,
        role: userRole
      }
    });

    return c.json({
      message: `Berhasil membuat Account dengan role ${userRole}`,
      data: dataUser
    });
  } catch (error) {
    console.error(error);
    return c.json({ message: "Internal Server Error" }, 500);
  }
});

export default register;
