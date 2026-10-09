export default function Loading() {
  return (
    <div
      className="fixed inset-0 z-[100] flex min-h-screen flex-col items-center justify-center bg-body text-light"
      role="status"
      aria-label="Loading weather"
    >
      {/* Animated spinner */}
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-white/10" />

        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-sky-400" />

        <span className="text-2xl">☁</span>
      </div>

      <h2 className="mt-6 text-lg font-medium tracking-wide">
        Fetching Weather
      </h2>

      <p className="mt-2 text-sm text-white/50">
        Getting the latest weather information...
      </p>

      {/* Loading indicator */}
      <div className="mt-6 h-1 w-40 overflow-hidden rounded-full bg-white/10">
        <div className="h-full w-1/2 animate-pulse rounded-full bg-sky-400" />
      </div>
    </div>
  );
}
