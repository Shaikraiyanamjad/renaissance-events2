import { motion } from "motion/react";
import { SITE } from "@/lib/site";
import { useRef, useState, useEffect } from "react";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(false);

  function toggleMute() {
    const next = !muted;
    setMuted(next);
    if (videoRef.current) videoRef.current.muted = next;
  }

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = muted;
    const tryPlay = async () => {
      try {
        await v.play();
      } catch (e) {
        // autoplay with sound may be blocked; fall back to muted autoplay
        console.debug("Unmuted play prevented, falling back to muted:", e);
        setMuted(true);
        try {
          v.muted = true;
          await v.play();
        } catch (err) {
          console.debug("Muted play also prevented:", err);
        }
      }
    };
    tryPlay();
  }, [muted]);

  return (
    <section className="relative bg-background">
      {/* Fullscreen visual (background video) */}
      <div className="relative h-[100svh] min-h-[600px] w-full overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={muted}
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/special-events-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-black/30" />

        {/* Mute / Unmute control (bottom-right) */}
        <div className="absolute bottom-6 right-6">
          <button
            aria-label={muted ? "Unmute video" : "Mute video"}
            onClick={toggleMute}
            className="inline-flex items-center justify-center rounded-full bg-background/60 backdrop-blur-sm p-2 text-white/90 hover:bg-background/80 transition-colors"
          >
            {muted ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9a4 4 0 010 6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M11 5L6 9H3v6h3l5 4V5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.54 8.46a5 5 0 010 7.07M19.07 5.93a9 9 0 010 12.73" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Two-column intro block — Momentum signature */}
      <div className="mx-auto max-w-[2000px] px-5 sm:px-8 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-end">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="display-xl text-[clamp(2.8rem,7.5vw,7.5rem)]"
          >
            We are Renaissance Events
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="md:pb-3"
          >
            <h2 className="font-display text-2xl sm:text-3xl text-balance">
              We are the modern-day experiential media company.
            </h2>
            <p className="mt-5 text-base sm:text-lg text-foreground/70 max-w-xl text-pretty">
              In a world that's becoming more artificial, we deliver experiences,
              broadcasts and stories that make brands matter more — from the floor of
              every conference, lounge and keynote we cover.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a href="#what-we-do" className="pill-btn metallic">
                Learn More
                <span className="pill-arrow">→</span>
              </a>
              <a href={`mailto:${SITE.emails[1]}`} className="pill-btn metallic">
                Contact Us
                <span className="pill-arrow">→</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
