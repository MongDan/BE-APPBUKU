import { MiddlewareHandler } from "hono";
import { getCookie } from "hono/cookie";
import * as jwt from "jsonwebtoken";

const adminOnly: MiddlewareHandler = async (c, next) => {
  const user = getCookie(c, "token");
  const secreet = process.env.JWT_SECRET;
  if (!user || !secreet) {
    return c.json(
      {
        status: "error",
        message: "Token atau secret tidak ditemukan"
      },
      401
    );
  }
  let decode;
  try {
    decode = jwt.verify(user, secreet);
  } catch (err) {
    return c.json(
      {
        status: "error",
        message: "Token tidak valid"
      },
      401
    );
  }
  c.set("user", decode);
  const role = (c.get("user") as any).role;
  if (role !== "ADMIN") {
    return c.json(
      {
        status: "error",
        message: "Akses ditolak, hanya admin yang dapat mengakses"
      },
      401
    );
  }
  await next();
};

export default adminOnly;
