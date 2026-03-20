import { motion } from 'motion/react';

export function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1960&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536510233921-8e5043fce771?q=80&w=2017&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
  ];

  return (
    <section id="gallery" className="py-24 bg-charcoal">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 md:gap-2">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8 }}
            className="relative aspect-square overflow-hidden group"
          >
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
              <span className="text-gold tracking-widest uppercase text-xs opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                View
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
