"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { useEffect } from "react";

export default function LoginPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") router.replace("/");
  }, [status, router]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Accedi al tuo account
        </h1>

        <button
          onClick={() => signIn("google")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-100"
        >
          <FcGoogle className="h-6 w-6" />
          Accedi con Google
        </button>
      </div>
    </main>
  );
}
