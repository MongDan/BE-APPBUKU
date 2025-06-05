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

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowHeaders: ["Authorization", "Content-Type"],
    credentials: true
  })
);

// WAJIB: handle preflight OPTIONS
app.options("*", (c) => {
  c.header("Access-Control-Allow-Origin", "http://localhost:5173");
  c.header("Access-Control-Allow-Credentials", "true");
  c.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Authorization, Content-Type");
  return c.body(null, 204);
});


// 💡 FIX: Tangani semua OPTIONS
app.options("*", (c) => c.text("OK", 200));

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
