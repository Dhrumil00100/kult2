export default function Footer() {
  return (
    <footer className="bg-brand-black pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="text-3xl font-serif font-semibold tracking-wider text-white inline-block mb-6">
              KULT<span className="text-brand-red">.</span>
            </a>
            <p className="text-zinc-500 font-light text-sm leading-relaxed max-w-xs">
              The premier destination for luxury grooming, bespoke styling, and exclusive beauty rituals.
            </p>
          </div>
          
          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Services</a></li>
              <li><a href="#about" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Our Story</a></li>
              <li><a href="#team" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">The Artisans</a></li>
              <li><a href="#gallery" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Policies</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">Cancellation Policy</a></li>
              <li><a href="#" className="text-zinc-500 hover:text-white transition-colors text-sm font-light">COVID-19 Safety</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white text-xs uppercase tracking-widest font-semibold mb-6">Newsletter</h4>
            <p className="text-zinc-500 font-light text-sm mb-4">
              Subscribe for exclusive offers and styling editorials.
            </p>
            <div className="flex border-b border-zinc-700 focus-within:border-brand-red transition-colors pb-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-none w-full text-white text-sm focus:outline-none placeholder-zinc-600"
              />
              <button className="text-brand-red uppercase text-xs tracking-widest font-medium hover:text-white transition-colors ml-4">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-600 text-xs font-light">
            &copy; {new Date().getFullYear()} KULT Luxury Salon. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Instagram</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Facebook</a>
            <a href="#" className="text-zinc-600 hover:text-white transition-colors">Pinterest</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
