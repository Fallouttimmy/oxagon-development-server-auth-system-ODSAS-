
export async function POST() {
  return new Response(JSON.stringify({
    ok: true,
    message: "Register placeholder"
  }), { status: 200 });
}
