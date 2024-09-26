import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
  console.log("Hola mundo desde los logs de Netlify Functions");
  return Response.json({ message: "Hello, World!" });
}
