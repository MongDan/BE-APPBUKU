import { MiddlewareHandler } from "hono";
import { verify } from "jsonwebtoken";

const accessValidation: MiddlewareHandler = async (c, next) => {
  const authHeader = c.req.header("Authorization");

  if (!authHeader) {
    return c.json(
      {
        message: "Token diperlukan"
      },
      400
    );
  }

  const token = authHeader.split(" ")[1];
  const secret = process.env.JWT_SECRET;

  if (!token) {
    return c.json(
      {
        message: "Token tidak valid"
      },
      400
    );
  }

  try {
    const decoded = verify(token, secret);
    return next();
  } catch (err) {
    return c.json(
      {
        message: "Token tidak valid"
      },
      400
    );
  }
};

export default accessValidation;
