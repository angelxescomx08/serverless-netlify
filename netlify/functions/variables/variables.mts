import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {

  const { MY_ENV_VAR } = process.env;

  return Response.json({ MY_ENV_VAR: MY_ENV_VAR });
}
