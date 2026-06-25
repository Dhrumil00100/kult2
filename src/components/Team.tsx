import { motion } from 'motion/react';
import stylistAvatar from '../assets/images/expert_stylist_avatar_1782389949578.jpg';

const team = [
  {
    name: 'Julian Sterling',
    role: 'Creative Director',
    image: stylistAvatar,
  },
  {
    name: 'Elena Vitti',
    role: 'Master Colorist',
    image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Marcus Thorne',
    role: 'Senior Barber',
    image: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?q=80&w=800&auto=format&fit=crop',
  },
  {
    name: 'Sophia Laurent',
    role: 'Esthetician',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop',
  }
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Our Artisans</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white">Expert Stylists</h2>
          </div>
          <p className="text-zinc-400 font-light max-w-md text-sm mt-6 md:mt-0">
            A curated collective of the industry's most sought-after professionals, dedicated to elevating your personal aesthetic.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group text-center"
            >
              <div className="relative overflow-hidden aspect-[3/4] mb-6 rounded-sm w-full mx-auto max-w-[280px]">
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black/90 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-300"/>
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Social links reveal on hover */}
                <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center space-x-4 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <a href="#" className="text-white hover:text-brand-red transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                  <a href="#" className="text-white hover:text-brand-red transition-colors"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                </div>
              </div>
              <h3 className="text-xl font-serif text-white mb-1">{member.name}</h3>
              <p className="text-brand-red text-xs uppercase tracking-widest">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
