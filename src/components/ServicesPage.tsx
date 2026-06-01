import { Link } from "react-router-dom";

const SERVICES_DETAIL = [
  {
    title: "Bespoke Commissions",
    subtitle: "From concept to creation",
    desc: "Work directly with our master artisans to create a one-of-a-kind piece. You will be guided through every step: initial consultation, material selection, sketch approval, handcrafting, and final delivery. Lead times vary from 4 to 16 weeks depending on complexity.",
    image: "https://images.pexels.com/photos/4452610/pexels-photo-4452610.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    features: [
      "Personal consultation with the artisan",
      "Custom material and color selection",
      "Progress updates with photographs",
      "Signed certificate of authenticity",
      "Complimentary monogramming",
    ],
  },
  {
    title: "Repair & Restoration",
    subtitle: "Made to last a lifetime",
    desc: "Every MAISON ARTÉ piece comes with a lifetime repair guarantee. Our ateliers can re-sole shoes, re-stitch leather goods, re-glaze ceramics, and restore silver. We believe in objects that outlive us.",
    image: "https://images.pexels.com/photos/37443512/pexels-photo-37443512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    features: [
      "Lifetime repair guarantee",
      "Authentic materials only",
      "Hand-finishing by original artisans",
      "Free assessment and quote",
      "Care and maintenance guide included",
    ],
  },
  {
    title: "Atelier Visits",
    subtitle: "See the making",
    desc: "Book a private visit to our flagship ateliers in Florence, Italy, and Kyoto, Japan. Watch masters at work, try your hand at a craft, and gain a deeper understanding of the time and skill behind every piece.",
    image: "https://images.pexels.com/photos/5706269/pexels-photo-5706269.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    features: [
      "Florence: Leather & Shoemaking",
      "Kyoto: Ceramics & Silver",
      "Small groups (max 6 persons)",
      "Hands-on workshop included",
      "Complimentary refreshments",
    ],
  },
  {
    title: "Gift Concierge",
    subtitle: "Every detail considered",
    desc: "Our gift concierge service handles everything from complimentary archival-quality wrapping to handwritten notes and scheduled delivery. We can also arrange a virtual unwrapping call with the artisan who made the piece.",
    image: "https://images.pexels.com/photos/31203863/pexels-photo-31203863.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=800&w=1200",
    features: [
      "Archival-quality gift wrapping",
      "Handwritten note card",
      "Scheduled delivery to any address",
      "Virtual meeting with the artisan",
      "Gift receipt included",
    ],
  },
];

export function ServicesPage() {
  return (
    <div className="bg-white">
      <div className="px-4 md:px-6 pt-16 pb-8 md:pt-24 md:pb-12 border-b border-[var(--color-rule)]">
        <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-ink-muted)] mb-4">Maison Arté</p>
        <h1 className="font-serif font-light text-[48px] md:text-[72px] leading-[0.95] tracking-[-0.01em]">Our Services</h1>
        <p className="mt-6 text-[14px] leading-[1.7] text-[var(--color-ink-soft)] max-w-[52ch]">
          Beyond the product — a commitment to craft, care, and connection.
        </p>
      </div>

      <div className="px-4 md:px-6 py-14 md:py-20 space-y-24 md:space-y-32">
        {SERVICES_DETAIL.map((svc, i) => (
          <section key={svc.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}>
            <div className={`${i % 2 === 1 ? "lg:order-2" : "lg:order-1"}`}>
              <div className="aspect-[4/3] bg-[var(--color-surface-raised)] overflow-hidden rounded-3xl">
                <img src={svc.image} alt={svc.title} loading="lazy" className="h-full w-full object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out" />
              </div>
            </div>
            <div className={`${i % 2 === 1 ? "lg:order-1" : "lg:order-2"}`}>
              <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-ink-muted)] mb-2">{svc.subtitle}</p>
              <h2 className="font-serif font-light text-[32px] md:text-[40px] leading-[1.05] tracking-[-0.01em]">{svc.title}</h2>
              <p className="mt-6 text-[14px] leading-[1.8] text-[var(--color-ink-soft)]">{svc.desc}</p>
              <ul className="mt-8 space-y-3">
                {svc.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[13px]">
                    <span className="text-[var(--color-ink-muted)]" aria-hidden="true">—</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/category/Atelier"
                className="inline-block mt-10 px-8 py-3 rounded-full border border-[var(--color-ink)] text-[12px] tracking-[0.22em] uppercase hover:bg-[var(--color-ink)] hover:text-white transition-colors duration-[var(--duration-fast)]"
              >
                Start a Project
              </Link>
            </div>
          </section>
        ))}
      </div>

      <div className="px-4 md:px-6 py-20 border-t border-[var(--color-rule)] bg-white text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-[var(--color-ink-muted)] mb-4">Ready to begin?</p>
        <h2 className="font-serif font-light text-[36px] md:text-[44px] leading-[1.05]">
          Let&apos;s make something together.
        </h2>
        <p className="mt-4 text-[14px] text-[var(--color-ink-soft)]">
          Reach out to our concierge team. We reply within 24 hours.
        </p>
        <Link
          to="/"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-[var(--color-ink)] text-white text-[12px] tracking-[0.22em] uppercase hover:bg-[var(--color-ink-soft)] transition-colors duration-[var(--duration-fast)] shadow-md"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
}
