import { cors } from "hono/cors";
import prisma from "../db";
import { Hono } from "hono";

const eksemplar = new Hono();

eksemplar.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

eksemplar.get("/", async (c) => {
  try {
    const dataEksemplar = await prisma.eksemplarBuku.findMany({
      include: {
        buku: {
          include: {
            kategori: {
              include: {
                kategori: {
                  select: {
                    nama: true
                  }
                }
              }
            }
          }
        }
      }
    });

    if (!dataEksemplar || dataEksemplar.length === 0) {
      return c.json({ message: "data buku kosong" }, 404);
    }

    return c.json(
      {
        message: "berhasil mendapatkan semua Eksemplar Buku",
        data: dataEksemplar
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan semua buku", error }, 500);
  }
});

eksemplar.delete("/:id", async (c) => {
  try {
    const id = parseInt(c.req.param("id"));
    const deletedEksemplar = await prisma.eksemplarBuku.delete({
      where: { id }
    });

    return c.json({
      message: "Eksemplar berhasil dihapus",
      data: deletedEksemplar
    });
  } catch (error) {
    return c.json({ message: "Gagal menghapus eksemplar", error }, 500);
  }
});

export default eksemplar;
