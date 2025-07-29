// components/LoginButton.tsx
"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function LoginButton() {
  const { data: session } = useSession();

  if (session)
    return (
      <>
        Signed in as {session.user?.email}{" "}
        <button onClick={() => signOut()} className="underline">
          Sign out
        </button>
      </>
    );

  return (
    <>
      Not signed in{" "}
      <button onClick={() => signIn()} className="underline">
        Sign in
      </button>
    </>
  );
}
