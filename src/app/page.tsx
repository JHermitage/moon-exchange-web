export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center p-6">
      <div className="max-w-xl text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Moon Exchange
        </h1>
        <p className="text-white/70">
          It pulls only the data that matters to you. Formatted for clarity, not chaos.
        </p>
        <div className="flex items-center justify-center gap-3">
          <a
            href="/dashboard"
            className="rounded-md px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white hover:text-black transition"
          >
            Open Dashboard
          </a>
          <a
            href="https://github.com"
            className="rounded-md px-4 py-2 text-sm font-semibold ring-1 ring-white/20 hover:bg-white hover:text-black transition"
          >
            View Repo
          </a>
        </div>
        <p className="text-xs text-white/50">v0.1 • Next.js + Tailwind</p>
      </div>
    </main>
  )
}
