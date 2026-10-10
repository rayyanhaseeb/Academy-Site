import { siteConfig } from "@/config/site";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function AboutSection() {
  const { eyebrow, heading, paragraphs, image, alt } = siteConfig.about;

  return (
    <section
      id="about"
      className="scroll-mt-[72px] w-full bg-bg-about py-16 lg:py-28 border-t border-border-hair"
    >
      {/* Content width: min(100% - 2*gutter, 1600px) centered */}
      <div
        className="mx-auto w-full"
        style={{
          width: "min(100%, 1600px)",
          paddingInline: "var(--gutter)",
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: portrait media (aspect-ratio 414/540, mobile 4:3) */}
          <div className="lg:col-span-5 w-full">
            <div
              className="w-full rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.40)] border border-border-hair"
              style={{ aspectRatio: "414 / 540" }}
            >
              <ImageSlot
                filename={image}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: Eyebrow, H2, body paragraphs (max-width 65ch) */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-olive-500">
                {eyebrow}
              </span>
              <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-[2.25rem] font-bold text-text-heading leading-[1.1] tracking-[-0.01em]">
                {heading}
              </h2>
            </div>

            <div className="space-y-5 text-sm sm:text-[1rem] text-text-body leading-[1.6]" style={{ maxWidth: "65ch" }}>
              {paragraphs.map((p, idx) => (
                <p key={`about-p-${idx}`}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
