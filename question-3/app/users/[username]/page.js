import { notFound } from "next/navigation";

export default async function UserByUsernamePage({ params }) {
	const username = params?.username;

	const res = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await res.json();
	const user = users.find((u) => String(u.username).toLowerCase() === String(username).toLowerCase());

	if (!user) {
		notFound();
	}

	const website = String(user.website || "").trim();
	const normalizedWebsite = website.replace(/^https?:\/\//i, "");
	const href = `https://${normalizedWebsite}`;

	return (
		<main className="container">
			<h1 className="heading">User: {user.username}</h1>
			<p className="subtle" style={{ marginTop: 8 }}>
				Website:{" "}
				<a href={href} target="_blank" rel="noreferrer">
					{website || "N/A"}
				</a>
			</p>
			<div className="card" style={{ marginTop: 14 }}>
				<p><strong>Name:</strong> {user.name}</p>
				<p><strong>Email:</strong> {user.email}</p>
				<p><strong>Company:</strong> {user.company?.name}</p>
			</div>
		</main>
	);
}


