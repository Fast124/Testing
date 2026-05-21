import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../constants';
import { Dish } from '../types';
import { Box, Share2, Star, Eye } from 'lucide-react';
import { Dish3DModal } from './Dish3DModal';

interface MenuProps {
  isNight: boolean;
}

export function Menu({ isNight }: MenuProps) {
  const [selectedCategory, setSelectedCategory] = useState<Dish['category'] | 'All'>('All');
  const [activeDish, setActiveDish] = useState<Dish | null>(null);

  const categories: (Dish['category'] | 'All')[] = ['All', 'Appetizer', 'Main Course', 'Dessert'];

  const filteredItems = selectedCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === selectedCategory);

  const shareDish = (dish: Dish) => {
    if (navigator.share) {
      navigator.share({
        title: dish.name,
        text: `Check out this amazing ${dish.name} at The Test Kitchen!`,
        url: window.location.href,
      }).catch(console.error);
    } else {
      alert(`Sharing ${dish.name} - link copied to clipboard (simulated)`);
    }
  };

  return (
    <section id="menu" className="py-24 max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
        <div>
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4 block">
            THE ARCHIVE
          </span>
          <h2 className="text-6xl md:text-8xl font-display uppercase tracking-widest leading-[0.9]">
            SELECT<br />EDIT
          </h2>
        </div>

        <div className="flex flex-wrap gap-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all border ${
                selectedCategory === cat 
                  ? 'bg-black text-white dark:bg-white dark:text-black border-transparent shadow-2xl' 
                  : 'bg-transparent text-neutral-500 border-neutral-200 dark:border-neutral-800 hover:border-neutral-400'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-32">
        <AnimatePresence mode="popLayout">
          {filteredItems.map((dish, index) => (
            <motion.div
              layout
              key={dish.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[4/3] overflow-hidden relative rounded-[2.5rem] mb-10">
                <img 
                  src={dish.image} 
                  alt={dish.name}
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110 ease-out"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                   <button 
                    onClick={() => setActiveDish(dish)}
                    className="flex flex-col items-center gap-4 glass p-8 rounded-full transform translate-y-10 group-hover:translate-y-0 transition-all duration-700 ar-glow"
                  >
                    <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                      <Eye size={24} />
                    </div>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-white">INTERACT</span>
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-start mb-4 border-b border-neutral-200 dark:border-neutral-800 pb-6">
                  <div>
                    <h3 className="text-4xl font-display uppercase tracking-wider mb-2 group-hover:tracking-widest transition-all duration-500">{dish.name}</h3>
                    <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500">{dish.category}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-2xl font-mono text-neutral-400">{dish.price}</span>
                    <div className="flex gap-4 mt-4">
                      <button 
                        onClick={() => shareDish(dish)}
                        className="text-neutral-400 hover:text-black dark:hover:text-white transition-colors"
                      >
                        <Share2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed max-w-lg italic font-light">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {activeDish && (
          <Dish3DModal 
            dish={activeDish} 
            onClose={() => setActiveDish(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
}
