export const prerender = true;

export async function GET() {
  return new Response(
    JSON.stringify({
      message: `Este es mi endpoint estático`,
    }),
  );
}