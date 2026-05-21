import { MapPin, Phone, Mail, Clock, ExternalLink } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactMap() {
  const googleMapsUrl = "https://www.google.com/maps/search/Eastern+Hossain+Pallabi";

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4 block">
            FIND OUR KITCHEN
          </span>
          <h2 className="text-6xl md:text-[100px] font-display uppercase tracking-tighter leading-[0.8] mb-16">
            STAY IN<br />TOUCH
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4">Location</h4>
              <p className="text-lg font-medium leading-tight">Eastern Hossain,<br />Pallabi 2nd phrase</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4">Reservations</h4>
              <p className="text-lg font-medium">+88 01534611199</p>
              <p className="text-[10px] text-neutral-400 mt-2 italic">Open: 5PM — 12AM</p>
            </div>
          </div>
        </div>

        <div className="relative group w-full">
          <motion.div 
            whileHover={{ scale: 0.98 }}
            transition={{ duration: 0.4 }}
            className="aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border border-neutral-200 dark:border-neutral-800 shadow-2xl relative cursor-pointer location-map ar-glow"
            onClick={() => window.open(googleMapsUrl, '_blank')}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex flex-col justify-center items-center text-center p-12">
              <div className="w-16 h-16 rounded-full glass flex items-center justify-center mb-6">
                <MapPin size={32} />
              </div>
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">Eastern Hossain, Pallabi</p>
              <p className="text-[10px] opacity-60 uppercase tracking-widest font-mono">OPEN IN GOOGLE MAPS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
