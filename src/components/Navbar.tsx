import { motion } from 'motion/react';
import { Menu as MenuIcon, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeSwitch } from './ThemeSwitch';

interface NavbarProps {
  isNight: boolean;
  onToggleNight: () => void;
}

export function Navbar({ isNight, onToggleNight }: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md bg-white/70 dark:bg-black/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <div className="flex items-center gap-12">
          <button 
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-display tracking-widest hover:opacity-70 transition-opacity text-neutral-900 dark:text-white"
          >
            DEMO
          </button>
          
          <div className="hidden md:flex items-center gap-10">
            {['menu', 'reviews', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="text-[10px] uppercase tracking-[0.3em] font-bold text-neutral-500 hover:text-black dark:hover:text-white transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6 md:gap-8">
          <ThemeSwitch isNight={isNight} onToggleNight={onToggleNight} />
          
          <button 
            className="md:hidden p-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 w-full bg-white dark:bg-black border-b border-neutral-200 dark:border-neutral-800 p-6 flex flex-col gap-4"
        >
          {['menu', 'reviews', 'contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-lg uppercase tracking-widest font-bold text-left text-neutral-900 dark:text-white hover:text-neutral-600 dark:hover:text-neutral-300 transition-colors"
            >
              {item}
            </button>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
