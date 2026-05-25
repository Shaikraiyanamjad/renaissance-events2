import { motion } from "motion/react";

const IMAGES: { src: string; alt: string }[] = [
  { src: "/7.jpg", alt: "Gallery image 7" },
  { src: "/8.jpg", alt: "Gallery image 8" },
  { src: "/9.jpg", alt: "Gallery image 9" },
  { src: "/10.jpg", alt: "Gallery image 10" },
  { src: "/11.jpg", alt: "Gallery image 11" },
  { src: "/12.jpg", alt: "Gallery image 12" },
  { src: "/13.jpg", alt: "Gallery image 13" },
  { src: "/14.jpg", alt: "Gallery image 14" },
  { src: "/15.jpg", alt: "Gallery image 15" },
  { src: "/16.jpg", alt: "Gallery image 16" },
  { src: "/17.jpg", alt: "Gallery image 17" },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-background border-t border-foreground/10 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <header className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Gallery</p>
          <h2 className="display-xl mt-6 text-[clamp(2.4rem,6vw,6rem)]">Moments in Focus</h2>
          <p className="mt-6 text-lg text-foreground/70 text-pretty">
            A curated selection of on-site frames from conferences, hospitality, broadcasts and
            executive experiences.
          </p>
        </header>

        <div className="mt-12">
          {/* Perfect square grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-5">
            {IMAGES.map((img, idx) => (
              <motion.figure
                key={img.src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                className="group relative aspect-square overflow-hidden rounded-lg md:rounded-xl"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 will-change-transform group-hover:scale-[1.08]"
                />

                {/* hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* subtle frame */}
                <div className="absolute inset-0 border border-white/0 transition-colors duration-500 group-hover:border-white/20" />

                {/* caption */}
                <figcaption className="absolute inset-x-3 bottom-3">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-sm font-display text-white/0 group-hover:text-white/90 transition-colors duration-500">
                      {`Frame ${idx + 1}`}
                    </span>
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/0 text-white/0 ring-1 ring-white/0 transition-all duration-500 group-hover:bg-white/10 group-hover:text-white/90 group-hover:ring-white/20">
                      ↗
                    </span>
                  </div>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
