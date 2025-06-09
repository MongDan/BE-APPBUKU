import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";

const user = new Hono();

user.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

// Mendapatkan semua user
user.get("/", async (c) => {
  try {
    const dataUser = await prisma.user.findMany();

    if (!dataUser || dataUser.length === 0) {
      return c.json({ message: "Data user kosong" }, 404);
    }

    return c.json({
      message: "Berhasil mendapatkan semua user",
      data: dataUser
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});


export default user;
