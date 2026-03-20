import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 w-full h-full"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-charcoal/60 to-charcoal z-10" />
        <img
          src="https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop"
          alt="Sizzling Fajitas"
          className="w-full h-full object-cover scale-105 animate-[slow-zoom_20s_ease-in-out_infinite_alternate]"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto mt-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gold tracking-[0.3em] uppercase text-sm md:text-base mb-6"
        >
          Marble Falls, Texas
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-medium leading-[1.1] mb-8"
        >
          An Elevated <br />
          <span className="italic font-light text-off-white/90">Mexican Dining</span> <br />
          Experience
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl text-off-white/70 max-w-2xl mx-auto mb-12 font-light"
        >
          Authentic flavors, handcrafted dishes, and a warm atmosphere in the heart of Marble Falls.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="#reservations"
            className="w-full sm:w-auto px-8 py-4 bg-gold text-charcoal text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Reserve a Table
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto px-8 py-4 border border-white/20 text-off-white text-sm tracking-widest uppercase hover:bg-white/5 transition-colors duration-300"
          >
            Explore Menu
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-off-white/50 mb-4">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div
            animate={{ y: ['-100%', '100%'] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
            className="absolute top-0 left-0 w-full h-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
