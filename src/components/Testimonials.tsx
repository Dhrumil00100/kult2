import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Eleanor Vance",
    text: "An unparalleled experience. The attention to detail and the serene atmosphere make every visit an absolute luxury. Truly the finest establishment in the city.",
    role: "Fashion Editor"
  },
  {
    name: "Jameson Wright",
    text: "Immaculate precision. The styling is consistently flawless, and the private suites provide the perfect environment for a premium grooming session.",
    role: "Creative Director"
  },
  {
    name: "Isabella Rossi",
    text: "A sanctuary of beauty. The products used are exceptional, and the expertise of the staff is evident in every touch. I leave feeling completely revitalized.",
    role: "Architect"
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-black relative overflow-hidden">
      {/* Decorative large quote mark */}
      <div className="absolute top-10 left-10 opacity-5 pointer-events-none">
        <Quote size={240} className="text-white" />
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Clientele</span>
          <h2 className="text-4xl font-serif text-white">Words of Praise</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-brand-dark p-8 md:p-10 border border-white/5 relative group hover:border-white/20 transition-colors duration-500 rounded-sm"
            >
              <Quote size={32} className="text-brand-red mb-6 opacity-50 group-hover:opacity-100 transition-opacity" />
              <p className="text-zinc-300 font-light text-sm md:text-base leading-relaxed mb-8 italic">
                "{t.text}"
              </p>
              <div>
                <h4 className="text-white font-serif tracking-wide">{t.name}</h4>
                <span className="text-zinc-500 text-xs uppercase tracking-widest">{t.role}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
