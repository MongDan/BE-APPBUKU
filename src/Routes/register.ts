import { Hono } from "hono";
import prisma from "../db";
import bcrypt from "bcrypt";

const register = new Hono();

register.post("/", async (c) => {
  try {
    const { name, email, password } = await c.req.json();

    if (!name || !email || !password) {
      return c.json({ message: "name, email, dan password wajib diisi" }, 400);
    }

    const existingUser = await prisma.user.findUnique({
      where: { email }
    });

    if (existingUser) {
      return c.json({ message: "Email sudah digunakan" }, 400);
    }

    const hashedPass = await bcrypt.hash(password, 10);

    const dataUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPass
      }
    });

    return c.json({
      message: "berhasil membuat user",
      data: dataUser
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});



export default register 