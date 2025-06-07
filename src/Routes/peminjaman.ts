import { Hono } from "hono";
import prisma from "../db";
import userOnly from "../Middleware/userOnly";
import adminOnly from "../Middleware/adminOnly";
import accessValidation from "../Middleware/md";
import { cors } from "hono/cors";

const peminjaman = new Hono();

peminjaman.use(
  "*",
  cors({
    origin: ["http://localhost:5173"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

peminjaman.post("/", accessValidation, userOnly, async (c) => {
  const user = c.get("user");
  if (user.role !== "USER") {
    return c.json({ message: "Hanya USER yang boleh meminjam" }, 403);
  }

  try {
    const body = await c.req.json();
    const eksemplarId = body.eksemplarId;

    // Pastikan tanggalKembali valid jika diberikan
    let tanggalKembali: Date | null = null;
    if (body.tanggalKembali) {
      tanggalKembali = new Date(body.tanggalKembali);
      if (isNaN(tanggalKembali.getTime())) {
        return c.json({ message: "Format tanggalKembali tidak valid" }, 400);
      }
    }

    // Cek apakah eksemplar tersedia
    const eksemplar = await prisma.eksemplarBuku.findUnique({
      where: { id: eksemplarId }
    });

    if (!eksemplar || eksemplar.status !== "TERSEDIA") {
      return c.json({ message: "Eksemplar tidak tersedia" }, 400);
    }

    const existing = await prisma.peminjaman.findFirst({
      where: {
        userId: user.id,
        eksemplarId,
        status: {
          in: ["PENDING", "DIPINJAM"] // sesuaikan dengan enum status di database kamu
        }
      }
    });

    if (existing) {
      return c.json(
        {
          message:
            "Anda sudah memiliki permintaan aktif atau sedang meminjam eksemplar ini"
        },
        400
      );
    }

    // Buat peminjaman
    const data: any = {
      userId: user.id,
      eksemplarId
    };
    if (tanggalKembali !== null) {
      data.tanggalKembali = tanggalKembali;
    }
    const peminjaman = await prisma.peminjaman.create({
      data
    });

    return c.json({
      message: "Permintaan peminjaman terkirim",
      data: peminjaman
    });
  } catch (error) {
    console.error("Error creating peminjaman:", error);
    return c.json({ message: "Gagal membuat peminjaman", error }, 500);
  }
});

peminjaman.get("/riwayat", accessValidation, async (c) => {
  const user = c.get("user");

  const isAdmin = user.role === "ADMIN";

  const data = await prisma.peminjaman.findMany({
    where: isAdmin
      ? {} // admin lihat semua
      : { userId: user.id }, // user hanya lihat miliknya
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      },
      eksemplar: {
        select: {
          kodeEksemplar: true,
          buku: {
            select: {
              judul: true
            }
          }
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  });

  return c.json({ data });
});

peminjaman.get("/permintaan", accessValidation, adminOnly, async (c) => {
  const peminjamanPending = await prisma.peminjaman.findMany({
    where: { status: "PENDING" },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      },
      eksemplar: {
        select: {
          kodeEksemplar: true,
          buku: {
            select: {
              judul: true,
              pengarang: true,
              penerbit: true
            }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });

  const pengembalianPending = await prisma.peminjaman.findMany({
    where: { status: "PENDING_KEMBALI" },
    include: {
      user: {
        select: {
          name: true,
          email: true
        }
      },
      eksemplar: {
        select: {
          kodeEksemplar: true,
          buku: {
            select: {
              judul: true,
              pengarang: true,
              penerbit: true
            }
          }
        }
      }
    },
    orderBy: { createdAt: "desc" }
  });
  return c.json({
    peminjamanPending,
    pengembalianPending
  });
});

peminjaman.put("/konfirmasi/:id", accessValidation, adminOnly, async (c) => {
  const id = parseInt(c.req.param("id"));

  // Update status peminjaman + ubah status eksemplar
  const updated = await prisma.peminjaman.update({
    where: { id },
    data: {
      status: "DIPINJAM",
      eksemplar: {
        update: {
          status: "DIPINJAM"
        }
      }
    }
  });

  return c.json({ message: "Peminjaman dikonfirmasi", data: updated });
});

peminjaman.put("/tolak/:id", accessValidation, adminOnly, async (c) => {
  const id = parseInt(c.req.param("id"));

  const existing = await prisma.peminjaman.findUnique({
    where: { id }
  });

  if (!existing) {
    return c.json({ message: "Data peminjaman tidak ditemukan" }, 404);
  }

  if (
    existing.status === "DIPINJAM" ||
    existing.status === "SELESAI" ||
    existing.status === "TERSEDIA" ||
    existing.status === "PENDING_KEMBALI"
  ) {
    return c.json({ message: "Tidak bisa menolak peminjaman " }, 400);
  }

  const updated = await prisma.peminjaman.update({
    where: { id },
    data: {
      status: "DITOLAK"
    }
  });

  return c.json({ message: "Peminjaman ditolak", data: updated });
});

peminjaman.put("/kembalikan/:id", accessValidation, userOnly, async (c) => {
  const user = c.get("user");
  const id = parseInt(c.req.param("id"));

  const pinjam = await prisma.peminjaman.findUnique({
    where: { id },
    select: { userId: true, status: true }
  });

  if (!pinjam || pinjam.userId !== user.id) {
    return c.json({ message: "Tidak diizinkan mengembalikan" }, 403);
  }

  if (pinjam.status !== "DIPINJAM") {
    return c.json({ message: "Peminjaman ini tidak bisa dikembalikan" }, 400);
  }

  const updated = await prisma.peminjaman.update({
    where: { id },
    data: { status: "PENDING_KEMBALI" }
  });

  return c.json({ message: "Permintaan pengembalian dikirim", data: updated });
});

peminjaman.put(
  "/konfirmasi-kembali/:id",
  accessValidation,
  adminOnly,
  async (c) => {
    const id = parseInt(c.req.param("id"));

    const pinjam = await prisma.peminjaman.findUnique({
      where: { id }
    });

    if (!pinjam) {
      return c.json({ message: "Data peminjaman tidak ditemukan" }, 404);
    }

    if (pinjam.status !== "PENDING_KEMBALI") {
      return c.json(
        { message: "Status peminjaman tidak valid untuk dikonfirmasi" },
        400
      );
    }

    const updated = await prisma.peminjaman.update({
      where: { id },
      data: {
        status: "SELESAI",
        tanggalKembali: new Date()
      }
    });

    await prisma.eksemplarBuku.update({
      where: { id: pinjam.eksemplarId },
      data: { status: "TERSEDIA" }
    });

    return c.json({ message: "Pengembalian dikonfirmasi", data: updated });
  }
);

export default peminjaman;
