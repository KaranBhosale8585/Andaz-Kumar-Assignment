export default function SettingsPage() {
  return (
    <main className="p-4 md:p-6 lg:p-8">
      <header>
        <p className="text-sm text-zinc-500">Preferences</p>

        <h1 className="mt-2 text-4xl font-bold">Settings</h1>
      </header>

      <section className="mt-8 grid gap-4">
        <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Profile</h2>

          <p className="mt-2 text-zinc-400">
            Manage your learning account and dashboard preferences.
          </p>
        </article>

        <article className="rounded-3xl border border-white/10 bg-zinc-950 p-6">
          <h2 className="text-xl font-semibold">Notifications</h2>

          <p className="mt-2 text-zinc-400">
            Configure reminders and activity alerts.
          </p>
        </article>
      </section>
    </main>
  );
}
