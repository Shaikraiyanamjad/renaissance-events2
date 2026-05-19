import { Link, useLocation } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { NAV, SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () =>
      setScrolled(window.scrollY > 30);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location.pathname === "/";
  const overHero = isHome && !scrolled;

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/85 backdrop-blur-2xl border-b border-[#0b3f9c]/10 shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent",
        )}
      >
        <div className="mx-auto flex h-[78px] w-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-10">
          
          {/* BRAND */}
          <Link
            to="/"
            className="group flex min-w-0 flex-col justify-center"
          >
            <h1
              className={cn(
                "truncate text-[15px] font-semibold uppercase tracking-[0.22em] transition-all sm:text-[18px] lg:text-[20px]",
                overHero
                  ? "text-white"
                  : "text-[#0b3f9c]",
              )}
            >
              Renaissance Events
            </h1>

            <span
              className={cn(
                "mt-1 text-[8px] uppercase tracking-[0.28em] transition-all sm:text-[9px]",
                overHero
                  ? "text-white/70"
                  : "text-[#0b3f9c]/60",
              )}
            >
              Meetings & Special Events
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center lg:flex">
            {NAV.map((item) => {
              const active =
                location.pathname === item.to;

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "relative px-5 py-2 text-[13px] font-medium uppercase tracking-[0.16em] transition-all duration-300",
                    active
                      ? "text-[#0b3f9c]"
                      : overHero
                      ? "text-white/85 hover:text-white"
                      : "text-[#0b3f9c]/65 hover:text-[#0b3f9c]",
                  )}
                >
                  {item.label}

                  {active && (
                    <motion.div
                      layoutId="active-nav"
                      className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full bg-[#0b3f9c]"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CONTACT BUTTON */}
          <a
            href={`mailto:${SITE.emails[1]}`}
            className={cn(
              "hidden rounded-full border px-5 py-2 text-[12px] font-medium uppercase tracking-[0.16em] transition-all duration-300 hover:scale-[1.04] lg:flex",
              overHero
                ? "border-white/25 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20"
                : "border-[#0b3f9c]/15 bg-[#0b3f9c] text-white hover:bg-[#082d70]",
            )}
          >
            Contact
          </a>

          {/* MOBILE BUTTON */}
          <button
            onClick={() =>
              setMobileOpen(!mobileOpen)
            }
            className={cn(
              "flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 lg:hidden",
              mobileOpen || scrolled
                ? "bg-white shadow-[0_8px_25px_rgba(0,0,0,0.12)]"
                : "bg-white/10 backdrop-blur-xl border border-white/20",
            )}
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-[#0b3f9c]" />
            ) : (
              <Menu
                className={cn(
                  "h-5 w-5",
                  overHero
                    ? "text-white"
                    : "text-[#0b3f9c]",
                )}
              />
            )}
          </button>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 24,
                stiffness: 220,
              }}
              className="fixed right-0 top-0 z-50 flex h-full w-[88%] max-w-[380px] flex-col bg-white shadow-[-10px_0_40px_rgba(0,0,0,0.12)] lg:hidden"
            >
              {/* TOP */}
              <div className="flex items-center justify-between border-b border-[#0b3f9c]/10 px-5 py-5">
                <div className="min-w-0">
                  <h2 className="truncate text-[15px] font-semibold uppercase tracking-[0.18em] text-[#0b3f9c]">
                    Renaissance Events
                  </h2>

                  <p className="mt-1 text-[8px] uppercase tracking-[0.22em] text-[#0b3f9c]/55">
                    Meetings & Events
                  </p>
                </div>

                <button
                  onClick={() =>
                    setMobileOpen(false)
                  }
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0b3f9c]/5"
                >
                  <X className="h-5 w-5 text-[#0b3f9c]" />
                </button>
              </div>

              {/* NAV */}
              <div className="flex flex-1 flex-col px-5 pt-5">
                {NAV.map((item, index) => {
                  const active =
                    location.pathname === item.to;

                  return (
                    <motion.div
                      key={item.to}
                      initial={{
                        opacity: 0,
                        x: 30,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                      }}
                    >
                      <Link
                        to={item.to}
                        onClick={() =>
                          setMobileOpen(false)
                        }
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-4 transition-all duration-300",
                          active
                            ? "bg-[#0b3f9c] text-white"
                            : "text-[#0b3f9c] hover:bg-[#0b3f9c]/5",
                        )}
                      >
                        <span className="text-[15px] font-medium uppercase tracking-[0.14em]">
                          {item.label}
                        </span>

                        <span
                          className={cn(
                            "text-xs",
                            active
                              ? "text-white/60"
                              : "text-[#0b3f9c]/35",
                          )}
                        >
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* FOOTER */}
              <div className="border-t border-[#0b3f9c]/10 p-5">
                <a
                  href={`mailto:${SITE.emails[1]}`}
                  className="flex h-12 w-full items-center justify-center rounded-2xl bg-[#0b3f9c] text-[12px] font-medium uppercase tracking-[0.18em] text-white transition-all hover:scale-[1.02]"
                >
                  Contact Us
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}