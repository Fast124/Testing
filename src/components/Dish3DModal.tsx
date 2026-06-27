import { motion } from 'motion/react';
import { X, Box, Smartphone, Rotate3d } from 'lucide-react';
import { Dish } from '../types';
import '@google/model-viewer';

interface Dish3DModalProps {
  dish: Dish;
  onClose: () => void;
}

const ModelViewer = 'model-viewer' as any;

export function Dish3DModal({ dish, onClose }: Dish3DModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-6 sm:p-12 overflow-hidden"
    >
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-2xl"
        onClick={onClose}
      />
      
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="relative w-full max-w-5xl aspect-video sm:aspect-square md:aspect-video bg-neutral-900 rounded-[2rem] overflow-hidden border border-white/10 flex flex-col md:flex-row"
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 z-[70] p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
        >
          <X size={20} />
        </button>

        {/* 3D Viewer Container */}
        <div className="flex-1 relative bg-black">
          <ModelViewer
            src={dish.modelUrl}
            ar
            ar-modes="webxr scene-viewer quick-look"
            camera-controls
            poster={dish.image}
            shadow-intensity="1"
            auto-rotate
            class="w-full h-full"
            style={{ width: '100%', height: '100%' }}
          >
            <button 
              slot="ar-button" 
              className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase tracking-widest shadow-2xl"
            >
              <Smartphone size={16} />
              View in your space (AR)
            </button>
          </ModelViewer>
        </div>

        <div className="w-full md:w-80 p-8 flex flex-col justify-center bg-neutral-900 text-white">
          <span className="text-[10px] uppercase tracking-widest font-mono text-neutral-500 mb-2 block">
            {dish.category}
          </span>
          <h3 className="text-3xl font-bold mb-4">{dish.name}</h3>
        </div>
      </motion.div>
    </motion.div>
  );
}
