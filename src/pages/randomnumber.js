export const prerender = false;

export async function GET() {
  let number = Math.random();
  return new Response(
    JSON.stringify({
      number,
      message: `Aquí tienes un número aleatorio: ${number}`,
    }),
  );
}