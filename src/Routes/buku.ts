import { Hono } from "hono";
import prisma from "../db";

const buku = new Hono();

// membuat buku
buku.post("/", async (c) => {
  try {
    const { judul, pengarang, penerbit, tahunTerbit, userId, statusBukuId } = await c.req.json();
    
    // Validasi apakah userId dan statusBukuId valid
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const statusBuku = await prisma.statusBuku.findUnique({ where: { id: statusBukuId } });

    if (!user || !statusBuku) {
      return c.json({ message: "User atau Status Buku tidak ditemukan" }, 404);
    }

    const dataBuku = await prisma.buku.create({
      data: {
        judul,
        pengarang,
        penerbit,
        tahunTerbit,
        userId,
        statusBukuId
      }
    });

    return c.json({
      message: "berhasil membuat buku",
      data: dataBuku
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
      return c.json({ message: "buku tidak ditemukan berdasarkan kategori" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan buku",
      data: dataBuku
    });
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan buku berdasarkan kategori", error }, 500);
  }
});

// melihat buku by userId
buku.get("/:userId", async (c) => {
  try {
    const userId = c.req.param("userId");
    const dataBuku = await prisma.buku.findMany({
      where: {
        userId: Number(userId)
      }
    });

    if (!dataBuku || dataBuku.length === 0) {
      return c.json({ message: "buku tidak ditemukan berdasarkan user" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan buku",
      data: dataBuku
    });
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan buku berdasarkan user", error }, 500);
  }
});

// melihat semua buku
buku.get("/", async (c) => {
  try {
    const dataBuku = await prisma.buku.findMany({
      include: {
        statusBuku: {
          select: {
            nama: true
          }
        }
      }
    });

    if (!dataBuku || dataBuku.length === 0) {
      return c.json({ message: "data buku kosong" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan semua buku",
      data: dataBuku
    }, 200);
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
    return c.json({ message: "Gagal mendapatkan buku berdasarkan id", error }, 500);
  }
});

// melihat buku berdasarkan Status (1 = tersedia , 2 = dipinjam/kosong, 3 = rusak)
buku.get("/:statusBukuId", async (c) => {
  try {
    const statusBukuId = c.req.param("statusBukuId");
    const dataBuku = await prisma.buku.findMany({
      where: {
        statusBukuId: Number(statusBukuId)
      }
    });

    if (!dataBuku || dataBuku.length === 0) {
      return c.json({ message: "buku tidak ditemukan berdasarkan status" }, 404);
    }

    return c.json({
      message: "berhasil mendapatkan buku berdasarkan status",
      data: dataBuku
    });
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan buku berdasarkan status", error }, 500);
  }
});

// mengupdate buku
buku.put("/:bukuId", async (c) => {
  try {
    const bukuId = c.req.param("bukuId");
    const { judul, pengarang, penerbit, tahunTerbit, userId, statusBukuId } = await c.req.json();

    const checkBuku = await prisma.buku.findUnique({
      where: {
        id: Number(bukuId)
      }
    });

    if (!checkBuku) {
      return c.json({ message: "buku yang akan diupdate tidak ditemukan" }, 404);
    }

    // Validasi apakah userId dan statusBukuId valid
    const user = await prisma.user.findUnique({ where: { id: userId } });
    const statusBuku = await prisma.statusBuku.findUnique({ where: { id: statusBukuId } });

    if (!user || !statusBuku) {
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
        tahunTerbit,
        userId: Number(userId),
        statusBukuId
      }
    });

    return c.json({
      message: "berhasil mengupdate buku",
      data: updateBuku
    }, 201);
  } catch (error) {
    return c.json({ message: "Gagal mengupdate buku", error }, 500);
  }
});

// menghapus buku
buku.delete("/:bukuId", async (c) => {
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

    return c.json({
      message: "berhasil menghapus buku",
      data: dataBuku
    }, 200);
  } catch (error) {
    return c.json({ message: "Gagal menghapus buku", error }, 500);
  }
});


export default buku;
