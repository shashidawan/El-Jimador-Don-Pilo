export function Footer() {
  return (
    <footer className="bg-deep-green py-12 px-6 border-t border-white/5 text-center">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <a href="#" className="flex flex-col items-center mb-8">
          <span className="font-serif text-2xl tracking-widest text-gold uppercase">
            El Jimador
          </span>
          <span className="text-[10px] tracking-[0.3em] text-off-white/70 uppercase">
            Don Pilo
          </span>
        </a>
        
        <div className="flex gap-8 mb-12">
          <a href="#" className="text-off-white/50 hover:text-gold transition-colors text-sm tracking-widest uppercase">Instagram</a>
          <a href="#" className="text-off-white/50 hover:text-gold transition-colors text-sm tracking-widest uppercase">Facebook</a>
          <a href="#" className="text-off-white/50 hover:text-gold transition-colors text-sm tracking-widest uppercase">Yelp</a>
        </div>
        
        <p className="text-off-white/30 text-xs tracking-wider">
          &copy; {new Date().getFullYear()} El Jimador Don Pilo. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
