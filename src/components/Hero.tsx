import { motion } from 'motion/react';
import heroImg from '../assets/images/salon_hero_cinematic_1782389885351.jpg';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] md:h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Luxury Salon Interior"
          className="w-full h-full object-cover object-center scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-black/70 via-brand-black/50 to-brand-black/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl pt-20 pb-24 md:pb-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <span className="text-brand-red uppercase tracking-[0.3em] text-xs md:text-sm lg:text-base font-medium mb-4 block">
            The Epitome of Elegance
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-tight mb-6">
            Refine Your <br className="hidden md:block" />
            <span className="italic text-zinc-300 font-light">Aesthetic.</span>
          </h1>
          <p className="text-zinc-300 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-10 font-light px-4 md:px-0">
            An exclusive sanctuary for grooming and beauty. Experience master craftsmanship in a sophisticated, high-end environment.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="#book"
              className="bg-brand-red hover:bg-brand-red-hover text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center"
            >
              Book Appointment
            </a>
            <a
              href="#services"
              className="bg-transparent border border-white/30 hover:border-white text-white px-8 py-4 rounded-sm text-sm uppercase tracking-widest transition-all duration-300 w-full sm:w-auto text-center"
            >
              Explore Services
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2 text-zinc-400 hidden sm:block">Scroll</span>
        <div className="w-[1px] h-8 sm:h-12 bg-gradient-to-b from-brand-red to-transparent animate-pulse" />
      </motion.div>
    </section>
  );
}
