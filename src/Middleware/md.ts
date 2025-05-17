import { MiddlewareHandler } from "hono";
import { verify } from "jsonwebtoken";
import { getCookie } from "hono/cookie";

const accessValidation: MiddlewareHandler = async (c, next) => {
  const token = await getCookie(c, "token"); // ← Diperbaiki
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return c.json({ message: "Token tidak ditemukan" }, 401);
  }

  if (!secret) {
    return c.json({ message: "Secret key tidak ditemukan" }, 500);
  }

  try {
    const decoded = verify(token, secret);
    c.set("user", decoded); // Simpan user ke context jika diperlukan
    await next(); // ← jangan lupa await juga ini
  } catch (err) {
    return c.json({ message: "Token tidak valid atau expired" }, 403);
  }
};

export default accessValidation;
