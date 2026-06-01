import { Link } from "react-router-dom";

export function Hero() {
  return (
    <section id="home" aria-labelledby="hero-title" className="relative w-full bg-white overflow-hidden">
      <div className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden bg-[var(--color-ink)]">
        
        {/* Background Video */}
        <div className="absolute inset-0">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="h-full w-full object-cover opacity-90"
            poster="https://images.pexels.com/videos/6661932/pexels-photo-6661932.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=630&w=1200"
          >
            <source src="https://videos.pexels.com/video-files/6661932/6661932-uhd_4096_2160_25fps.mp4" type="video/mp4" />
          </video>
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <p className="text-[13px] md:text-[15px] tracking-[0.35em] uppercase mb-4 opacity-90">
            The Handmade Collection
          </p>
          <h1
            id="hero-title"
            className="font-serif text-[56px] md:text-[100px] lg:text-[140px] leading-[0.9] tracking-[-0.02em] drop-shadow-md"
          >
            MAISON
            <br />
            <em className="italic font-normal text-[42px] md:text-[72px] lg:text-[96px]">ARTÉ</em>
          </h1>
          <p className="mt-6 max-w-lg text-[14px] md:text-[16px] leading-relaxed text-white/90 drop-shadow-sm">
            Handmade objects from independent ateliers — sketched, stitched,
            fired, or forged by a single pair of hands.
          </p>
          <Link
            to="/category/Women"
            className="mt-10 px-10 py-4 rounded-full bg-white text-[var(--color-ink)] text-[13px] tracking-[0.25em] uppercase hover:bg-white/90 transition-colors duration-[var(--duration-fast)] shadow-xl"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </section>
  );
}
