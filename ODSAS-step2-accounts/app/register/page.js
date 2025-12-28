
export default function Register() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Create Oxagon Account</h1>
      <form method="POST" action="/api/auth/register">
        <input name="email" placeholder="Email" required /><br/><br/>
        <input name="password" type="password" placeholder="Password" required /><br/><br/>
        <button>Create Account</button>
      </form>
    </main>
  );
}
