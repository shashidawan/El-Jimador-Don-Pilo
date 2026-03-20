import { motion } from 'motion/react';
import { GlassWater, Users, Trophy } from 'lucide-react';

export function Experience() {
  const features = [
    {
      icon: <GlassWater className="w-8 h-8 text-gold" />,
      title: "Great Cocktails & Happy Hour",
      description: "Handcrafted margaritas, premium tequilas, and signature drinks in a vibrant setting."
    },
    {
      icon: <Trophy className="w-8 h-8 text-gold" />,
      title: "Sports-Friendly Atmosphere",
      description: "Catch the big game with friends while enjoying the best Mexican cuisine in town."
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: "Family Gatherings & Celebrations",
      description: "Spacious seating and a welcoming environment perfect for your special moments."
    }
  ];

  return (
    <section id="experience" className="py-32 px-6 bg-deep-green relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1934&auto=format&fit=crop"
          alt="Restaurant Atmosphere"
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-green via-deep-green/90 to-deep-green" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-gold" />
              <span className="text-gold tracking-[0.3em] uppercase text-xs">The Vibe</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-8">
              More Than a Meal — <br />
              <span className="italic font-light text-off-white/80">An Experience</span>
            </h2>
            
            <p className="text-off-white/70 font-light leading-relaxed text-lg mb-12">
              This is where you go for a night out. Whether you're unwinding after a long day, celebrating a milestone, or simply craving the vibrant energy of a lively dining room, El Jimador Don Pilo offers an atmosphere that elevates every occasion.
            </p>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 mt-1">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl text-off-white mb-2">{feature.title}</h3>
                    <p className="text-off-white/60 font-light text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Collage */}
          <div className="relative h-[600px] lg:h-[800px] hidden md:block">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop"
              alt="Cocktails"
              className="absolute top-0 right-0 w-2/3 h-[60%] object-cover border border-white/10 shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <motion.img
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.3 }}
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2070&auto=format&fit=crop"
              alt="Dining Room"
              className="absolute bottom-0 left-0 w-2/3 h-[50%] object-cover border border-white/10 shadow-2xl z-10"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
