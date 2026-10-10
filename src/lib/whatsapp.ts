import { siteConfig } from "@/config/site";

/**
 * Builds a direct WhatsApp chat link with optional prefilled message.
 * Strictly asserts /^92\d{10}$/ format in non-production environments.
 */
export function waLink(message?: string, digits: string = siteConfig.phoneDigits): string {
  if (process.env.NODE_ENV !== "production" && !/^92\d{10}$/.test(digits)) {
    throw new Error(
      `Invalid WhatsApp phoneDigits: "${digits}". Must be digits only, start with 92, and contain exactly 12 digits (/^92\\d{10}$/).`
    );
  }

  const query = message && message.trim().length > 0
    ? `?text=${encodeURIComponent(message.trim())}`
    : "";

  return `https://wa.me/${digits}${query}`;
}

