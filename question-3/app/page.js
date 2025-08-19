import Link from "next/link";

export default async function Home() {
	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	const shownUsers = users.slice(0, 4);

	return (
		<main className="container">
			<h1 className="heading">Users</h1>
			<p className="subtle">Click a user to view their website.</p>
			<ul className="list">
				{shownUsers.map((user) => (
					<li key={user.id} className="card">
						<Link href={`/users/${encodeURIComponent(user.username)}`}>{user.name} ({user.username})</Link>
					</li>
				))}
			</ul>
		</main>
	);
}
