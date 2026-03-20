import { motion } from 'motion/react';

export function Offer() {
  return (
    <section className="py-32 px-6 bg-charcoal relative overflow-hidden flex items-center justify-center">
      {/* Background Image with Parallax effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1544148103-0773bf10d330?q=80&w=2070&auto=format&fit=crop"
          alt="Restaurant Ambiance"
          className="w-full h-full object-cover opacity-30"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="border border-gold/30 bg-charcoal/40 backdrop-blur-md p-12 md:p-20"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-gold mb-6">
            Enjoy 10% Off Your First Visit
          </h2>
          <p className="text-off-white/80 font-light text-lg mb-10 tracking-wide">
            A small welcome from our kitchen to you.
          </p>
          <a
            href="#reservations"
            className="inline-block px-10 py-4 bg-gold text-charcoal text-sm tracking-widest uppercase hover:bg-gold-light transition-colors duration-300"
          >
            Reserve Your Table
          </a>
        </motion.div>
      </div>
    </section>
  );
}
