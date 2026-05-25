const PARTNERS = [
  "RENAISSANCE",
  "MERIDIAN",
  "ATELIER",
  "NORTHWIND",
  "AUREATE",
  "PARALLEL",
  "VERTEX",
  "OBSIDIAN",
  "HARBOR & CO",
  "MONARCH",
];

export function Partners() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="bg-secondary py-16 border-y border-foreground/10 overflow-hidden">
      <div className="mx-auto max-w-[1600px] px-5 sm:px-8 mb-8 flex items-center justify-between gap-4 flex-wrap">
        <p className="font-display text-xl sm:text-2xl">Trusted by the rooms we cover.</p>
        <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Since 2014</p>
      </div>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-secondary to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-secondary to-transparent z-10" />
        <div className="flex marquee gap-6 w-max min-w-max">
          {row.map((p, i) => (
            <div
              key={i}
              className="shrink-0 font-display text-2xl sm:text-3xl text-foreground/40 hover:text-foreground transition-colors px-4"
            >
              {p}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
