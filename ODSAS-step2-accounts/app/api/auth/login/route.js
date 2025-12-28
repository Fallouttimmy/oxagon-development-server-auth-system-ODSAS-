
export async function POST() {
  return new Response(JSON.stringify({
    ok: true,
    message: "Login placeholder"
  }), { status: 200 });
}
