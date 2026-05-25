import { createFileRoute } from "@tanstack/react-router";
import { WhatWeDo } from "@/components/sections/WhatWeDo";
import { Coverage } from "@/components/sections/Coverage";
import { Partners } from "@/components/sections/Partners";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Special Events Channel" },
      {
        name: "description",
        content:
          "The modern-day experiential media company. Built for premium events, hospitality and executive networks.",
      },
      { property: "og:title", content: "About — Special Events Channel" },
      {
        property: "og:description",
        content: "Production-led media for premium events, hospitality and executive networks.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <div className="pt-36 pb-12 mx-auto max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">About</p>
        <h1 className="display-xl mt-6 text-[clamp(2.6rem,8vw,8rem)]">
          We are the <br /> modern-day <br /> experiential <br /> media co.
        </h1>
      </div>
      <WhatWeDo />
      <Partners />
      <Coverage />
    </>
  );
}
