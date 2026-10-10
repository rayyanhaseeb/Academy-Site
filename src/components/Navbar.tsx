"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = siteConfig.navItems.map((item) =>
        item.href.replace("#", "")
      );

      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sectionId);
            return;
          }
        }
      }

      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Skip to main content accessibility link */}
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-surface-card focus:text-link focus:border focus:border-olive-500 focus:font-mono focus:text-xs"
      >
        Skip to content
      </a>

      {/* Full-bleed header: background spans viewport, inner uses --gutter padding */}
      <header
        className="sticky top-0 z-40 w-full h-[72px] bg-bg-footer/85 backdrop-blur-md border-b border-border-hair"
      >
        <div
          className="h-full flex items-center justify-between"
          style={{ paddingInline: "var(--gutter)" }}
        >
          {/* Brand Wordmark — sits at the left gutter */}
          <Link
            href="#home"
            className="flex flex-col text-left font-display font-bold text-text-heading tracking-tight leading-none focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
            aria-label={`${siteConfig.brandName} Home`}
          >
            <span className="text-base tracking-wider text-text-heading">
              {siteConfig.wordmark.line1}
            </span>
            <span className="text-xs tracking-widest text-olive-500">
              {siteConfig.wordmark.line2}
            </span>
          </Link>

          {/* Desktop Navigation Links — right gutter */}
          <nav
            aria-label="Desktop Navigation"
            className="hidden lg:flex items-center gap-10"
          >
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "font-mono text-xs tracking-wide transition-colors duration-180 py-1 border-b-2",
                    isActive
                      ? "text-link border-olive-500"
                      : "text-text-heading/85 border-transparent hover:text-link hover:border-olive-500"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden flex items-center justify-center w-11 h-11 text-text-heading hover:text-link focus:outline-none focus-visible:outline-2 focus-visible:outline-link"
            aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-nav-drawer"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-text-heading" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6 text-text-heading" aria-hidden="true" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-x-0 top-[72px] bottom-0 z-30 bg-bg-footer flex flex-col py-6 lg:hidden animate-in fade-in duration-200"
          style={{ paddingInline: "var(--gutter)" }}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col divide-y divide-border-hair">
            {siteConfig.navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center h-14 font-mono text-base tracking-wide transition-colors duration-180",
                    isActive ? "text-link font-semibold" : "text-text-heading hover:text-link"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
