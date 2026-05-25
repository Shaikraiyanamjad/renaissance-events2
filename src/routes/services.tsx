import { createFileRoute } from "@tanstack/react-router";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Contact } from "@/components/sections/Contact";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Special Events Channel" },
      {
        name: "description",
        content:
          "Event coverage, executive interviews, sponsorships, webcasts, hospitality and luxury event production.",
      },
      { property: "og:title", content: "Services — Special Events Channel" },
      {
        property: "og:description",
        content: "A full-stack production studio for the events industry.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <div className="pt-36 pb-6 mx-auto max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Services</p>
        <h1 className="display-xl mt-6 text-[clamp(2.6rem,8vw,8rem)]">What We Do</h1>
      </div>
      <WhatWeDo />
      <Contact />
    </>
  );
}
