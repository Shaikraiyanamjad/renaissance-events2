import { motion } from "motion/react";

const COVERAGE = [
  "Conferences",
  "Keynotes",
  "Hospitality",
  "Sponsorships",
  "Executive Interviews",
  "Broadcasts & Webcasts",
  "Galas & Black Tie",
  "Golf & Invitationals",
  "Brand Activations",
  "Luxury Destinations",
];

export function Coverage() {
  return (
    <section className="bg-background border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="display-xl text-[clamp(2.4rem,6vw,6rem)]">Coverage</h2>
          <p className="mt-6 max-w-md text-lg text-foreground/70 text-pretty">
            From conference floors to private suites — a full network of stories, executives and
            brands we cover, on every continent we shoot.
          </p>
          <a
            href="#"
            className="pill-btn mt-8"
            style={{ background: "var(--ink)", color: "var(--background)" }}
          >
            Explore the work →
          </a>
        </div>

        <ul className="md:border-l md:border-foreground/15 md:pl-12">
          {COVERAGE.map((c, i) => (
            <motion.li
              key={c}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group border-b border-foreground/10 py-5"
            >
              <a
                href="#"
                className="flex items-center justify-between font-display text-3xl sm:text-4xl md:text-5xl transition-colors group-hover:text-accent"
              >
                <span>{c}</span>
                <span className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0">
                  →
                </span>
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
