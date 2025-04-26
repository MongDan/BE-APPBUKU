import { Hono } from "hono";
import prisma from "../db";

const kategori = new Hono();

// membuat kategori
kategori.post("/", async (c) => {
  try {
    const { nama } = await c.req.json();
    if (!nama) {
      return c.json({ message: "Nama kategori wajib diisi" }, 400);
    }

    const dataKategori = await prisma.kategori.create({
      data: { nama }
    });

    return c.json({
      message: "berhasil membuat kategori",
      data: dataKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal membuat kategori", error }, 500);
  }
});

// melihat semua kategori
kategori.get("/", async (c) => {
  try {
    const dataKategori = await prisma.kategori.findMany();

    return c.json({
      message: "berhasil mendapatkan semua kategori",
      data: dataKategori
    }, 200);
  } catch (error) {
    return c.json({ message: "Gagal mengambil kategori", error }, 500);
  }
});

// melihat kategori berdasarkan id
kategori.get("/:kategoriId", async (c) => {
  try {
    const kategoriId = Number(c.req.param("kategoriId"));
    const dataKategori = await prisma.kategori.findUnique({
      where: { id: kategoriId }
    });

    if (!dataKategori) {
      return c.json({ message: "Kategori tidak ditemukan" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan kategori",
      data: dataKategori
    }, 200);
  } catch (error) {
    return c.json({ message: "Gagal mengambil kategori", error }, 500);
  }
});

// mengupdate kategori
kategori.put("/:kategoriId", async (c) => {
  try {
    const kategoriId = Number(c.req.param("kategoriId"));
    const { nama } = await c.req.json();

    if (!nama) {
      return c.json({ message: "Nama kategori wajib diisi" }, 400);
    }

    const checkKategori = await prisma.kategori.findUnique({
      where: { id: kategoriId }
    });

    if (!checkKategori) {
      return c.json({ message: "Kategori tidak ditemukan" }, 404);
    }

    const dataKategori = await prisma.kategori.update({
      where: { id: kategoriId },
      data: { nama }
    });

    return c.json({
      message: "berhasil mengupdate kategori",
      data: dataKategori
    }, 201);
  } catch (error) {
    return c.json({ message: "Gagal mengupdate kategori", error }, 500);
  }
});

// menghapus kategori
kategori.delete("/:kategoriId", async (c) => {
  try {
    const kategoriId = Number(c.req.param("kategoriId"));

    const checkKategori = await prisma.kategori.findUnique({
      where: { id: kategoriId }
    });

    if (!checkKategori) {
      return c.json({ message: "Kategori tidak ditemukan" }, 404);
    }

    const dataKategori = await prisma.kategori.delete({
      where: { id: kategoriId }
    });

    return c.json({
      message: "berhasil menghapus kategori",
      data: dataKategori
    });
  } catch (error) {
    return c.json({ message: "Gagal menghapus kategori", error }, 500);
  }
});


export default kategori;