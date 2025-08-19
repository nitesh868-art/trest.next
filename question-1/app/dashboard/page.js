import Link from "next/link";

export default function DashboardPage() {
	return (
		<main style={{ padding: 24 }}>
			<h1 style={{ fontSize: 24, fontWeight: 600 }}>Dashboard</h1>
			<p>Use the links below to navigate.</p>
			<ul style={{ marginTop: 12, display: "grid", gap: 8 }}>
				<li>
					<Link href="/dashboard/profile">Profile</Link>
				</li>
				<li>
					<Link href="/dashboard/settings">Settings</Link>
				</li>
				<li>
					<Link href="/dashboard/profile/Bret">Profile for Bret (dynamic)</Link>
				</li>
			</ul>
		</main>
	);
}


