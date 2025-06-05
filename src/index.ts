import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "./db";
import { serve } from "@hono/node-server";

// Import routes
import user from "./Routes/user";
import register from "./Routes/register";
import login from "./Routes/login";
import buku from "./Routes/buku";
import kategori from "./Routes/kategori";
import bukuKategori from "./Routes/bukuKategori";
import accessValidation from "./Middleware/md";
import peminjaman from "./Routes/peminjaman";
import eksemplar from "./Routes/eksemplar";

const app = new Hono();

//  Routing dengan middleware autentikasi
app.use("/user", accessValidation);
app.route("/user", user);

app.route("/register", register);
app.route("/login", login);

app.use("/buku", accessValidation);
app.route("/buku", buku);
app.route("/buku/kategori", buku);
app.route("/buku/statusBuku", buku);

app.use("/kategori", accessValidation);
app.route("/kategori", kategori);

app.use("/eksemplarBuku", accessValidation);
app.route("/eksemplarBuku", eksemplar);

app.route("/peminjaman", peminjaman);

app.use("/bukuKategori", accessValidation);
app.route("/bukuKategori", bukuKategori);

serve({
  fetch: app.fetch,
  port: Number(process.env.PORT) || 3000
});

console.log(
  `Running on: ${
    process.env.NODE_ENV === "production"
      ? "https://be-appbuku-production.up.railway.app"
      : "http://localhost:3000"
  }`
);

export default app;
