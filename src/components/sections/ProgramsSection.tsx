import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";
import { ImageSlot } from "@/components/ui/ImageSlot";

export function ProgramsSection() {
  const featureProgram = siteConfig.programs.find((p) => p.variant === "feature") ?? siteConfig.programs[0];
  const cardPrograms = siteConfig.programs.filter((p) => p.variant === "card");

  return (
    <section
      id="programs"
      className="scroll-mt-[72px] w-full py-20 lg:py-24 border-t border-border-hair bg-gradient-to-b from-[#11170D] to-[#0C100A]"
    >
      {/* Content width: min(100% - 2*gutter, 1600px) centered */}
      <div
        className="mx-auto w-full"
        style={{
          width: "min(100%, 1600px)",
          paddingInline: "var(--gutter)",
        }}
      >
        {/* Section Header */}
        <div className="text-center max-w-[560px] mx-auto space-y-3 mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-olive-500">
            OUR PREPARATORY TRACKS
          </span>
          <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-[2.25rem] font-bold text-text-heading leading-[1.1] tracking-[-0.01em]">
            Specialized Academic Programs
          </h2>
          <p className="font-body text-text-muted text-sm sm:text-base leading-[1.6]" style={{ maxWidth: "65ch", margin: "0 auto" }}>
            Structured learning pathways engineered to cultivate analytical rigor, strategic problem-solving, and proven examination mastery.
          </p>
        </div>

        {/* 1. Full-Width Feature Card — aspect-ratio 1100/505 */}
        {featureProgram && (
          <div className="group mb-6 rounded-[16px] bg-surface-card border border-border-hair hover:border-border-hover transition-colors duration-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.40)] focus-within:outline focus-within:outline-2 focus-within:outline-link">
            <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: "420px" }}>
              {/* Text Side */}
              <div className="order-2 lg:order-1 flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                <div className="space-y-4">
                  <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-olive-500">
                    FEATURED CURRICULUM
                  </span>
                  <h3 className="font-display text-2xl lg:text-[1.75rem] font-bold text-text-heading leading-[1.2]">
                    {featureProgram.title}
                  </h3>
                  <p className="font-body text-text-body text-sm sm:text-base leading-[1.6]" style={{ maxWidth: "65ch" }}>
                    {featureProgram.description}
                  </p>
                </div>

                <div className="pt-6">
                  <a
                    href={waLink(featureProgram.waMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-display font-bold text-link hover:text-link-hover text-sm sm:text-base transition-all duration-180 min-h-[44px] focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-180 group-hover:translate-x-1" aria-hidden="true" />
                  </a>
                </div>
              </div>

              {/* Media Side — aspect-ratio 1100/505 on mobile, fills column on desktop */}
              <div className="order-1 lg:order-2 overflow-hidden bg-surface-media">
                <div
                  className="w-full lg:h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  style={{ aspectRatio: "1100 / 505" }}
                >
                  <ImageSlot
                    filename={featureProgram.image}
                    alt={featureProgram.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 2. Two Small Cards — aspect-ratio 538/220 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {cardPrograms.map((program) => (
            <div
              key={program.slug}
              className="group rounded-[16px] bg-surface-card border border-border-hair hover:border-border-hover transition-colors duration-200 overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.40)] focus-within:outline focus-within:outline-2 focus-within:outline-link"
            >
              <div className="grid grid-cols-1 sm:grid-cols-12" style={{ minHeight: "220px" }}>
                {/* Text Side (~55% width) */}
                <div className="order-2 sm:order-1 sm:col-span-7 flex flex-col justify-between p-6 sm:p-7">
                  <div className="space-y-2">
                    <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] font-semibold text-olive-500">
                      SPECIALIZED TRACK
                    </span>
                    <h3 className="font-display text-xl font-bold text-text-heading leading-[1.2]">
                      {program.title}
                    </h3>
                    <p className="font-body text-text-muted text-xs sm:text-[0.8125rem] leading-[1.55] line-clamp-3">
                      {program.description}
                    </p>
                  </div>

                  <div className="pt-4">
                    <a
                      href={waLink(program.waMessage)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 font-display font-bold text-link hover:text-link-hover text-xs sm:text-sm transition-all duration-180 min-h-[44px] focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-180 group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Media Side (~45% width) — aspect-ratio 538/220 on mobile */}
                <div className="order-1 sm:order-2 sm:col-span-5 overflow-hidden bg-surface-media">
                  <div
                    className="w-full sm:h-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                    style={{ aspectRatio: "538 / 220" }}
                  >
                    <ImageSlot
                      filename={program.image}
                      alt={program.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
