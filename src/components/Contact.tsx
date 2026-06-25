import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <section id="book" className="py-24 bg-brand-black">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-brand-red uppercase tracking-[0.2em] text-xs font-semibold mb-2 block">Reservations</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Book Your Visit</h2>
            <p className="text-zinc-400 font-light text-sm md:text-base leading-relaxed mb-12">
              Reserve your time in our sanctuary. For exclusive private suite bookings or special requests, please contact our concierge directly.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">First Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Last Name</label>
                  <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Email Address</label>
                  <input type="email" className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
                <div>
                  <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Phone</label>
                  <input type="tel" className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Desired Service</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-white focus:outline-none focus:border-brand-red transition-colors appearance-none">
                  <option>Hair Styling & Cut</option>
                  <option>Color & Treatment</option>
                  <option>Makeup & Skincare</option>
                  <option>Nail Care & Spa</option>
                  <option>Kult Premium Package</option>
                </select>
              </div>
              <div>
                <label className="block text-zinc-500 text-xs uppercase tracking-widest mb-2">Preferred Date & Time</label>
                <input type="datetime-local" className="w-full bg-brand-dark border border-white/10 rounded-sm px-4 py-3 text-zinc-400 focus:outline-none focus:border-brand-red transition-colors [color-scheme:dark]" />
              </div>
              <button type="button" className="bg-brand-red hover:bg-brand-red-hover text-white w-full py-4 rounded-sm text-sm uppercase tracking-widest transition-colors duration-300 mt-4">
                Submit Request
              </button>
            </form>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2 flex flex-col justify-center"
          >
            <div className="bg-brand-dark p-10 md:p-14 rounded-sm border border-white/5 h-full">
              <h3 className="text-2xl font-serif text-white mb-10">Salon Details</h3>
              
              <div className="space-y-8">
                <div className="flex items-start">
                  <MapPin size={20} className="text-brand-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Location</h4>
                    <p className="text-zinc-400 font-light text-sm leading-relaxed">
                      142 Luxury Avenue<br/>
                      Metropolis District<br/>
                      NY 10019
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={20} className="text-brand-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Contact</h4>
                    <p className="text-zinc-400 font-light text-sm">
                      +1 (555) 123-4567<br/>
                      concierge@kultsalon.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={20} className="text-brand-red mr-4 mt-1 shrink-0" />
                  <div>
                    <h4 className="text-white text-sm uppercase tracking-widest mb-1">Hours</h4>
                    <div className="text-zinc-400 font-light text-sm space-y-1">
                      <p className="flex justify-between w-48"><span>Mon - Fri</span> <span>9am - 8pm</span></p>
                      <p className="flex justify-between w-48"><span>Saturday</span> <span>10am - 6pm</span></p>
                      <p className="flex justify-between w-48"><span>Sunday</span> <span className="text-brand-red">Closed</span></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-10 border-t border-white/10">
                <h4 className="text-white text-sm uppercase tracking-widest mb-4">Valet Parking</h4>
                <p className="text-zinc-400 font-light text-sm">
                  Complimentary valet parking is available for all guests at the main entrance.
                </p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
