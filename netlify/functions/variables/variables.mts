import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  const { MY_ENV_VAR } = process.env;

  console.log("Hola mundo desde los logs de Netlify Functions");

  return Response.json({ MY_ENV_VAR: MY_ENV_VAR });
}
