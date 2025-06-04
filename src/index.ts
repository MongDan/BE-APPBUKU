import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "./db";
import { serve } from "@hono/node-server"

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
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.options("*", (c) => {
  c.header("Access-Control-Allow-Origin", "http://localhost:5173");
  c.header("Access-Control-Allow-Credentials", "true");
  c.header("Access-Control-Allow-Headers", "Content-Type");
  c.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
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

app.use("/kategori", accessValidation,);
app.route("/kategori", kategori);

app.use("/eksemplarBuku", accessValidation);
app.route("/eksemplarBuku", eksemplar);

app.route("/peminjaman", peminjaman);

app.use("/bukuKategori", accessValidation);
app.route("/bukuKategori", bukuKategori);

serve({
  fetch: app.fetch,
  port: 3000,
})

console.log("Server is running at http://localhost:3000")

export default app;
