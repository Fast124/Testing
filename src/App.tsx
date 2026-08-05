/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Menu } from './components/Menu';
import { ReviewSection } from './components/ReviewSection';
import { ContactMap } from './components/ContactMap';

export default function App() {
  const [isNight, setIsNight] = useState(false);

  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNight]);

  return (
    <div className={`min-h-screen transition-colors duration-500 ${isNight ? 'bg-[#0A0A0A] text-white' : 'bg-neutral-50 text-neutral-900'} font-sans`}>
      <Navbar isNight={isNight} onToggleNight={() => setIsNight(!isNight)} />
      
      <main>
        <Hero isNight={isNight} />
        <Menu isNight={isNight} />
        <ReviewSection />
        <ContactMap />
      </main>

      <footer className="py-12 border-t border-neutral-200 dark:border-neutral-800 text-center">
        <p className="text-sm text-neutral-500">© 2024 DEMO. ALL RIGHTS RESERVED.</p>
        <p className="text-xs mt-2 opacity-50 tracking-widest font-mono">ESTD 2024</p>
      </footer>
    </div>
  );
}
