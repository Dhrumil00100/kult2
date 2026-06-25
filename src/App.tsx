/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Team from './components/Team';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-brand-black w-full overflow-x-hidden font-sans">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
