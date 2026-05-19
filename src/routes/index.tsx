import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/Hero";
import { Carousel } from "@/components/sections/Carousel";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Coverage } from "@/components/sections/Coverage";
import { Partners } from "@/components/sections/Partners";
import { Contact } from "@/components/sections/Contact";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${SITE.name} — Where Experiences Become Influence` },
      {
        name: "description",
        content:
          "The modern-day experiential media company. We cover conferences, hospitality, sponsorships, executive interviews and luxury events.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Carousel />
      <WhatWeDo />
      <Coverage />
      <Partners />
      <Contact />
    </>
  );
}
