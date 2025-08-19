'use client';

import { useParams } from "next/navigation";

export default function UserProfilePage() {
	const params = useParams();
	const username = Array.isArray(params?.username)
		? params.username[0]
		: params?.username;

	return (
		<main style={{ padding: 24 }}>
			<h2 style={{ fontSize: 20, fontWeight: 600 }}>Dynamic Profile</h2>
			<p>
				Username: <strong>{username}</strong>
			</p>
		</main>
	);
}


