import { auth } from "@clerk/nextjs";

export default function DashboardPage() {
  const { userId } = auth();

  if (!userId) {
    return <p>Unauthorized</p>;
  }

  return <p>Welcome, user {userId}</p>;
}
