import { MiddlewareHandler } from "hono";

const adminOnly : MiddlewareHandler = async (c, next) => {
  const user = c.get("user");

  if (!user || user.role !== "ADMIN") {
    return c.json(
      {
        message: "Akses ditolak, hanya admin yang dapat mengakses"
      },
      403
    );
  }
  return next();
};

export default adminOnly;
