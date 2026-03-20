import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Story', href: '#story' },
    { name: 'Menu', href: '#menu' },
    { name: 'Experience', href: '#experience' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-charcoal/80 backdrop-blur-md border-b border-white/5 py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex flex-col items-center">
          <span className="font-serif text-2xl tracking-widest text-gold uppercase">
            El Jimador
          </span>
          <span className="text-[10px] tracking-[0.3em] text-off-white/70 uppercase">
            Don Pilo
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm tracking-widest uppercase text-off-white/80 hover:text-gold transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#reservations"
            className="px-6 py-2 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            Reserve
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-off-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-charcoal/95 backdrop-blur-lg border-b border-white/5 py-6 px-6 flex flex-col space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg tracking-widest uppercase text-off-white/80 hover:text-gold transition-colors text-center"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setIsMobileMenuOpen(false)}
              className="px-6 py-3 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300 text-center"
            >
              Reserve a Table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
