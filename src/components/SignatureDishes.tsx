import { motion } from 'motion/react';

export function SignatureDishes() {
  const dishes = [
    {
      name: "Carne Asada",
      description: "Perfectly grilled, rich in flavor, and served with traditional sides.",
      image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=2069&auto=format&fit=crop"
    },
    {
      name: "Fajitas El Jimador",
      description: "Sizzling premium cuts, vibrant peppers, and warm handmade tortillas.",
      image: "https://images.unsplash.com/photo-1564834724105-918b73d1b9e0?q=80&w=1976&auto=format&fit=crop"
    },
    {
      name: "Shrimp Cocktail",
      description: "Fresh coastal shrimp in a zesty, chilled tomato and avocado broth.",
      image: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1974&auto=format&fit=crop"
    },
    {
      name: "Barbacoa Tacos",
      description: "Slow-roasted, tender beef wrapped in soft corn tortillas with fresh cilantro.",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Michelada",
      description: "A refreshing blend of Mexican cerveza, lime, and savory spices with a tajin rim.",
      image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=1974&auto=format&fit=crop"
    }
  ];

  return (
    <section id="menu" className="py-32 px-6 bg-charcoal">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold tracking-[0.3em] uppercase text-xs">Our Menu</span>
            <div className="w-12 h-[1px] bg-gold" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium"
          >
            Signature <span className="italic font-light text-off-white/80">Creations</span>
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {dishes.map((dish, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className={`group relative overflow-hidden ${index === 0 ? 'md:col-span-2 lg:col-span-2 aspect-[2/1]' : 'aspect-square'}`}
            >
              <div className="absolute inset-0 bg-charcoal/20 group-hover:bg-charcoal/40 transition-colors duration-500 z-10" />
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 z-20 p-8 flex flex-col justify-end bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-500">
                <h3 className="font-serif text-2xl lg:text-3xl text-gold mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  {dish.name}
                </h3>
                <p className="text-off-white/80 text-sm font-light leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 text-center"
        >
          <a
            href="#full-menu"
            className="inline-block px-8 py-4 border border-gold text-gold text-sm tracking-widest uppercase hover:bg-gold hover:text-charcoal transition-all duration-300"
          >
            View Full Menu
          </a>
        </motion.div>
      </div>
    </section>
  );
}
