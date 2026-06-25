import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Scissors, 
  Square, 
  Asterisk, 
  Circle, 
  Diamond, 
  Hexagon, 
  Target, 
  Play, 
  CircleDot, 
  Star,
  Layers
} from 'lucide-react';

const categories = ["ALL", "HAIR", "SKIN & FACIAL", "NAILS", "MAKEUP", "WAXING", "SPA", "PACKAGES"];

const servicesList = [
  { 
    category: "HAIR", 
    title: "Hair Cut & Style", 
    desc: "Precision cuts tailored to your face shape. Includes wash, cut, and blow-dry finish.", 
    price: "FROM ₹499", 
    icon: Scissors 
  },
  { 
    category: "HAIR", 
    title: "Color & Highlights", 
    desc: "Full color, balayage, and highlights using premium ammonia-free color lines.", 
    price: "FROM ₹1,499", 
    icon: Layers 
  },
  { 
    category: "HAIR", 
    title: "Hair Treatments", 
    desc: "Keratin, smoothing, spa, and deep conditioning treatments for all hair types.", 
    price: "FROM ₹999", 
    icon: Asterisk 
  },
  { 
    category: "SKIN & FACIAL", 
    title: "Skin Cleanup", 
    desc: "Deep pore cleansing and brightening facial suited for all skin types.", 
    price: "FROM ₹799", 
    icon: Circle 
  },
  { 
    category: "SKIN & FACIAL", 
    title: "HydraFacial", 
    desc: "Medical-grade hydration and extraction using the latest HydraFacial technology.", 
    price: "FROM ₹2,999", 
    icon: Diamond 
  },
  { 
    category: "NAILS", 
    title: "Manicure & Pedicure", 
    desc: "Classic, gel, or luxury manicure and pedicure with nail art on request.", 
    price: "FROM ₹399", 
    icon: Hexagon 
  },
  { 
    category: "MAKEUP", 
    title: "Bridal Makeup", 
    desc: "Full bridal glam including skin prep, airbrushing, and setting for all-day wear.", 
    price: "FROM ₹4,999", 
    icon: Target 
  },
  { 
    category: "MAKEUP", 
    title: "Party & Event Makeup", 
    desc: "Statement looks for sangeet, receptions, and special occasions.", 
    price: "FROM ₹1,299", 
    icon: CircleDot 
  },
  { 
    category: "WAXING", 
    title: "Full Body Waxing", 
    desc: "Rica, chocolate, or cold wax — smooth, long-lasting results with minimal irritation.", 
    price: "FROM ₹899", 
    icon: Play 
  },
  { 
    category: "SPA", 
    title: "Spa & Massage", 
    desc: "Swedish, deep tissue, or aromatherapy massage for full-body relaxation.", 
    price: "FROM ₹1,299", 
    icon: Circle 
  },
  { 
    category: "SKIN & FACIAL", 
    title: "Threading", 
    desc: "Precise brow threading and shaping by experienced specialists.", 
    price: "FROM ₹150", 
    icon: Hexagon 
  },
  { 
    category: "PACKAGES", 
    title: "Bridal Package", 
    desc: "Complete bridal prep: hair, makeup, skin, nails, and threading — all-inclusive.", 
    price: "FROM ₹8,999", 
    icon: Star 
  },
];

export default function Pricing() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  const filteredServices = servicesList.filter(service =>
    activeCategory === "ALL" || service.category === activeCategory
  );

  return (
    <section id="pricing" className="py-24 md:py-32 bg-brand-black">
      <div className="container mx-auto px-6 max-w-[1600px]">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-4 block">What We Offer</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6">
            Every Service. <span className="italic font-light text-zinc-400">Perfected.</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto mt-6 text-sm md:text-base font-light">
            From precision cuts to transformative spa rituals — crafted for every budget, every occasion.
          </p>
        </div>

        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center mx-auto mb-16 overflow-hidden">
          <div className="flex flex-wrap justify-center border border-white/10 rounded-sm divide-y md:divide-y-0 md:divide-x divide-white/10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 text-xs uppercase tracking-widest transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-red text-white'
                    : 'bg-transparent text-zinc-400 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 border-t border-l border-white/5"
        >
          <AnimatePresence mode="popLayout">
            {filteredServices.map((service) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="p-8 border-b border-r border-white/5 hover:bg-white/[0.02] transition-colors flex flex-col min-h-[320px] group cursor-default"
                >
                  <div className="w-10 h-10 border border-white/20 flex items-center justify-center mb-8 rounded-sm group-hover:border-brand-red transition-colors">
                    <Icon size={16} strokeWidth={1.5} className="text-brand-red" />
                  </div>
                  <h3 className="text-xl font-serif text-white mb-4 leading-snug">{service.title}</h3>
                  <p className="text-zinc-500 font-light text-sm leading-relaxed mb-8 flex-grow">
                    {service.desc}
                  </p>
                  <span className="text-brand-red text-[11px] font-semibold uppercase tracking-widest mt-auto block">
                    {service.price}
                  </span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
