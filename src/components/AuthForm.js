import { useState } from "react";

export default function AuthForm( { onLogin }) {
	const [user, setUser] = useState({ email: "", password: "" });

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="email"
				placeholder="Email"
				value={user.email}
				onChange={(e) => setUser({ ...user, email: e.target.value })}
			/>
			<input
				type="password"
				placeholder="Password"
				value={user.password}
				onChange={(e) => setUser({ ...user, password: e.target.value })}
			/>
			<button type="submit">Login</button>
		</form>
	);
}