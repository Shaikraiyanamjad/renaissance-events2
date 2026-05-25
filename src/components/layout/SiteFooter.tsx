import { Link } from "@tanstack/react-router";
import { SITE, NAV } from "@/lib/site";

const FOOTER_LINKS = [
  ["Work", "Brand Activation", "Partnerships & Sponsorships", "Executive Interviews"],
  ["About", "What We Do", "Industry Insights", "People"],
];

export function SiteFooter() {
  return (
    <footer className="bg-ink text-background">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 pt-16 pb-10">
        <div className="grid gap-10 md:grid-cols-12 items-start">
          <div className="md:col-span-3 space-y-2">
            {FOOTER_LINKS[0].map((l) => (
              <a
                key={l}
                href="#"
                className="block border-t border-white/15 py-3 font-bold hover:text-white/50 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:col-span-3 space-y-2">
            {FOOTER_LINKS[1].map((l) => (
              <a
                key={l}
                href="#"
                className="block border-t border-white/15 py-3 font-bold hover:text-white/50 transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="md:col-span-3 space-y-2">
            {NAV.slice(1).map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="block border-t border-white/15 py-3 font-bold hover:text-white/50 transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </div>
          <div className="md:col-span-3">
            <a
              href={`mailto:${SITE.emails[1]}`}
              className="group flex items-center justify-between gap-3 rounded-full bg-white text-ink px-6 py-3.5 font-bold hover:bg-background transition-colors"
            >
              <span>Contact Us</span>
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink text-background group-hover:bg-accent group-hover:text-ink transition-colors">
                →
              </span>
            </a>
            <div className="mt-6 space-y-2 text-sm">
              {SITE.emails.map((e) => (
                <a
                  key={e}
                  href={`mailto:${e}`}
                  className="block text-white/70 hover:text-accent transition-colors"
                >
                  {e}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/15 pt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-white/60">
          <p>
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <p className="font-display tracking-tight text-white">
            Where Experiences Become Influence.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-accent">
              LinkedIn
            </a>
            <a href="#" className="hover:text-accent">
              Instagram
            </a>
            <a href="#" className="hover:text-accent">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
