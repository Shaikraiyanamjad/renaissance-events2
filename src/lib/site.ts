export const SITE = {
  name: "Renaissance Events",
  short: "Renaissance",
  tagline: "Where Experiences Become Influence",
  description:
    "Renaissance Events is a premium experiential media platform — covering conferences, hospitality, sponsorships, executive interviews, and luxury events.",
  emails: ["info@renaissanceevents.com", "info@specialeventschannel.com"],
} as const;

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/contact", label: "Contact" },
] as const;
