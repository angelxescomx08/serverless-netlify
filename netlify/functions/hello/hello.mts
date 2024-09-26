import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Hello World" }),
    headers: {
      "Content-Type": "application/json",
    }
  }
}
