import { Hono } from "hono";
import prisma from "../db";
import adminOnly from "../Middleware/adminOnly";
import accessValidation from "../Middleware/md";
import { cors } from "hono/cors";

const kategori = new Hono();

kategori.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

// membuat kategori
kategori.post("/", adminOnly, async (c) => {
  try {
    const { nama } = await c.req.json();
    if (!nama) {
      return c.json({ message: "Nama kategori wajib diisi" }, 400);
    }
    const existingKategori = await prisma.kategori.findFirst({
      where: {
        nama: {
          equals: nama,
          mode: "insensitive" // agar pencocokan huruf besar/kecil diabaikan
        }
      }
    });

    if (existingKategori) {
      return c.json({ message: "Kategori sudah ada" }, 409); // 409 Conflict
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

    return c.json(
      {
        message: "berhasil mendapatkan semua kategori",
        data: dataKategori
      },
      200
    );
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

    return c.json(
      {
        message: "berhasil mendapatkan kategori",
        data: dataKategori
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Gagal mengambil kategori", error }, 500);
  }
});

// mengupdate kategori
kategori.put("/:kategoriId", adminOnly, async (c) => {
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

    return c.json(
      {
        message: "berhasil mengupdate kategori",
        data: dataKategori
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Gagal mengupdate kategori", error }, 500);
  }
});

// menghapus kategori
kategori.delete("/:kategoriId", accessValidation, adminOnly, async (c) => {
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
