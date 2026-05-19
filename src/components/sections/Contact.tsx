import { motion } from "motion/react";
import { SITE } from "@/lib/site";

export function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-foreground/10 bg-background py-20 sm:py-24 md:py-32"
    >
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-12 px-4 sm:px-6 md:grid-cols-12 md:items-end md:gap-10 lg:px-8">
        
        {/* LEFT */}
        <div className="md:col-span-7">
          <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/60 sm:text-xs">
            Contact
          </p>

          <h2 className="display-xl mt-5 text-[clamp(2.5rem,8vw,7rem)] leading-[0.95]">
            Tell us about
            <br className="hidden sm:block" />
            your next room.
          </h2>
        </div>

        {/* RIGHT */}
        <div className="md:col-span-5 space-y-4">
          {SITE.emails.map((email, i) => (
            <motion.a
              key={email}
              href={`mailto:${email}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.1,
                duration: 0.6,
              }}
              className="group flex w-full items-center justify-between gap-3 rounded-full bg-foreground px-4 py-4 text-background transition-colors hover:bg-accent hover:text-accent-foreground sm:px-6"
            >
              <span className="min-w-0 break-all font-display text-sm sm:text-base md:text-lg lg:text-xl">
                {email}
              </span>

              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-background/15 transition-colors group-hover:bg-foreground/15">
                →
              </span>
            </motion.a>
          ))}

          <p className="pt-4 text-xs text-foreground/60 sm:text-sm">
            Replies within one business day · Worldwide
          </p>
        </div>
      </div>
    </section>
  );
}