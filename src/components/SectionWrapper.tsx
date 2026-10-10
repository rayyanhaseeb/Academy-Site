import { cn } from "@/lib/utils";

type SectionWrapperProps = {
  readonly id: string;
  readonly className?: string;
  readonly children: React.ReactNode;
};

/**
 * Content sections wrapper: fluid width using CSS custom property --gutter.
 * The section itself spans full width; the inner div constrains content to max 1600px.
 */
export function SectionWrapper({ id, className, children }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={cn("scroll-mt-[72px] w-full transition-colors duration-200", className)}
    >
      <div
        className="w-full mx-auto"
        style={{
          width: "min(100%, 1600px)",
          paddingInline: "var(--gutter)",
        }}
      >
        {children}
      </div>
    </section>
  );
}
