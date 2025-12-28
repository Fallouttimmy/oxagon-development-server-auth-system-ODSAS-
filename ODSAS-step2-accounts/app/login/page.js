
export default function Login() {
  return (
    <main style={{ padding: 32, fontFamily: 'sans-serif' }}>
      <h1>Login to Oxagon</h1>
      <form method="POST" action="/api/auth/login">
        <input name="email" placeholder="Email" required /><br/><br/>
        <input name="password" type="password" placeholder="Password" required /><br/><br/>
        <button>Login</button>
      </form>
      <p><a href="/register">Create account</a></p>
    </main>
  );
}
