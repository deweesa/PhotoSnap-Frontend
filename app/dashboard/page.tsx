import { redirect } from "next/navigation";

import { auth0 } from "@/lib/auth0";

export const instant = false;

export default async function Dashboard() {
  const session = await auth0.getSession();

  if (!session) {
    redirect("/auth/login?returnTo=/dashboard");
  }

  const name = session.user.name ?? session.user.email ?? "there";

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 dark:bg-black">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          Authenticated dashboard
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          Welcome, {name}
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          This page is protected on the server and is available only to signed-in
          users.
        </p>
        <a
          className="mt-8 inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
          href="/auth/logout"
        >
          Log out
        </a>
      </section>
    </main>
  );
}
