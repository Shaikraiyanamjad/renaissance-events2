import { createFileRoute } from "@tanstack/react-router";
import { Carousel } from "@/components/sections/Carousel";
import { Coverage } from "@/components/sections/Coverage";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Work — Special Events Channel" },
      { name: "description", content: "Selected productions from conferences, hospitality, golf, broadcasts and executive interviews." },
      { property: "og:title", content: "Work — Special Events Channel" },
      { property: "og:description", content: "Selected experiential media productions." },
      { property: "og:url", content: "/work" },
    ],
    links: [{ rel: "canonical", href: "/work" }],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <div className="pt-36 pb-6 mx-auto max-w-[1600px] px-5 sm:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Work</p>
        <h1 className="display-xl mt-6 text-[clamp(2.6rem,8vw,8rem)]">Selected Work</h1>
      </div>
      <Carousel />
      <Coverage />
    </>
  );
}
