import { MapPin, Phone, Mail, Clock, ExternalLink, Instagram, Globe, ArrowUpRight } from 'lucide-react';
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
              <a 
                href="mailto:hello@zyvflo.com"
                className="text-lg font-medium text-neutral-900 dark:text-neutral-100 hover:text-[#ff4500] dark:hover:text-[#ff4500] transition-colors"
              >
                hello@zyvflo.com
              </a>
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

          {/* 3 Call to Action Buttons */}
          <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-neutral-800">
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 mb-6">
              CONNECT WITH US
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {/* Button 1: Instagram */}
              <a
                href="https://www.instagram.com/zyvflo?igsh=MW5wZWVsdGZzNHJiZA=="
                target="_blank"
                rel="noopener noreferrer"
                id="cta-btn-instagram"
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#ff4500] dark:hover:border-[#ff4500] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 text-[#ff4500] flex items-center justify-center group-hover:bg-[#ff4500] group-hover:text-white transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider font-bold text-neutral-400">Instagram</span>
                    <span className="block text-sm font-semibold text-neutral-900 dark:text-white">@zyvflo</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-[#ff4500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Button 2: Email */}
              <a
                href="mailto:hello@zyvflo.com"
                id="cta-btn-email"
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#ff4500] dark:hover:border-[#ff4500] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 text-[#ff4500] flex items-center justify-center group-hover:bg-[#ff4500] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider font-bold text-neutral-400">Email</span>
                    <span className="block text-sm font-semibold text-neutral-900 dark:text-white">hello@zyvflo.com</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-[#ff4500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>

              {/* Button 3: Website */}
              <a
                href="https://zyvflo.com"
                target="_blank"
                rel="noopener noreferrer"
                id="cta-btn-website"
                className="flex items-center justify-between gap-3 px-5 py-4 rounded-2xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 hover:border-[#ff4500] dark:hover:border-[#ff4500] hover:shadow-lg transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ff4500]/10 text-[#ff4500] flex items-center justify-center group-hover:bg-[#ff4500] group-hover:text-white transition-colors">
                    <Globe size={20} />
                  </div>
                  <div className="text-left">
                    <span className="block text-[9px] uppercase tracking-wider font-bold text-neutral-400">Website</span>
                    <span className="block text-sm font-semibold text-neutral-900 dark:text-white">zyvflo.com</span>
                  </div>
                </div>
                <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-[#ff4500] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
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
