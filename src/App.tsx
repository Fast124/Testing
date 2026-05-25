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

  useEffect(() => {
    const closeBtn = document.getElementById('ar-close-button');
    const handleClose = () => {
      const arPopup = document.getElementById('ar-popup');
      if (arPopup) {
        arPopup.style.display = 'none';
        const iframe = arPopup.querySelector('iframe');
        if (iframe) {
          iframe.src = 'about:blank';
        }
      }
    };
    if (closeBtn) {
      closeBtn.addEventListener('click', handleClose);
    }
    return () => {
      if (closeBtn) {
        closeBtn.removeEventListener('click', handleClose);
      }
    };
  }, []);

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
        <p className="text-sm text-neutral-500">© 2024 THE TEST KITCHEN. ALL RIGHTS RESERVED.</p>
        <p className="text-xs mt-2 opacity-50 tracking-widest font-mono">ESTD 2024</p>
      </footer>

      {/* AR Modal Popup */}
      <div 
        id="ar-popup" 
        style={{ display: 'none', position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 99999 }}
        className="bg-black"
      >
        <iframe 
          title="Pizza AR View"
          src="about:blank"
          className="w-full h-full border-0"
          allow="camera"
        />
        <button 
          id="ar-close-button"
          type="button"
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform hover:scale-105 active:scale-95 cursor-pointer z-[100000]"
          aria-label="Close AR View"
        >
          <span className="text-xl font-bold font-sans">✕</span>
        </button>
      </div>
    </div>
  );
}
