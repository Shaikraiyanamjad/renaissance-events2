import { motion } from "motion/react";
import interview from "@/assets/img.jpeg";
import gala from "@/assets/img3.jpg";
import webcast from "@/assets/img5.jpg";
import networking from "@/assets/img9.jpg";

type Block = {
  title: string;
  body: string;
  bg: string;
  fg: string;
  img: string;
  variant: "blob1" | "blob2" | "blob3" | "blob4";
};

const BLOCKS: Block[] = [
  {
    title: "EXPERIENTIAL COVERAGE",
    body: "We create the experiences that make brands matter.",
    bg: "var(--sage)",
    fg: "var(--ink)",
    img: interview,
    variant: "blob1",
  },
  {
    title: "PARTNERSHIPS & SPONSORSHIPS",
    body: "Sponsor narratives that travel — long after the lights go down.",
    bg: "var(--ink)",
    fg: "var(--background)",
    img: gala,
    variant: "blob2",
  },
  {
    title: "EXECUTIVE INTERVIEWS",
    body: "Long-form conversations with the operators shaping the agenda.",
    bg: "var(--cream)",
    fg: "var(--ink)",
    img: webcast,
    variant: "blob3",
  },
  {
    title: "HOSPITALITY & B2H",
    body: "We do B2B with a Business2Human mindset.",
    bg: "var(--sage)",
    fg: "var(--ink)",
    img: networking,
    variant: "blob4",
  },
];

function BlobMask({ variant }: { variant: Block["variant"] }) {
  // Each variant returns an SVG mask path id
  return (
    <svg width="0" height="0" className="absolute" aria-hidden>
      <defs>
        <clipPath id="blob1" clipPathUnits="objectBoundingBox">
          <path d="M0,0.18 Q0,0 0.18,0 L0.62,0 Q0.78,0 0.82,0.16 Q0.86,0.34 0.98,0.42 Q1,0.5 0.92,0.62 Q0.78,0.78 0.62,0.78 L0.18,0.78 Q0,0.78 0,0.6 Z" />
        </clipPath>
        <clipPath id="blob2" clipPathUnits="objectBoundingBox">
          <path d="M0.04,0.1 L0.5,0 L0.96,0.18 Q1,0.45 0.85,0.55 Q0.95,0.7 0.78,0.85 L0.2,0.92 Q0,0.78 0.02,0.5 Z" />
        </clipPath>
        <clipPath id="blob3" clipPathUnits="objectBoundingBox">
          <circle cx="0.5" cy="0.5" r="0.5" />
        </clipPath>
        <clipPath id="blob4" clipPathUnits="objectBoundingBox">
          <path d="M0.1,0 L0.9,0 Q1,0.2 0.92,0.45 Q1,0.6 0.85,0.8 L0.55,1 L0.15,0.85 Q0,0.6 0.08,0.4 Q0,0.2 0.1,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function BlockCard({ block, idx }: { block: Block; idx: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden rounded-[40px] p-4 sm:p-12 md:p-16 min-h-[360px] sm:min-h-[440px] md:min-h-[520px] flex"
      style={{ background: block.bg, color: block.fg }}
    >
      <BlobMask variant={block.variant} />

      {/* Left content */}
      <div className="relative z-10 flex flex-col justify-between w-full md:w-[55%] pr-4 sm:pr-0 sm:bg-transparent bg-black/40 p-3 sm:p-0 rounded-lg sm:rounded-none">
        <h3 className="font-display text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-[0.95] text-balance sm:text-current text-white">
          {block.title}
        </h3>
        <div className="mt-6 sm:mt-8">
          <p className="font-display text-base sm:text-2xl max-w-md text-balance leading-tight sm:text-current text-white/90">
            {block.body}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-bold border-2"
            style={{
              background: block.fg,
              color: block.bg,
              borderColor: block.fg,
            }}
          >
            Learn More
            <span>→</span>
          </a>
        </div>
      </div>

      {/* Right image masked into organic shape */}
      <div className="absolute right-0 sm:right-4 md:right-8 top-0 sm:top-6 bottom-0 sm:bottom-6 w-full sm:w-[50%] md:w-[42%]">
        <div className="relative w-full h-full" style={{ clipPath: `url(#${block.variant})` }}>
          <img
            src={block.img}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>
    </motion.div>
  );
}

export function WhatWeDo() {
  return (
    <section id="what-we-do" className="bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="display-xl text-[clamp(2.6rem,7vw,7rem)] mb-12 md:mb-16"
        >
          What We Do
        </motion.h2>

        <div className="space-y-6 md:space-y-10">
          {BLOCKS.map((b, i) => (
            <BlockCard key={b.title} block={b} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
