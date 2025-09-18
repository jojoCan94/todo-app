"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function AuthNav() {
  const { data: session, status } = useSession();

  if (status === "loading") return null;

  return session ? (
    <div className="flex items-center gap-3">
      <span className="text-sm text-gray-600">{session.user?.email}</span>
      <button onClick={() => signOut()} className="rounded bg-gray-900 px-3 py-1 text-white">
        Logout
      </button>
    </div>
  ) : (
    <button onClick={() => signIn("google")} className="rounded border px-3 py-1">
      Login
    </button>
  );
}
