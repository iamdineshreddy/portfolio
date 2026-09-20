import { imageConfig, profile } from "../data/profile";

export function ProfileImage({ className = "" }: { className?: string }) {
  if (imageConfig.enabled) {
    return (
      <img
        src={imageConfig.slot}
        alt={imageConfig.alt}
        loading="lazy"
        className={`aspect-square w-full rounded-2xl border hairline bg-ink-900 object-cover ${className}`}
      />
    );
  }

  return (
    <div
      role="img"
      aria-label={`${profile.name} — placeholder avatar`}
      className={`flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-2xl border hairline bg-gradient-to-br from-ink-800 via-ink-850 to-ink-900 ${className}`}
    >
      <span className="flex h-24 w-24 items-center justify-center rounded-2xl bg-ink-800 font-mono text-3xl font-bold text-accent-300 ring-1 ring-ink-600">
        DR
      </span>
      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted-500">
        photo coming soon
      </span>
    </div>
  );
}