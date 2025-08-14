"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 48 48" {...props}>
    <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303..." />
    <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819..." />
    <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977..." />
    <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303..." />
  </svg>
);

export default function AuthPage() {
  const { data: session } = useSession();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const containerStyles =
    "flex h-screen items-center justify-center bg-gray-100 dark:bg-gray-900";
  const cardStyles =
    "w-full max-w-md transform rounded-2xl bg-white p-8 shadow-xl transition-all dark:bg-gray-800";

  async function handleCredentialsSignIn(e: React.FormEvent) {
    e.preventDefault();

    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      alert("Login failed: " + result.error);
    } else {
      alert("Login success!");
    }
  }

  if (!session) {
    return (
      <main className={containerStyles}>
        <div className={cardStyles}>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              Welcome
            </h1>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Sign in to access your dashboard.
            </p>
          </div>

          <div className="mt-8 space-y-4">
            {/* Google Sign In */}
            <button
              onClick={() => signIn("google")}
              className="group flex w-full items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 font-semibold text-gray-700 transition-colors hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
            >
              <GoogleIcon className="h-6 w-6" />
              <span>Sign in with Google</span>
            </button>

            {/* Credentials Sign In */}
            <form onSubmit={handleCredentialsSignIn} className="space-y-3">
              <input
                name="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              />
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-300 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-blue-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                Sign in with Email
              </button>
            </form>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className={containerStyles}>
      <div className={`${cardStyles} text-center`}>
        {session.user?.image && (
          <img
            src={session.user.image}
            alt="Profile Picture"
            className="mx-auto h-28 w-28 rounded-full border-4 border-gray-200 object-cover shadow-md dark:border-gray-600"
          />
        )}

        <div className="mt-6">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Signed in as
          </p>
          <h2 className="mt-1 text-2xl font-bold text-gray-800 dark:text-white">
            {session.user?.name}
          </h2>
          <p className="mt-1 text-gray-600 dark:text-gray-300">
            {session.user?.email}
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={() => signOut()}
            className="w-full rounded-lg bg-red-500 px-4 py-3 font-semibold text-white transition-colors hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Sign out
          </button>
        </div>
      </div>
    </main>
  );
}
