import { motion } from 'motion/react';
import { Sun, Moon } from 'lucide-react';

interface ThemeSwitchProps {
  isNight: boolean;
  onToggleNight: () => void;
  className?: string;
}

export function ThemeSwitch({ isNight, onToggleNight, className = '' }: ThemeSwitchProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Switch Button Container */}
      <button
        onClick={onToggleNight}
        aria-label="Toggle light and dark mode"
        className="relative flex items-center justify-between w-28 h-10 rounded-full p-1 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 shadow-inner cursor-pointer select-none focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white focus:ring-offset-2 dark:focus:ring-offset-neutral-950 transition-colors duration-500"
        id="theme-switch-btn"
      >
        {/* Dynamic sliding background tracker */}
        <motion.div
          className="absolute top-1 left-1 bottom-1 w-[52px] rounded-full bg-white dark:bg-neutral-800 shadow-md border border-neutral-200/20 dark:border-neutral-700/30 flex items-center justify-center z-10"
          animate={{
            x: isNight ? 'calc(112px - 52px - 8px)' : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 24,
          }}
          id="theme-switch-thumb"
        >
          <motion.div
            animate={{ rotate: isNight ? 180 : 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center justify-center"
          >
            {isNight ? (
              <Moon size={14} className="text-amber-200 fill-amber-200/20" />
            ) : (
              <Sun size={14} className="text-amber-500 fill-amber-500/20" />
            )}
          </motion.div>
          <span className="ml-1 text-[8px] font-bold tracking-widest uppercase text-neutral-800 dark:text-neutral-200">
            {isNight ? 'DUSK' : 'DAWN'}
          </span>
        </motion.div>

        {/* Dawn / Sun side indicator (static background text/icon) */}
        <div className="flex items-center justify-center gap-1 w-1/2 h-full z-0 pl-1.5 opacity-60 dark:opacity-30 transition-opacity duration-300">
          <Sun size={10} className="text-neutral-600 dark:text-neutral-400" />
          <span className="text-[8px] font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
            DAWN
          </span>
        </div>

        {/* Dusk / Moon side indicator (static background text/icon) */}
        <div className="flex items-center justify-center gap-1 w-1/2 h-full z-0 pr-1.5 opacity-30 dark:opacity-60 transition-opacity duration-300">
          <Moon size={10} className="text-neutral-600 dark:text-neutral-400" />
          <span className="text-[8px] font-bold tracking-widest uppercase text-neutral-600 dark:text-neutral-400">
            DUSK
          </span>
        </div>
      </button>
    </div>
  );
}
