import { MiddlewareHandler } from "hono";
import * as jwt from "jsonwebtoken";
import { getCookie } from "hono/cookie";
import { UserPayload } from "./types";

const accessValidation: MiddlewareHandler<{
  Variables: { user: UserPayload };
}> = async (c, next) => {
  const token =  getCookie(c, "token");
  const secret = process.env.JWT_SECRET;
  const verify = jwt.verify;

  if (!token) {
    return c.json({ message: "Token tidak ditemukan" }, 401);
  }

  if (!secret) {
    return c.json({ message: "Secret key tidak ditemukan" }, 500);
  }

  try {
    const decoded = verify(token, secret) as UserPayload;
    c.set("user", decoded);
    await next(); //
  } catch (err) {
    return c.json({ message: "Token tidak valid atau expired" }, 403);
  }
};

export default accessValidation;
