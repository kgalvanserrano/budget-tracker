import { useState } from "react";

export default function AuthForm({ onLogin }) {
	const [user, setUser] = useState({ email: "", password: "" });
	const handleSubmit = (e) => {
		e.preventDefault();
		onLogin(user.email);
		setUser({ email: "", password: "" });
	}

	return (
		<div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh', padding: 'var(--space-6)' }}>
			<div className="card" style={{ width: '100%', maxWidth: 420 }}>
				<div className="stack-md" style={{ textAlign: 'center' }}>
					<h1 style={{ marginBottom: 0 }}>Budget Tracker</h1>
					<p style={{ color: 'var(--color-muted)', marginTop: 0 }}>Sign in to continue</p>
				</div>
				<form onSubmit={handleSubmit} className="stack-md" style={{ marginTop: 'var(--space-4)' }}>
					<input
						type="email"
						placeholder="Email"
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						required
					/>
					<input
						type="password"
						placeholder="Password"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						required
					/>
					<div style={{ display: 'flex', gap: 'var(--space-3)' }}>
						<button type="submit" className="btn btn-primary" style={{ flex: 1 }}>Login</button>
						<button type="button" className="btn btn-ghost" style={{ flex: 1 }} onClick={() => onLogin('Guest')}>Guest</button>
					</div>
				</form>
			</div>
		</div>
	);
}