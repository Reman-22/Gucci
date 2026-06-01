import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products";
import { ProductCard } from "./ProductCard";
import { ServicesSection } from "./ServicesSection";

export function CollectionGrid() {
  const items = PRODUCTS.slice(0, 6);

  return (
    <section id="collection" aria-labelledby="collection-title" className="bg-white">
      <div className="px-4 md:px-6 pt-20 pb-10 md:pt-28 md:pb-14 border-b border-[var(--color-rule)]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-ink-muted)] mb-4">
              Editions 01 — 09
            </p>
            <h2 id="collection-title" className="font-serif font-light text-[40px] md:text-[56px] leading-[1] tracking-[-0.01em]">
              The Collection
            </h2>
          </div>
          <p className="text-[13px] leading-[1.7] text-[var(--color-ink-soft)] max-w-[44ch]">
            Pieces are released in single drops. Once an edition closes, it is archived — never reissued.
          </p>
        </div>
      </div>

      <div className="px-4 md:px-6 py-10 md:py-14">
        <p className="text-[11px] tracking-[0.22em] uppercase text-[var(--color-ink-muted)] mb-8">
          Featured pieces
        </p>
        <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-14 md:gap-x-8 md:gap-y-20">
          {items.map((p, i) => (
            <li key={p.id}>
              <ProductCard product={p} priority={i < 3} />
            </li>
          ))}
        </ul>
        <div className="mt-16 md:mt-24 flex justify-center">
          <Link
            to="/category/Women"
            className="px-10 py-4 rounded-full border border-[var(--color-ink)] text-[12px] tracking-[0.22em] uppercase hover:bg-[var(--color-ink)] hover:text-white transition-colors duration-[var(--duration-fast)] shadow-sm"
          >
            View Full Collection
          </Link>
        </div>
      </div>

      <ServicesSection />
    </section>
  );
}
