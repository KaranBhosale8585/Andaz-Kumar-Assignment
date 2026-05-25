import ActivityTile from "@/components/dashboard/ActivityTile";

export default function AnalyticsPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8">
      <header>
        <p className="text-sm text-zinc-500">Insights</p>

        <h1 className="mt-2 text-4xl font-bold">Learning Analytics</h1>
      </header>

      <section className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <ActivityTile />

        <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
          <p className="text-sm text-zinc-500">Weekly Progress</p>

          <h2 className="mt-2 text-2xl font-bold">82% Completion Rate</h2>

          <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
          </div>
        </article>
      </section>
    </main>
  );
}
