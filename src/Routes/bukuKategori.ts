import { Hono } from "hono";
import prisma from "../db";
import { cors } from "hono/cors";
import adminOnly from "../Middleware/adminOnly";

const bukuKategori = new Hono();
bukuKategori.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

// Membuat buku kategori
bukuKategori.post("/", adminOnly, async (c) => {
  try {
    const { idBuku, kategoriId } = await c.req.json();

    // Konversi ke number
    const idBukuNumber = Number(idBuku);
    const kategoriIdNumber = Number(kategoriId);

    // Validasi apakah hasil konversi adalah angka valid
    if (isNaN(idBukuNumber) || isNaN(kategoriIdNumber)) {
      return c.json({ message: "ID Buku atau Kategori tidak valid" }, 400);
    }

    const buku = await prisma.buku.findUnique({ where: { id: idBukuNumber } });
    const kategori = await prisma.kategori.findUnique({
      where: { id: kategoriIdNumber }
    });

    if (!buku || !kategori) {
      return c.json({ message: "Buku atau Kategori tidak ditemukan" }, 404);
    }

    const newBukuKategori = await prisma.bukuKategori.create({
      data: {
        idBuku: idBukuNumber,
        kategoriId: kategoriIdNumber
      }
    });

    return c.json({
      message: "Berhasil membuat BukuKategori",
      data: newBukuKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal membuat BukuKategori", error }, 500);
  }
});

export default bukuKategori;
