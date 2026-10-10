export type NavItem = {
  readonly label: string;
  readonly href: string;
};

export type HeroSlide = {
  readonly id: string;
  readonly image: string;
  readonly alt: string;
  readonly headline: string;
  readonly ctaLabel: string;
  readonly waMessage: string;
};

export type AboutBlock = {
  readonly eyebrow: string;
  readonly heading: string;
  readonly paragraphs: readonly string[];
  readonly image: string;
  readonly alt: string;
};

export type ProgramVariant = "feature" | "card";

export type Program = {
  readonly slug: string;
  readonly title: string;
  readonly description: string;
  readonly image: string;
  readonly alt: string;
  readonly waMessage: string;
  readonly variant: ProgramVariant;
};

export type FaqItem = {
  readonly id: string;
  readonly question: string;
  readonly answer: string;
};

export type CtaBlock = {
  readonly headingLine1: string;
  readonly headingLine2: string;
  readonly ctaLabel: string;
  readonly image: string;
  readonly alt: string;
  readonly waMessage: string;
};

export type FooterLink = {
  readonly label: string;
  readonly href: string;
  readonly external?: boolean;
};

export type FooterColumn = {
  readonly title: string;
  readonly links: readonly FooterLink[];
};

export type SocialLinks = {
  readonly facebook?: string;
  readonly instagram?: string;
  readonly twitter?: string;
  readonly youtube?: string;
};

export type SiteConfig = {
  readonly brandName: string;
  readonly wordmark: {
    readonly line1: string;
    readonly line2: string;
  };
  readonly tagline: string;
  readonly phoneDisplay: string;
  readonly phoneDigits: string;
  readonly address: string;
  readonly addressFallback: string;
  readonly locationLabel: string;
  readonly email: string;
  readonly socials: SocialLinks;
  readonly siteUrl: string;
  readonly waDefaultMessage: string;
  readonly locale: string;
  readonly navItems: readonly NavItem[];
  readonly heroSlides: readonly HeroSlide[];
  readonly about: AboutBlock;
  readonly programs: readonly Program[];
  readonly faq: readonly FaqItem[];
  readonly cta: CtaBlock;
  readonly footerColumns: readonly FooterColumn[];
};

