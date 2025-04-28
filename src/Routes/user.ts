import { Hono } from "hono";
import prisma from "../db";

const user = new Hono();

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

// Mendapatkan user berdasarkan ID
user.get("/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");

    const dataUser = await prisma.user.findUnique({
      where: {
        id: Number(userId)
      }
    });

    if (!dataUser) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    return c.json({
      message: "Berhasil mendapatkan user",
      data: dataUser
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// Mengupdate user
user.put("/:id", async (c) => {
  try {
    const id = c.req.param("id");
    const { name, email, password } = await c.req.json();

    // Cek dulu apakah user ada
    const checkUser = await prisma.user.findUnique({
      where: { id: Number(id) }
    });

    if (!checkUser) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    const dataUser = await prisma.user.update({
      where: {
        id: Number(id)
      },
      data: {
        name,
        email,
        password
      }
    });

    return c.json({
      message: "Berhasil mengupdate user",
      data: dataUser
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// Menghapus user
user.delete("/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");

    const checkUser = await prisma.user.findUnique({
      where: { id: Number(userId) }
    });

    if (!checkUser) {
      return c.json({ message: "User tidak ditemukan" }, 404);
    }

    const dataUser = await prisma.user.delete({
      where: {
        id: Number(userId)
      }
    });

    return c.json({
      message: "Berhasil menghapus user",
      data: dataUser
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default user;
