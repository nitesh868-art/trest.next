import Link from "next/link";

export default function ProfileIndexPage() {
	return (
		<main style={{ padding: 24 }}>
			<h2 style={{ fontSize: 20, fontWeight: 600 }}>Profile</h2>
			<p>This is the profile overview page.</p>
			<p>
				Try a dynamic profile:{" "}
				<Link href="/dashboard/profile/Bret">/dashboard/profile/Bret</Link>
			</p>
		</main>
	);
}


