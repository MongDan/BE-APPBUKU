import { Hono } from "hono";
import prisma from "../db";

const statusBuku = new Hono();

// membuat statusbuku
statusBuku.post("/", async (c) => {
  try {
    const { nama } = await c.req.json();

    if (!nama) {
      return c.json({ message: "nama wajib diisi" }, 400);
    }

    const dataStatus = await prisma.statusBuku.create({
      data: { nama }
    });

    return c.json(
      {
        message: "berhasil membuat status buku",
        data: dataStatus
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// melihat statusbuku berdasarkan id
statusBuku.get("/:statusBukuId", async (c) => {
  try {
    const statusBukuId = Number(c.req.param("statusBukuId"));

    const dataStatus = await prisma.statusBuku.findUnique({
      where: { id: statusBukuId },
      include: {
        buku: {
          select: { judul: true }
        }
      }
    });

    if (!dataStatus) {
      return c.json({ message: "StatusBuku tidak ditemukan" }, 404);
    }

    return c.json(
      {
        message: "berhasil mendapatkan status buku",
        data: dataStatus
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// melihat semua statusbuku
statusBuku.get("/", async (c) => {
  try {
    const dataStatus = await prisma.statusBuku.findMany({
      include: {
        buku: {
          select: { judul: true }
        }
      }
    });

    return c.json(
      {
        message: "berhasil mendapatkan semua status buku",
        data: dataStatus
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// mengupdate statusbuku
statusBuku.put("/:statusBukuId", async (c) => {  // <--- sudah diperbaiki dari POST jadi PUT
  try {
    const statusBukuId = Number(c.req.param("statusBukuId"));
    const { nama } = await c.req.json();

    if (!nama) {
      return c.json({ message: "nama wajib diisi" }, 400);
    }

    const existingStatus = await prisma.statusBuku.findUnique({
      where: { id: statusBukuId }
    });

    if (!existingStatus) {
      return c.json({ message: "StatusBuku tidak ditemukan" }, 404);
    }

    const dataStatus = await prisma.statusBuku.update({
      where: { id: statusBukuId },
      data: { nama }
    });

    return c.json(
      {
        message: "berhasil mengupdate status buku",
        data: dataStatus
      },
      201
    );
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

// mengdelete statusbuku
statusBuku.delete("/:statusBukuId", async (c) => {
  try {
    const statusBukuId = Number(c.req.param("statusBukuId"));

    const existingStatus = await prisma.statusBuku.findUnique({
      where: { id: statusBukuId }
    });

    if (!existingStatus) {
      return c.json({ message: "StatusBuku tidak ditemukan" }, 404);
    }

    const dataStatus = await prisma.statusBuku.delete({
      where: { id: statusBukuId }
    });

    return c.json({
      message: "berhasil menghapus status buku",
      data: dataStatus
    });
  } catch (error) {
    return c.json({ message: "Internal Server Error", error }, 500);
  }
});

export default statusBuku;