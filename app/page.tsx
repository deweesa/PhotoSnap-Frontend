import { auth0 } from "@/lib/auth0";

export const instant = false;

export default async function Home() {
  const session = await auth0.getSession();

  return (
    <main className="flex flex-1 items-center justify-center bg-zinc-50 px-6 dark:bg-black">
      <section className="w-full max-w-xl rounded-2xl bg-white p-8 shadow-sm dark:bg-zinc-950">
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          PhotoSn
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50">
          {session
            ? `Welcome back, ${session.user.name ?? session.user.email ?? "there"}`
            : "Sign in to continue"}
        </h1>
        <p className="mt-4 text-zinc-600 dark:text-zinc-300">
          {session
            ? "Your Auth0 session is active."
            : "Securely authenticate with your Auth0 account to access your dashboard."}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {session ? (
            <>
              <a
                className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
                href="/dashboard"
              >
                Open dashboard
              </a>
              <a
                className="inline-flex h-10 items-center justify-center rounded-full border border-zinc-300 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-50 dark:hover:bg-zinc-900"
                href="/auth/logout"
              >
                Log out
              </a>
            </>
          ) : (
            <a
              className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-950 px-5 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-300"
              href="/auth/login?returnTo=/dashboard"
            >
              Log in
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
