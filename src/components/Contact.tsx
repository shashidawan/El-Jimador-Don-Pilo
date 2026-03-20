import { motion } from 'motion/react';
import { MapPin, Phone, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-charcoal relative border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1px] bg-gold" />
            <span className="text-gold tracking-[0.3em] uppercase text-xs">Visit Us</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-medium leading-tight mb-12">
            Join us in <br />
            <span className="italic font-light text-off-white/80">Marble Falls</span> today.
          </h2>
          
          <div className="space-y-10">
            <div className="flex items-start gap-6 group">
              <MapPin className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-off-white tracking-widest uppercase text-sm mb-2">Location</h3>
                <p className="text-off-white/60 font-light leading-relaxed">
                  123 Main Street<br />
                  Marble Falls, TX 78654
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <Phone className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-off-white tracking-widest uppercase text-sm mb-2">Reservations</h3>
                <a href="tel:+18305550199" className="text-off-white/60 font-light hover:text-gold transition-colors">
                  (830) 555-0199
                </a>
              </div>
            </div>
            
            <div className="flex items-start gap-6 group">
              <Clock className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-off-white tracking-widest uppercase text-sm mb-2">Hours</h3>
                <p className="text-off-white/60 font-light leading-relaxed">
                  Monday - Thursday: 7:00 AM - 9:00 PM<br />
                  Friday - Saturday: 7:00 AM - 10:00 PM<br />
                  Sunday: 7:00 AM - 8:00 PM
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative h-[400px] lg:h-full min-h-[500px] w-full bg-charcoal-light border border-white/5 overflow-hidden group"
        >
          {/* In a real app, this would be a Google Maps iframe */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-luminosity transition-opacity duration-700 group-hover:opacity-60" />
          <div className="absolute inset-0 bg-charcoal/40" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-charcoal/80 backdrop-blur-md border border-gold/30 p-8 text-center max-w-xs">
              <MapPin className="w-8 h-8 text-gold mx-auto mb-4" />
              <p className="text-off-white font-serif text-xl mb-2">El Jimador Don Pilo</p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold tracking-widest uppercase text-xs hover:text-gold-light transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
}
