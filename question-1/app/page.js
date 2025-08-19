import Link from "next/link";

export default function Home() {
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontSize: 24, fontWeight: 600 }}>Question 1</h1>
      <p>Click the links below to open the dashboard routes.</p>
      <ul style={{ marginTop: 12, display: "grid", gap: 8 }}>
        <li>
          <Link href="/dashboard">Go to /dashboard</Link>
        </li>
        <li>
          <Link href="/dashboard/profile">Go to /dashboard/profile</Link>
        </li>
        <li>
          <Link href="/dashboard/settings">Go to /dashboard/settings</Link>
        </li>
        <li>
          <Link href="/dashboard/profile/Bret">Dynamic: /dashboard/profile/Bret</Link>
        </li>
      </ul>
    </main>
  );
}
