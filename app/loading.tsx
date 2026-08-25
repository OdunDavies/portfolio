export default function Loading() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <span className="h-px w-24 bg-border overflow-hidden">
          <span className="block h-full w-full bg-accent animate-pulse" />
        </span>
        <span className="mono-label text-muted">Loading</span>
      </div>
    </div>
  )
}
