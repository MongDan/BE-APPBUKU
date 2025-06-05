import { Hono } from "hono";
import { cors } from "hono/cors"; // Pastikan cors diimpor di sini
// prisma dan serve tidak perlu diubah, jadi saya singkat untuk keringkasan
import prisma from "./db";
import { serve } from "@hono/node-server";

// Import routes
import user from "./Routes/user";
import register from "./Routes/register";
import login from "./Routes/login"; // Router login Anda
import buku from "./Routes/buku";
import kategori from "./Routes/kategori";
import bukuKategori from "./Routes/bukuKategori";
import accessValidation from "./Middleware/md";
import peminjaman from "./Routes/peminjaman";
import eksemplar from "./Routes/eksemplar";

const app = new Hono();

// TERAPKAN MIDDLEWARE CORS SECARA GLOBAL DI SINI



//  Routing dengan middleware autentikasi
app.use("/user/*", accessValidation);
app.route("/user", user);

app.route("/register", register);
app.route("/login", login); // Router login Anda tetap di-mount di sini

app.use("/buku/*", accessValidation);
app.route("/buku", buku);

app.use("/kategori/*", accessValidation);
app.route("/kategori", kategori);

app.use("/eksemplarBuku/*", accessValidation);
app.route("/eksemplarBuku", eksemplar);

// Untuk peminjaman, jika memerlukan accessValidation, tambahkan:
// app.use("/peminjaman/*", accessValidation);
app.route("/peminjaman", peminjaman);

app.use("/bukuKategori/*", accessValidation);
app.route("/bukuKategori", bukuKategori);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
});

console.log(
  `Running on: ${
    process.env.NODE_ENV === "production"
      ? "https://be-appbuku-production.up.railway.app" // Ini adalah URL publik backend
      : `http://localhost:${Number(process.env.PORT) || 3000}` // Gunakan port yang sama dengan serve
  }`
);

export default app;
