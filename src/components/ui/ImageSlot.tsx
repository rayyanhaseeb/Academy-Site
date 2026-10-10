import { cn } from "@/lib/utils";

type ImageSlotProps = {
  readonly filename: string;
  readonly alt: string;
  readonly className?: string;
  readonly priority?: boolean;
  readonly fill?: boolean;
  readonly width?: number;
  readonly height?: number;
};

/**
 * ImageSlot renders the DESIGN.md §9 gradient placeholder block
 * with the target WebP filename clearly printed on it when local assets are pending.
 */
export function ImageSlot({
  filename,
  alt,
  className,
}: ImageSlotProps) {
  const baseName = filename.replace(/^\/images\//, "");

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn(
        "relative w-full h-full flex flex-col items-center justify-center select-none overflow-hidden",
        "bg-gradient-to-b from-[#182214] via-[#12190f] to-[#090c07]",
        "border border-border-hair",
        className
      )}
    >
      <div className="absolute inset-0 bg-hero-overlay opacity-60 pointer-events-none" />
      <div className="relative z-10 flex flex-col items-center justify-center p-4 text-center space-y-1">
        <span className="font-mono text-xs text-olive-500 tracking-widest uppercase">
          Asset Placeholder
        </span>
        <span className="font-mono text-xs sm:text-sm font-semibold text-text-muted bg-surface-ctrl/80 px-2.5 py-1 rounded border border-border-hair">
          {baseName}
        </span>
      </div>
    </div>
  );
}

