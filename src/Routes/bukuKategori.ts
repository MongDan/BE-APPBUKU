import { Hono } from "hono";
import prisma from "../db";
import adminOnly from "../Middleware/adminOnly";

const bukuKategori = new Hono();


// Mendapatkan semua buku kategori
bukuKategori.get("/", async (c) => {
  try {
    const allBukuKategori = await prisma.bukuKategori.findMany({
      include: {
        buku: true,
        kategori: true
      }
    });

    if (!allBukuKategori || allBukuKategori.length === 0) {
      return c.json({ message: "Tidak ada BukuKategori ditemukan" }, 404);
    }

    return c.json({
      message: "Berhasil mengambil semua BukuKategori",
      data: allBukuKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal mengambil BukuKategori", error }, 500);
  }
});

// Mengambil buku kategori berdasarkan id
bukuKategori.get("/:id", async (c) => {
  try {
    const id = Number(c.req.param("id"));
    const bukuKategoriData = await prisma.bukuKategori.findUnique({
      where: { id },
      include: {
        buku: true,
        kategori: true
      }
    });

    if (!bukuKategoriData) {
      return c.json({ message: "BukuKategori tidak ditemukan" }, 404);
    }

    return c.json({
      message: "Berhasil mengambil BukuKategori",
      data: bukuKategoriData
    });
  } catch (error) {
    return c.json({ message: "Gagal mengambil BukuKategori", error }, 500);
  }
});

// Membuat buku kategori
bukuKategori.post("/",adminOnly, async (c) => {
  try {
    const { idBuku, kategoriId } = await c.req.json();

    // Cek apakah idBuku atau kategoriId valid
    const buku = await prisma.buku.findUnique({ where: { id: idBuku } });
    const kategori = await prisma.kategori.findUnique({ where: { id: kategoriId } });

    if (!buku || !kategori) {
      return c.json({ message: "Buku atau Kategori tidak ditemukan" }, 404);
    }

    const newBukuKategori = await prisma.bukuKategori.create({
      data: {
        idBuku,
        kategoriId
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

// Mengupdate buku kategori
bukuKategori.put("/:id", adminOnly,async (c) => {
  try {
    const id = Number(c.req.param("id"));
    const { idBuku, kategoriId } = await c.req.json();

    const bukuKat = await prisma.bukuKategori.findUnique({
      where: { id }
    });

    if (!bukuKat) {
      return c.json({ message: "BukuKategori tidak ditemukan" }, 404);
    }

    const buku = await prisma.buku.findUnique({ where: { id: idBuku } });
    const kategori = await prisma.kategori.findUnique({ where: { id: kategoriId } });

    if (!buku || !kategori) {
      return c.json({ message: "Buku atau Kategori tidak ditemukan" }, 404);
    }

    const updatedBukuKategori = await prisma.bukuKategori.update({
      where: { id },
      data: {
        idBuku,
        kategoriId
      }
    });

    return c.json({
      message: "Berhasil mengupdate BukuKategori",
      data: updatedBukuKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal mengupdate BukuKategori", error }, 500);
  }
});

// Menghapus buku kategori
bukuKategori.delete("/:id",adminOnly, async (c) => {
  try {
    const id = Number(c.req.param("id"));

    const bukuKat = await prisma.bukuKategori.findUnique({
      where: { id }
    });

    if (!bukuKat) {
      return c.json({ message: "BukuKategori tidak ditemukan" }, 404);
    }

    const deletedBukuKategori = await prisma.bukuKategori.delete({
      where: { id }
    });

    return c.json({
      message: "Berhasil menghapus BukuKategori",
      data: deletedBukuKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal menghapus BukuKategori", error }, 500);
  }
});


export default bukuKategori;
