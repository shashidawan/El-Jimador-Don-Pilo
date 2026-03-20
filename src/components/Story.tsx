import { motion } from 'motion/react';

export function Story() {
  return (
    <section id="story" className="py-32 px-6 bg-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative h-[600px] lg:h-[800px] w-full"
        >
          <img
            src="https://images.unsplash.com/photo-1565299507177-b0ac66763828?q=80&w=1922&auto=format&fit=crop"
            alt="Chef preparing authentic Mexican cuisine"
            className="w-full h-full object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
          
          {/* Floating Element */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="absolute -bottom-10 -right-10 lg:-right-20 bg-deep-green p-8 lg:p-12 border border-gold/20 max-w-xs backdrop-blur-md"
          >
            <p className="font-serif text-2xl lg:text-3xl text-gold italic mb-4">
              "Every dish tells a story of our heritage."
            </p>
            <p className="text-sm tracking-widest uppercase text-off-white/60">
              — The Chef
            </p>
          </motion.div>
        </motion.div>

        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold tracking-[0.3em] uppercase text-xs">Our Heritage</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8">
            A Tradition of <br />
            <span className="italic font-light text-off-white/80">Flavor & Family</span>
          </h2>
          
          <div className="space-y-6 text-off-white/70 font-light leading-relaxed text-lg">
            <p>
              Rooted in the rich culinary traditions of Mexico, El Jimador Don Pilo was born from a passion for authentic recipes and family-style gatherings. We believe that a meal is more than just food—it is an experience meant to be shared.
            </p>
            <p>
              For years, we have proudly served the Marble Falls community, sourcing the finest quality ingredients to craft dishes that honor our heritage. From hand-pressed tortillas to slow-roasted meats, every plate is a testament to our dedication to excellence.
            </p>
            <p>
              Step into our dining room and feel the warmth of true Mexican hospitality. Whether you're here for a casual lunch or a celebratory dinner, you are family.
            </p>
          </div>
          
          <div className="mt-12">
            <a
              href="#reservations"
              className="inline-flex items-center gap-4 text-gold tracking-widest uppercase text-sm hover:text-gold-light transition-colors group"
            >
              Discover Our Menu
              <span className="w-8 h-[1px] bg-gold group-hover:w-12 transition-all duration-300" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
