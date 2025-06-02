import { MiddlewareHandler } from "hono";
const userOnly: MiddlewareHandler = async (c, next) => {
  const user = c.get("user");
  if (user.role !== "USER") {
    return c.json({ message: "Akses ditolak: khusus USER" }, 403);
  }
  await next();
};

export default userOnly;