import { motion } from 'motion/react';
import hairImg from '../assets/images/salon_service_hair_1782389900266.jpg';
import makeupImg from '../assets/images/salon_service_makeup_1782389915121.jpg';
import spaImg from '../assets/images/salon_service_spa_1782389930226.jpg';

const services = [
  {
    id: 'hair',
    title: 'Master Styling',
    description: 'Precision cuts, color transformations, and bespoke styling tailored to your unique profile.',
    image: hairImg,
  },
  {
    id: 'makeup',
    title: 'Makeup & Skin',
    description: 'Flawless makeup artistry and premium skincare treatments using exclusive luxury products.',
    image: makeupImg,
  },
  {
    id: 'spa',
    title: 'Nail & Spa',
    description: 'Rejuvenating spa rituals and meticulous nail care in a tranquil, private atmosphere.',
    image: spaImg,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16 md:mb-24">
          <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Our Offerings</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">Premium Services</h2>
          <div className="w-16 h-[1px] bg-brand-red mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-sm aspect-[3/4] mb-6">
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-all duration-500 z-10" />
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  referrerPolicy="no-referrer"
                />
                {/* Decorative border */}
                <div className="absolute inset-4 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-serif text-white mb-3 group-hover:text-brand-red transition-colors duration-300">{service.title}</h3>
                <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-sm mx-auto">
                  {service.description}
                </p>
                <div className="mt-4 flex items-center justify-center opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-xs uppercase tracking-widest text-white border-b border-brand-red pb-1">Discover</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
