
export async function GET() {
  return new Response(JSON.stringify({ status: "ODSAS online" }), { status: 200 });
}
