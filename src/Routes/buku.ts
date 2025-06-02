import { Hono } from "hono";
import prisma from "../db";
import adminOnly from "../Middleware/adminOnly";


const buku = new Hono();

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

// melihat buku by kategori
buku.get("/:kategoriId", async (c) => {
  try {
    const kategoriId = c.req.param("kategoriId");
    const dataBuku = await prisma.buku.findMany({
      where: {
        id: Number(kategoriId)
      }
    });

    if (!dataBuku || dataBuku.length === 0) {
      return c.json(
        { message: "buku tidak ditemukan berdasarkan kategori" },
        404
      );
    }

    return c.json({
      message: "berhasil mendapatkan buku",
      data: dataBuku
    });
  } catch (error) {
    return c.json(
      { message: "Gagal mendapatkan buku berdasarkan kategori", error },
      500
    );
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

// melihat buku berdasarkan id
buku.get("/:bukuId", async (c) => {
  try {
    const bukuId = c.req.param("bukuId");
    const dataBuku = await prisma.buku.findUnique({
      where: {
        id: Number(bukuId)
      }
    });

    if (!dataBuku) {
      return c.json({ message: "buku tidak ditemukan berdasarkan id" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan buku",
      data: dataBuku
    });
  } catch (error) {
    return c.json(
      { message: "Gagal mendapatkan buku berdasarkan id", error },
      500
    );
  }
});

// mengupdate buku
buku.put("/:bukuId", adminOnly, async (c) => {
  try {
    const bukuId = c.req.param("bukuId");
    const { judul, pengarang, penerbit, tahunTerbit, userId, statusBukuId } =
      await c.req.json();

    const checkBuku = await prisma.buku.findUnique({
      where: {
        id: Number(bukuId)
      }
    });

    if (!checkBuku) {
      return c.json(
        { message: "Buku yang akan diupdate tidak ditemukan" },
        404
      );
    }

    // Validasi apakah userId dan statusBukuId valid
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return c.json({ message: "User atau Status Buku tidak ditemukan" }, 404);
    }

    const updateBuku = await prisma.buku.update({
      where: {
        id: Number(bukuId)
      },
      data: {
        judul,
        pengarang,
        penerbit,
        tahunTerbit
      }
    });

    return c.json(
      {
        message: "Berhasil mengupdate buku",
        data: updateBuku
      },
      200 // ubah jadi 200 OK
    );
  } catch {
    // Kirim message error yang lebih bersih
    return c.json({ message: "Gagal mengupdate buku" }, 500);
  }
});

// menghapus buku
buku.delete("/:bukuId", adminOnly, async (c) => {
  try {
    const bukuId = c.req.param("bukuId");

    const checkBuku = await prisma.buku.findUnique({
      where: {
        id: Number(bukuId)
      }
    });

    if (!checkBuku) {
      return c.json({ message: "buku yang akan dihapus tidak ditemukan" }, 404);
    }

    const dataBuku = await prisma.buku.delete({
      where: {
        id: Number(bukuId)
      }
    });

    return c.json(
      {
        message: "berhasil menghapus buku",
        data: dataBuku
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Gagal menghapus buku", error }, 500);
  }
});

export default buku;
