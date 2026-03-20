import { motion } from 'motion/react';
import { Star } from 'lucide-react';

export function SocialProof() {
  const testimonials = [
    {
      quote: "An unforgettable dining experience. Every dish was exceptional.",
      author: "Sarah M.",
      role: "Local Guide"
    },
    {
      quote: "The atmosphere, the food, the service—everything feels premium.",
      author: "James T.",
      role: "Food Critic"
    },
    {
      quote: "Easily one of the best Mexican restaurants in Texas.",
      author: "Elena R.",
      role: "Frequent Guest"
    }
  ];

  return (
    <section className="py-24 bg-deep-green border-y border-white/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center gap-1 mb-6"
          >
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-6 h-6 ${i < 4 ? 'text-gold fill-gold' : 'text-gold/30 fill-gold/30'}`} />
            ))}
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-off-white/80 tracking-widest uppercase text-sm"
          >
            <span className="text-gold font-medium text-lg">4.1 ★</span> rating from 1,000+ guests
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="flex flex-col items-center text-center space-y-6"
            >
              <p className="font-serif text-xl lg:text-2xl italic text-off-white/90 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="text-gold tracking-widest uppercase text-xs mb-1">{testimonial.author}</p>
                <p className="text-off-white/40 text-xs uppercase tracking-wider">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
