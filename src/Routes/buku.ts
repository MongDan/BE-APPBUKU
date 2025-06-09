import { Hono } from "hono";
import prisma from "../db";
import adminOnly from "../Middleware/adminOnly";
import accessValidation from "../Middleware/md";
import { cors } from "hono/cors";


const buku = new Hono();

buku.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

// membuat buku
buku.post("/", adminOnly, async (c) => {
  try {
    const { judul, pengarang, penerbit, tahunTerbit, jumlahBuku } =
      await c.req.json();

    const parsedTahunTerbit = parseInt(tahunTerbit);
    const parsedJumlahBuku = parseInt(jumlahBuku);

    if (isNaN(parsedTahunTerbit) || isNaN(parsedJumlahBuku)) {
      return c.json(
        {
          message: "Tahun terbit dan jumlah buku harus berupa angka yang valid."
        },
        400
      );
    }
    if (parsedJumlahBuku < 0) {
      return c.json({ message: "Jumlah buku tidak boleh negatif." }, 400);
    }
    // Buat buku baru
    const buku = await prisma.buku.create({
      data: {
        judul,
        pengarang,
        penerbit,
        tahunTerbit,
        jumlahBuku: parseInt(jumlahBuku)
      }
    });

    // Buat eksemplar berdasarkan jumlah
    const eksemplars = Array.from({ length: jumlahBuku }).map((_, i) => ({
      kodeEksemplar: `BK-${buku.id}-${i + 1}`,
      bukuId: buku.id
    }));

    await prisma.eksemplarBuku.createMany({
      data: eksemplars
    });

    return c.json({
      message: "Buku dan eksemplar berhasil dibuat",
      data: buku
    });
  } catch (error) {
    return c.json({ message: "Gagal membuat buku", error }, 500);
  }
});

// melihat semua buku
buku.get("/", async (c) => {
  try {
    const dataBuku = await prisma.buku.findMany();

    if (!dataBuku || dataBuku.length === 0) {
      return c.json({ message: "Data buku kosong" }, 404);
    }
    return c.json({
      message: "berhasil mendapatkan semua buku",
      data: dataBuku
    });
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan semua buku", error }, 500);
  }
});


export default buku;
