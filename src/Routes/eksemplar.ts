// eksemplar.ts

import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "../db";
// Prisma belum tentu dibutuhkan jika Anda tidak menggunakan tipenya secara eksplisit
// import { Prisma } from "../generated/prisma/client"; 

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

// --- MODIFIKASI 1: Endpoint ini sekarang hanya mengambil data yang AKTIF ---
eksemplar.get("/", async (c) => {
  try {
    const dataEksemplar = await prisma.eksemplarBuku.findMany({
      // TAMBAHKAN FILTER INI: untuk menyembunyikan data yang sudah diarsipkan
      where: {
        isArchived: false
      },
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

    // Kondisi ini tetap relevan jika tidak ada buku aktif sama sekali
    if (!dataEksemplar || dataEksemplar.length === 0) {
      return c.json({ message: "data buku aktif kosong" }, 404);
    }

    return c.json(
      {
        message: "berhasil mendapatkan semua Eksemplar Buku yang aktif",
        data: dataEksemplar
      },
      200
    );
  } catch (error) {
    return c.json({ message: "Gagal mendapatkan semua buku", error }, 500);
  }
});


// --- ENDPOINT BARU: Untuk mengambil data yang sudah diarsipkan ---
eksemplar.get("/archived", async (c) => {
    try {
      const dataDiarsipkan = await prisma.eksemplarBuku.findMany({
        where: {
          isArchived: true, // Hanya ambil data yang diarsipkan
        },
        include: {
          buku: {
            select: {
              judul: true, // Cukup ambil judul untuk daftar arsip
            },
          },
        },
      });
  
      if (!dataDiarsipkan || dataDiarsipkan.length === 0) {
        return c.json({ message: "Tidak ada data yang diarsipkan" }, 404);
      }
  
      return c.json(
        {
          message: "Berhasil mendapatkan semua data yang diarsipkan",
          data: dataDiarsipkan,
        },
        200
      );
    } catch (error) {
      return c.json({ message: "Gagal mendapatkan data arsip", error }, 500);
    }
  });


// --- MODIFIKASI 2: Mengganti DELETE menjadi PATCH untuk SOFT DELETE (MENGARSIPKAN) ---
eksemplar.patch("/archive/:id", async (c) => {
  const id = parseInt(c.req.param("id"));
  if (isNaN(id)) {
    return c.json({ message: "ID tidak valid, harus berupa angka." }, 400);
  }

  try {
    // Lakukan update untuk mengubah flag isArchived
    const archivedEksemplar = await prisma.eksemplarBuku.update({
      where: { id: id },
      data: {
        isArchived: true,
        status: 'DIARSIPKAN' // Ganti statusnya juga agar lebih jelas
      }
    });

    return c.json({
      message: "Eksemplar berhasil diarsipkan.",
      data: archivedEksemplar
    });

  } catch (error) {
    // Tangani jika eksemplar tidak ditemukan saat update
    if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        return c.json({ message: `Eksemplar dengan ID ${id} tidak ditemukan.` }, 404);
    }
    console.error("Gagal mengarsipkan eksemplar:", error);
    return c.json({ message: "Terjadi kesalahan internal pada server." }, 500);
  }
});


// --- ENDPOINT BARU: Untuk MEMULIHKAN dari arsip ---
eksemplar.patch("/restore/:id", async (c) => {
    const id = parseInt(c.req.param("id"));
    if (isNaN(id)) {
      return c.json({ message: "ID tidak valid, harus berupa angka." }, 400);
    }
  
    try {
      // Lakukan update untuk mengembalikan flag isArchived
      const restoredEksemplar = await prisma.eksemplarBuku.update({
        where: { id: id },
        data: {
          isArchived: false,
          status: 'TERSEDIA' // Kembalikan statusnya menjadi TERSEDIA
        }
      });
  
      return c.json({
        message: "Eksemplar berhasil dipulihkan.",
        data: restoredEksemplar
      });
  
    } catch (error) {
      // Tangani jika eksemplar tidak ditemukan saat update
      if (error instanceof PrismaClientKnownRequestError && error.code === 'P2025') {
        return c.json({ message: `Eksemplar dengan ID ${id} tidak ditemukan.` }, 404);
      }
      console.error("Gagal memulihkan eksemplar:", error);
      return c.json({ message: "Terjadi kesalahan internal pada server." }, 500);
    }
  });


// Endpoint DELETE yang lama bisa Anda hapus atau berikan komentar
/*
eksemplar.delete("/:id", async (c) => {
  // ... kode lama ...
});
*/

export default eksemplar;