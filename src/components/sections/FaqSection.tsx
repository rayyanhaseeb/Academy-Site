"use client";

import { siteConfig } from "@/config/site";
import { ImageSlot } from "@/components/ui/ImageSlot";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/Accordion";

export function FaqSection() {
  const defaultOpenId = siteConfig.faq[0]?.id ?? "faq-1";

  return (
    <section
      id="faq"
      className="scroll-mt-[72px] w-full bg-bg-faq py-16 lg:py-28 border-t border-border-hair"
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
          {/* Left Column: media — aspect-ratio 440/590 */}
          <div className="lg:col-span-5 w-full">
            <div
              className="w-full rounded-[16px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.40)] border border-border-hair"
              style={{ aspectRatio: "440 / 590" }}
            >
              <ImageSlot
                filename="/images/faq-main.webp"
                alt="Frequently asked questions about enrollment at Haseeb Academy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Column: H2 + 5 Accordion Rows */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
            <div className="space-y-3">
              <span className="font-mono text-xs uppercase tracking-[0.08em] font-semibold text-olive-500">
                QUESTIONS & ADMISSIONS
              </span>
              <h2 className="font-display text-[1.75rem] sm:text-3xl lg:text-[2.25rem] font-bold text-text-heading leading-[1.1] tracking-[-0.01em]">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue={defaultOpenId}
              className="w-full space-y-3"
            >
              {siteConfig.faq.map((item) => (
                <AccordionItem key={item.id} value={item.id}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
