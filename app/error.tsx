"use client";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#050505] flex items-center justify-center px-6">
      <section className="max-w-md rounded-3xl border border-white/10 bg-zinc-950 p-8 text-center">
        <h1 className="text-3xl font-bold text-white">
          Failed to load dashboard
        </h1>

        <p className="mt-4 text-zinc-400">
          Something went wrong while fetching your learning data.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-2xl bg-white px-5 py-3 font-medium text-black transition-transform hover:scale-[1.02]"
        >
          Try Again
        </button>
      </section>
    </main>
  );
}
