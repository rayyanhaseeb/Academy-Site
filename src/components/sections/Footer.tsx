import Link from "next/link";
import { siteConfig } from "@/config/site";
import { waLink } from "@/lib/whatsapp";

export function Footer() {
  const navigateColumn = siteConfig.footerColumns.find((col) => col.title === "Navigate");

  const addressText = siteConfig.address && siteConfig.address.trim().length > 0
    ? siteConfig.address
    : siteConfig.addressFallback;

  return (
    <footer
      className="w-full bg-bg-footer pt-20 pb-16 border-t border-olive-700"
    >
      {/* Full-bleed: padding-inline: var(--gutter) */}
      <div
        className="mx-auto w-full"
        style={{
          width: "min(100%, 1600px)",
          paddingInline: "var(--gutter)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Column 1: Brand block (lg:col-span-4) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] text-olive-500 uppercase tracking-widest px-2 py-0.5 rounded border border-border-hair bg-surface-chip">
                [LOGO]
              </span>
              <div className="flex flex-col text-left font-display font-bold text-text-heading tracking-tight leading-none">
                <span className="text-sm tracking-wider text-text-heading">
                  {siteConfig.wordmark.line1}
                </span>
                <span className="text-[10px] tracking-widest text-olive-500">
                  {siteConfig.wordmark.line2}
                </span>
              </div>
            </div>

            <p className="font-body text-xs text-text-muted leading-[1.6] max-w-sm">
              {siteConfig.tagline}
            </p>

            {siteConfig.socials && Object.keys(siteConfig.socials).length > 0 && (
              <div className="flex items-center gap-3 pt-2" />
            )}
          </div>

          {/* Column 2: Navigate (lg:col-span-2) */}
          <div className="space-y-4 lg:col-span-2">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-text-heading">
              {navigateColumn?.title ?? "Navigate"}
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              {(navigateColumn?.links ?? siteConfig.navItems).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Programs (lg:col-span-3) */}
          <div className="space-y-4 lg:col-span-3">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-text-heading">
              Programs
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              {siteConfig.programs.map((program) => (
                <li key={program.slug}>
                  <Link
                    href="#programs"
                    className="text-text-muted hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact (sm:col-span-2, lg:col-span-3) */}
          <div className="sm:col-span-2 lg:col-span-3 space-y-4">
            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-text-heading">
              Contact
            </h3>
            <ul className="space-y-3 font-mono text-xs">
              <li>
                <a
                  href={`tel:+${siteConfig.phoneDigits}`}
                  className="text-text-muted hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                >
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>
                <span className="text-text-dim">{addressText}</span>
              </li>
              {siteConfig.email && siteConfig.email.trim().length > 0 && (
                <li>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-text-muted hover:text-link transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                  >
                    {siteConfig.email}
                  </a>
                </li>
              )}
              <li>
                <a
                  href={waLink(siteConfig.waDefaultMessage)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link hover:underline transition-colors duration-180 focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
                >
                  WhatsApp Chat
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
