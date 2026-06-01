export function Editorial() {
  return (
    <section
      id="atelier"
      aria-labelledby="editorial-title"
      className="bg-[var(--color-ink)] text-white"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="relative h-[60vh] lg:h-auto min-h-[480px]">
          <img
            src="https://images.pexels.com/photos/37443512/pexels-photo-37443512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1400&w=1800"
            alt="Craftsman working leather on a wooden workbench under warm light"
            loading="lazy"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-6 md:px-16 py-20 lg:py-32">
          <div className="max-w-[440px]">
            <p className="text-[11px] tracking-[0.28em] uppercase text-white/60 mb-6">
              Inside the Atelier
            </p>
            <h2
              id="editorial-title"
              className="font-serif font-light text-[36px] md:text-[48px] leading-[1.05] tracking-[-0.01em]"
            >
              A single pair of hands,
              <br />
              <em className="italic">from sketch to finish.</em>
            </h2>
            <p className="mt-8 text-[14px] leading-[1.8] text-white/75">
              No production lines. No anonymous suppliers. Each MAISON ARTÉ
              piece carries the signature of its maker — etched, embossed, or
              hand-written into the object itself.
            </p>
            <span className="mt-10 inline-flex items-center gap-3 text-[12px] tracking-[0.22em] uppercase border-b border-white pb-1 cursor-pointer hover:opacity-80 transition-opacity">
              Read the Stories
              <span aria-hidden="true">→</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
