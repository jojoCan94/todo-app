"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-background">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">
        <h1 className="mb-6 text-center text-2xl font-bold">
          Crea un nuovo account
        </h1>

        <button
          onClick={() => signIn("google")}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-gray-300 py-3 font-medium transition hover:bg-gray-100"
        >
          <FcGoogle className="h-6 w-6" />
          Continua con Google
        </button>
      </div>
    </main>
  );
}
