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

const allowedOrigins = [
  "http://localhost:5173",
  "https://be-appbuku-production.up.railway.app",
  // tambahkan domain frontend lain di sini jika ada
];

app.use(
  cors({
    origin: (origin) => {
      if (!origin) return ""; // allow empty origin for non-browser tools like curl
      if (allowedOrigins.includes(origin)) return origin;
      return "";
    },
    credentials: true,
  })
);

app.options("*", (c) => {
  const requestOrigin = c.req.header("Origin");
  if (requestOrigin && allowedOrigins.includes(requestOrigin)) {
    c.header("Access-Control-Allow-Origin", requestOrigin);
    c.header("Access-Control-Allow-Credentials", "true");
    c.header("Access-Control-Allow-Headers", "Content-Type");
    c.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
  }
  return c.body(null, 204);
});


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

console.log("Server is running in production");
export default app;
