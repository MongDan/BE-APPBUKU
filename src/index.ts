import { Hono } from "hono";
import prisma from "./db";

import user from "./Routes/user";
import register from "./Routes/register";
import login from "./Routes/login";
import buku from "./Routes/buku";
import kategori from "./Routes/kategori";
import statusBuku from "./Routes/statusBuku";
import bukuKategori from "./Routes/bukuKategori";
import accessValidation from "./Middleware/md";

const app = new Hono();

// Router untuk tabel user
app.route("/user", user);
app.route("/register", register);
app.route("/login", login);

// Router untuk tabel buku
app.use("/buku", accessValidation);
app.route("/buku", buku);
app.route("/buku/kategori", buku);
app.route("/buku/user", buku);
app.route("/buku/statusBuku", buku);

// Router untuk tabel kategori
app.use("/kategori", accessValidation);
app.route("/kategori", kategori);

//Router untuk tabel statusBuku
app.use("/statusBuku", accessValidation);
app.route("/statusBuku", statusBuku);

//Router untuk tabel BukuKategori
app.use("/bukuKategori", accessValidation);
app.route("/bukuKategori", bukuKategori);

export default app;
