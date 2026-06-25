import { motion } from 'motion/react';

const images = [
  'https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop', // Salon interior 2
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?q=80&w=800&auto=format&fit=crop', // Styling detail
  'https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=800&auto=format&fit=crop', // Makeup detail
  'https://images.unsplash.com/photo-1519699047748-de8e457a634e?q=80&w=800&auto=format&fit=crop', // Women styling
  'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?q=80&w=800&auto=format&fit=crop', // Men styling
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=800&auto=format&fit=crop', // Spa detail
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-brand-dark">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Visual Anthology</h2>
          <div className="w-16 h-[1px] bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${
                index === 0 || index === 3 ? 'md:col-span-2 md:row-span-2' : ''
              } aspect-square md:aspect-auto ${index === 0 || index === 3 ? 'md:aspect-square' : ''}`}
            >
              <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img 
                src={src} 
                alt={`Gallery visual ${index + 1}`} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <span className="bg-brand-black/80 backdrop-blur-sm border border-white/10 text-white px-6 py-2 rounded-sm text-xs uppercase tracking-widest">
                  View
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a href="#" className="inline-block border-b border-zinc-600 hover:border-brand-red text-zinc-400 hover:text-white text-sm uppercase tracking-widest pb-1 transition-all duration-300">
            View Full Gallery
          </a>
        </div>
      </div>
    </section>
  );
}
