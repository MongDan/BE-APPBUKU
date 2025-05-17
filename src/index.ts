import { Hono } from "hono";
import { cors } from "hono/cors";
import prisma from "./db";

// Import routes
import user from "./Routes/user";
import register from "./Routes/register";
import login from "./Routes/login";
import buku from "./Routes/buku";
import kategori from "./Routes/kategori";
import statusBuku from "./Routes/statusBuku";
import bukuKategori from "./Routes/bukuKategori";
import accessValidation from "./Middleware/md";

const app = new Hono();

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

//  Tangani preflight OPTIONS request
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
app.route("/buku/user", buku);
app.route("/buku/statusBuku", buku);

app.use("/kategori", accessValidation);
app.route("/kategori", kategori);

app.use("/statusBuku", accessValidation);
app.route("/statusBuku", statusBuku);

app.use("/bukuKategori", accessValidation);
app.route("/bukuKategori", bukuKategori);

export default app;
