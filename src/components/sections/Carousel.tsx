import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import interview from "@/assets/img1.png";
import gala from "@/assets/img3.jpeg";
import webcast from "@/assets/img5.jpeg";
import networking from "@/assets/img7.jpeg";

const SLIDES = [
  {
    img: interview,
    tag: "Executive Corner",
    overTitle: "Why Her? Why Not Them?",
    sub: "How brands rethink the room this season.",
    title: "Thursday Thoughts: Founders Edition",
  },
  {
    img: webcast,
    tag: "Broadcast",
    overTitle: "ADWEEK",
    sub: "Creative 100",
    title: "SEC: The 2026 Creative 100",
  },
  {
    img: gala,
    tag: "Hospitality",
    overTitle: "trends across the planet",
    sub: "luxury",
    title: "Trends Across the Planet: Luxury Edition",
  },
  {
    img: networking,
    tag: "Networking",
    overTitle: "Black Tie",
    sub: "founders, operators, capital",
    title: "Founders Black Tie · NYC",
  },
];

export function Carousel() {
  const [i, setI] = useState(1);
  const trackRef = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 120, damping: 22 });

  useEffect(() => {
    const w = trackRef.current?.children[0]?.getBoundingClientRect().width ?? 0;
    const gap = 24;
    mx.set(-(i * (w + gap)) + (trackRef.current?.parentElement?.getBoundingClientRect().width ?? 0) / 2 - w / 2);
  }, [i, mx]);

  // Auto-advance carousel every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setI((prev) => (prev + 1) % SLIDES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative bg-secondary py-20 md:py-28 overflow-hidden">
      <div className="overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 will-change-transform"
        >
          {SLIDES.map((s, idx) => {
            const active = idx === i;
            return (
              <article
                key={s.title}
                onClick={() => setI(idx)}
                className="group relative shrink-0 w-[78vw] sm:w-[52vw] md:w-[38vw] lg:w-[28vw] cursor-pointer"
              >
                <div
                  className={`relative aspect-[3/4] overflow-hidden rounded-md transition-all duration-700 ${
                    active ? "opacity-100 scale-100" : "opacity-50 scale-95"
                  }`}
                >
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 mix-blend-multiply" />
                  <div className="absolute top-3 sm:top-6 left-0 right-0 text-center text-white font-display px-3 sm:px-0">
                    <p className="text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] opacity-80 text-[0.65rem] sm:text-xs">{s.tag}</p>
                    <p className="mt-2 sm:mt-3 text-[1.75rem] sm:text-4xl md:text-5xl leading-[0.95]">{s.overTitle}</p>
                    <p className="mt-1 text-lg sm:text-3xl md:text-4xl italic font-display">{s.sub}</p>
                  </div>
                </div>
                <p className={`mt-3 sm:mt-5 font-display text-sm sm:text-lg md:text-xl transition-opacity ${active ? "opacity-100" : "opacity-0"}`}>
                  {s.title}
                </p>
              </article>
            );
          })}
        </motion.div>
      </div>

      <div className="mt-6 sm:mt-10 flex items-center justify-center gap-1.5 sm:gap-2 px-4">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setI(idx)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              idx === i ? "w-6 sm:w-10 bg-accent" : "w-1.5 sm:w-2 bg-foreground/30 hover:bg-foreground/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
