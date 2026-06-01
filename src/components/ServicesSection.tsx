import { Link } from "react-router-dom";
import { useInView } from "../hooks/useInView";

type Props = { onNavigate?: (p: any) => void };

export function ServicesSection({}: Props) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <section id="services" aria-labelledby="services-title" className="bg-white border-y border-[var(--color-rule)]">
      <div className="px-4 md:px-6 py-16 md:py-24">
        <Link 
          to="/services"
          className="block max-w-6xl mx-auto relative group overflow-hidden cursor-pointer rounded-3xl" 
        >
          {/* Large image */}
          <div ref={ref} className="aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/37443512/pexels-photo-37443512.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1000&w=2000" 
              alt="Our Services" 
              className={`w-full h-full object-cover transition-all duration-[2000ms] ease-[cubic-bezier(.2,.8,.2,1)] ${inView ? "scale-100 group-hover:scale-105" : "scale-[1.2]"}`}
            />
            {/* Dark overlay for contrast */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
          </div>
          
          {/* Centered text and button */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6 text-center pointer-events-none">
            <h2 
              id="services-title" 
              className="font-serif font-light text-[36px] md:text-[56px] leading-[1.05] tracking-[-0.01em] mb-6 drop-shadow-md"
            >
              Our Services
            </h2>
            <div className="px-10 py-4 rounded-full bg-white text-[var(--color-ink)] text-[12px] tracking-[0.22em] uppercase transition-colors duration-[var(--duration-fast)] pointer-events-auto hover:bg-white/90 shadow-lg cursor-pointer">
              View Services & Project Details
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}