export const siteConfig: SiteConfig = {
  brandName: "Haseeb Academy",
  wordmark: {
    line1: "HASEEB",
    line2: "ACADEMY",
  },
  /* [PLACEHOLDER] Brand tagline */
  tagline: "Premier education and training academy delivering excellence.",
  phoneDisplay: "+92 333 3044777",
  phoneDigits: "923333044777",
  address: "",
  addressFallback: "Address coming soon",
  locationLabel: "Pakistan",
  email: "",
  socials: {},
  /* [PLACEHOLDER] Production domain placeholder */
  siteUrl: "https://example.com",
  waDefaultMessage: "Hi Haseeb Academy, I'd like to know more.",
  locale: "en-PK",

  navItems: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],

  heroSlides: [
    {
      id: "hero-slide-1",
      image: "/images/hero-1.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Haseeb Academy campus and students preparing for lectures",
      /* [PLACEHOLDER] Hero headline 1 */
      headline: "TRAIN WITH\nPURPOSE",
      ctaLabel: "Book Now",
      waMessage: "Hi Haseeb Academy, I'd like to book a session.",
    },
    {
      id: "hero-slide-2",
      image: "/images/hero-2.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Instructor providing dedicated mentorship at Haseeb Academy",
      /* [PLACEHOLDER] Hero headline 2 */
      headline: "LEARN FROM\nTHE BEST",
      ctaLabel: "Book Now",
      waMessage: "Hi Haseeb Academy, I'd like to book a session.",
    },
    {
      id: "hero-slide-3",
      image: "/images/hero-3.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Students collaborating on strategic exercises in classroom",
      /* [PLACEHOLDER] Hero headline 3 */
      headline: "BUILD YOUR\nFUTURE",
      ctaLabel: "Book Now",
      waMessage: "Hi Haseeb Academy, I'd like to book a session.",
    },
  ],

  about: {
    /* [PLACEHOLDER] Eyebrow */
    eyebrow: "ABOUT HASEEB ACADEMY",
    /* [PLACEHOLDER] About heading */
    heading: "Empowering Next-Generation Leaders Through Purposeful Coaching",
    /* [PLACEHOLDER] About paragraphs */
    paragraphs: [
      "Haseeb Academy was founded to provide focused, disciplined academic and competitive training across Pakistan. We emphasize core fundamentals, analytical agility, and rigorous intellectual preparation.",
      "Our instructors bring comprehensive classroom experience, ensuring that every candidate receives targeted guidance tailored to their personal learning targets and strengths.",
      "Through modern study methods and a supportive academic environment, we help students build enduring confidence and achieve their highest career and academic goals.",
    ],
    image: "/images/about-main.webp",
    /* [PLACEHOLDER] Alt description */
    alt: "Haseeb Academy faculty member mentoring students",
  },

  programs: [
    {
      slug: "program-one",
      /* [PLACEHOLDER] Program One title */
      title: "Program One",
      /* [PLACEHOLDER] Program One description */
      description: "Our flagship comprehensive curriculum engineered to deliver rigorous concept clarity and dedicated exam mastery.",
      image: "/images/programs-memberships.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Interactive classroom lecture for Program One candidates",
      waMessage: "Hi Haseeb Academy, I'm interested in Program One.",
      variant: "feature",
    },
    {
      slug: "program-two",
      /* [PLACEHOLDER] Program Two title */
      title: "Program Two",
      /* [PLACEHOLDER] Program Two description */
      description: "Fast-track modular sessions designed for candidates seeking specialized subject reinforcement and practice drills.",
      image: "/images/programs-classes.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Small group seminar session for Program Two participants",
      waMessage: "Hi Haseeb Academy, I'm interested in Program Two.",
      variant: "card",
    },
    {
      slug: "program-three",
      /* [PLACEHOLDER] Program Three title */
      title: "Program Three",
      /* [PLACEHOLDER] Program Three description */
      description: "Advanced assessment simulations combining mock evaluations, timed testing, and personalized faculty review.",
      image: "/images/programs-residents.webp",
      /* [PLACEHOLDER] Alt description */
      alt: "Intensive evaluation workshop for Program Three candidates",
      waMessage: "Hi Haseeb Academy, I'm interested in Program Three.",
      variant: "card",
    },
  ],

  faq: [
    {
      id: "faq-1",
      /* [PLACEHOLDER] FAQ 1 question and answer */
      question: "What is Haseeb Academy?",
      answer: "Haseeb Academy is a dedicated education and preparatory training institute located in Pakistan, specializing in structured exam coaching and professional skill development.",
    },
    {
      id: "faq-2",
      /* [PLACEHOLDER] FAQ 2 question and answer */
      question: "What can I expect from a class?",
      answer: "You can expect structured curriculum modules, regular evaluation benchmarks, interactive problem-solving, and continuous feedback from experienced mentors.",
    },
    {
      id: "faq-3",
      /* [PLACEHOLDER] FAQ 3 question and answer */
      question: "Who can enrol?",
      answer: "Our courses are open to ambitious students and candidates aiming to excel in competitive assessments, board examinations, and specialized testing tracks.",
    },
    {
      id: "faq-4",
      /* [PLACEHOLDER] FAQ 4 question and answer */
      question: "How experienced are the instructors?",
      answer: "Our faculty comprises proven educators and subject experts with deep pedagogical backgrounds and strong success records in student mentorship.",
    },
    {
      id: "faq-5",
      /* [PLACEHOLDER] FAQ 5 question and answer */
      question: "How do I get started?",
      answer: "Simply connect with our admissions team directly via WhatsApp to receive course outlines, schedule details, and immediate enrollment guidance.",
    },
  ],

  cta: {
    /* [PLACEHOLDER] CTA headings */
    headingLine1: "START YOUR PREPARATION",
    headingLine2: "WITH CONFIDENCE",
    ctaLabel: "Contact on WhatsApp",
    image: "/images/cta-main.webp",
    /* [PLACEHOLDER] Alt description */
    alt: "Haseeb Academy consultation and admissions advisory",
    waMessage: "Hi Haseeb Academy, I'd like to get started.",
  },

  footerColumns: [
    {
      title: "Navigate",
      links: [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Programs", href: "#programs" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Programs",
      links: [
        { label: "Program One", href: "#programs" },
        { label: "Program Two", href: "#programs" },
        { label: "Program Three", href: "#programs" },
      ],
    },
    {
      title: "Contact",
      links: [
        { label: "+92 333 3044777", href: "tel:+923333044777" },
        { label: "Address coming soon", href: "#contact" },
        {
          label: "WhatsApp Chat",
          href: "https://wa.me/923333044777?text=Hi%20Haseeb%20Academy%2C%20I%27d%20like%20to%20know%20more.",
          external: true,
        },
      ],
    },
  ],
};

