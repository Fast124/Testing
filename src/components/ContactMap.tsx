import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export function ContactMap() {
  const googleMapsUrl = "https://www.google.com/maps/search/New+York+New+York";

  return (
    <section id="contact" className="py-24 max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4 block">
            FIND OUR KITCHEN
          </span>
          <h2 className="text-6xl md:text-[100px] font-display uppercase tracking-tighter leading-[0.8] mb-16 text-neutral-900 dark:text-white">
            STAY IN<br />TOUCH
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4">Location</h4>
              <p className="text-lg font-medium leading-tight text-neutral-900 dark:text-neutral-100">USA New York<br />New York</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4">Reservations</h4>
              <p className="text-lg font-medium text-neutral-900 dark:text-neutral-100">+880 1911-966382</p>
              <p className="text-[10px] text-neutral-400 mt-2 italic">Open: 5PM — 12AM</p>
            </div>

            <div>
              <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-4">Social</h4>
              <a 
                href="https://www.instagram.com/zyvflo?igsh=MW5wZWVsdGZzNHJiZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 group text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#ff4500] dark:hover:text-[#ff4500] transition-colors"
                id="instagram-link"
              >
                <Instagram size={20} className="text-[#ff4500] group-hover:scale-110 transition-transform" />
                <span>@zyvflo</span>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-neutral-400" />
              </a>
              <p className="text-[10px] text-neutral-400 mt-2">Follow our 3D creations</p>
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
              <p className="text-xs font-bold tracking-[0.3em] uppercase mb-2">USA New York New York</p>
              <p className="text-[10px] opacity-60 uppercase tracking-widest font-mono">OPEN IN GOOGLE MAPS</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
