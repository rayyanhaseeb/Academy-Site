import { MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function CtaSection() {
  const { headingLine1, headingLine2, ctaLabel, image, alt, waMessage } = siteConfig.cta;

  return (
    <section
      id="contact"
      className="scroll-mt-[72px] w-full bg-bg-cta py-16 lg:py-28 border-t border-border-hair"
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
          {/* Left Column: H2, divider, button */}
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-olive-500">
                DIRECT ADMISSIONS ADVISORY
              </span>
              <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-[2.25rem] font-bold text-text-heading leading-[1.1] tracking-[-0.01em]">
                {headingLine1}
                <br />
                {headingLine2}
              </h2>
            </div>

            {/* 40x2px Olive Divider */}
            <div className="w-10 h-0.5 bg-olive-500" aria-hidden="true" />

            <p className="font-body text-sm sm:text-base text-text-body leading-[1.6]" style={{ maxWidth: "65ch" }}>
              Speak directly with our academic coordinators to receive comprehensive cohort outlines, seat availability, and tailored guidance.
            </p>

            <div className="pt-2">
              <a
                href={waLink(waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] px-7 py-3.5 rounded-[6px] bg-btn-bg text-btn-text border border-btn-border font-display font-bold uppercase tracking-[0.02em] text-[0.8125rem] transition-all duration-180 hover:bg-btn-bg-hover hover:border-link hover:-translate-y-0.5 active:bg-btn-bg-active shadow-[0_8px_24px_rgba(53,74,33,0.55)] focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
              >
                {ctaLabel}
              </a>
            </div>
          </div>

          {/* Right Column: media — aspect-ratio 530/370 */}
          <div className="order-1 lg:order-2 lg:col-span-6 w-full">
            <div
              className="relative w-full rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.40)] border border-border-hair"
              style={{ aspectRatio: "530 / 370" }}
            >
              <ImageSlot
                filename={image}
                alt={alt}
                className="w-full h-full object-cover"
              />

              {/* Location Chip */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 py-2 px-3.5 rounded-full bg-surface-chip/90 backdrop-blur-sm border border-border-hair shadow-md">
                <MapPin className="w-3.5 h-3.5 text-olive-500 shrink-0" aria-hidden="true" />
                <span className="font-mono text-xs font-medium text-text-heading tracking-wide">
                  {siteConfig.locationLabel}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
