import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-dark relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-brand-red/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full lg:w-1/2"
        >
          <div className="relative aspect-[4/5] w-full max-w-md mx-auto lg:mx-0">
            <img 
              src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&w=1200&auto=format&fit=crop" 
              alt="Salon Interior Detail" 
              className="w-full h-full object-cover rounded-sm grayscale hover:grayscale-0 transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
            {/* Floating badge */}
            <div className="absolute -bottom-8 -right-8 bg-brand-black border border-white/10 p-6 md:p-8 rounded-sm shadow-2xl backdrop-blur-sm">
              <div className="text-center">
                <span className="block text-4xl font-serif text-brand-red mb-1">15+</span>
                <span className="text-xs uppercase tracking-widest text-zinc-400">Years of<br/>Excellence</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-1/2 z-10"
        >
          <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">The KULT Experience</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8 leading-tight">
            Where Craftsmanship <br/><span className="italic font-light text-zinc-400">Meets Luxury</span>
          </h2>
          <p className="text-zinc-300 font-light mb-6 text-lg leading-relaxed">
            Founded on the principles of immaculate detail and personalized service, KULT is more than a salon—it is an institution for those who demand the finest in personal grooming and beauty.
          </p>
          <p className="text-zinc-400 font-light mb-10 text-base leading-relaxed">
            Our minimalist, exclusive environment is designed to provide a tranquil escape from the bustling city. Each appointment is a curated experience, delivered by globally trained artisans using only the most prestigious products.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-10">
            <div>
              <h4 className="text-white font-serif text-xl mb-2">Exclusivity</h4>
              <p className="text-zinc-500 text-sm">Private suites and personalized attention for every guest.</p>
            </div>
            <div>
              <h4 className="text-white font-serif text-xl mb-2">Mastery</h4>
              <p className="text-zinc-500 text-sm">Award-winning stylists with decades of combined expertise.</p>
            </div>
          </div>

          <a href="#team" className="inline-flex items-center gap-2 text-sm uppercase tracking-widest text-white hover:text-brand-red transition-colors duration-300">
            Meet the Team
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
