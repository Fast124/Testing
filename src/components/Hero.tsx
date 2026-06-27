import { motion } from 'motion/react';
import { Box } from 'lucide-react';

interface HeroProps {
  isNight: boolean;
}

export function Hero({ isNight }: HeroProps) {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className={`absolute inset-0 z-10 ${isNight ? 'bg-black/60' : 'bg-black/40'}`} />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=2000&auto=format&fit=crop" 
          alt="Restaurant Hero"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="relative z-20 text-center text-white px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <h1 className="font-display text-[80px] md:text-[180px] leading-[0.8] mb-12 select-none pointer-events-none uppercase tracking-tighter">
            TES<br />TING
          </h1>
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-center gap-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <p className="max-w-xs text-xs md:text-sm text-neutral-400 uppercase tracking-[0.2em] font-light leading-relaxed text-center">
              High-definition culinary physics. An atmospheric exploration of taste.
            </p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <div className="w-px h-12 bg-white/30" />
        <span className="text-[8px] uppercase tracking-widest font-mono">SCROLL</span>
      </motion.div>
    </section>
  );
}
