import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "../db";

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
  // 1. Validasi bahwa ID adalah angka yang valid
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) {
    return c.json({ message: "ID tidak valid, harus berupa angka." }, 400); // Bad Request
  }

  try {
    // 2. Lakukan proses hapus
    const deletedEksemplar = await prisma.eksemplarBuku.delete({
      where: { id: id }
    });

    return c.json({
      message: "Eksemplar berhasil dihapus secara permanen.",
      data: deletedEksemplar
    });
  } catch (error) {
    if (error instanceof PrismaClientKnownRequestError) {
      // 3. Tangani jika data tidak ditemukan
      if (error.code === "P2025") {
        return c.json(
          { message: `Eksemplar dengan ID ${id} tidak ditemukan.` },
          404
        ); // Not Found
      }
      // 4. (FIX) Tangani jika data digunakan di tabel lain
      else if (error.code === "P2003") {
        return c.json(
          {
            message:
              "Gagal menghapus. Eksemplar ini masih terhubung dengan data lain (misalnya data peminjaman)."
          },
          409
        ); // Conflict
      }
    }

    // 5. Tangani error server lainnya dengan aman
    console.error("Gagal menghapus eksemplar:", error); // Log error di server
    return c.json({ message: "Terjadi kesalahan internal pada server." }, 500); // Internal Server Error
  }
});

export default eksemplar;
