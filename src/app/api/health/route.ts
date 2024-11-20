
/**
 * This is required for ci/cd integration.
 */
export async function GET() {
  return new Response("Hello, I am still alive!", {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
    },
  });
}