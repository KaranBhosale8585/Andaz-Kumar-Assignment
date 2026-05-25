export default function DashboardSkeleton() {
  return (
    <main className="flex-1 p-6">
      <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-[220px] gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="
                animate-pulse
                rounded-3xl
                border
                border-white/10
                bg-zinc-900
              "
          />
        ))}
      </section>
    </main>
  );
}
