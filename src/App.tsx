/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Story } from './components/Story';
import { SocialProof } from './components/SocialProof';
import { SignatureDishes } from './components/SignatureDishes';
import { Experience } from './components/Experience';
import { Offer } from './components/Offer';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-charcoal text-off-white font-sans selection:bg-gold selection:text-charcoal">
      <Navbar />
      <main>
        <Hero />
        <Story />
        <SocialProof />
        <SignatureDishes />
        <Experience />
        <Offer />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
