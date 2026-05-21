import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { REVIEWS } from '../constants';
import { Review } from '../types';
import { Star, Send, User } from 'lucide-react';

export function ReviewSection() {
  const [reviews, setReviews] = useState<Review[]>(REVIEWS);
  const [newComment, setNewComment] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newName, setNewName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment || !newName) return;

    const review: Review = {
      id: Date.now().toString(),
      user: newName,
      rating: newRating,
      comment: newComment,
      date: new Date().toISOString().split('T')[0],
    };

    setReviews([review, ...reviews]);
    setNewComment('');
    setNewName('');
    setNewRating(5);
  };

  return (
    <section id="reviews" className="py-24 bg-neutral-50 dark:bg-neutral-950 border-y border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
             <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-neutral-500 mb-4 block">
              GUEST VOICES
            </span>
            <h2 className="text-5xl md:text-7xl font-display uppercase tracking-widest leading-[0.9] mb-12">
              WORD OF<br />MOUTH
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-12 leading-relaxed uppercase text-xs tracking-widest font-light">
              We value every interaction. Share your experience with our interactive gastronomy.
            </p>

            <form onSubmit={handleSubmit} className="p-8 bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-200 dark:border-neutral-800 shadow-xl">
              <h3 className="text-lg font-bold mb-6">Write a Review</h3>
              
              <div className="space-y-4">
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-2 block">Name</label>
                  <input 
                    type="text"
                    value={newName}
                    onChange={(e) => setNewName(e.target.value)}
                    className="w-full bg-neutral-100 dark:bg-black p-3 rounded-xl focus:ring-2 ring-neutral-200 dark:ring-neutral-700 outline-none transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                   <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-2 block">Rating</label>
                   <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button 
                        key={star}
                        type="button"
                        onClick={() => setNewRating(star)}
                        className={`transition-colors ${newRating >= star ? 'text-yellow-500' : 'text-neutral-300'}`}
                      >
                        <Star size={20} fill={newRating >= star ? "currentColor" : "none"} />
                      </button>
                    ))}
                   </div>
                </div>

                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-neutral-500 mb-2 block">Comment</label>
                  <textarea 
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    className="w-full bg-neutral-100 dark:bg-black p-3 rounded-xl focus:ring-2 ring-neutral-200 dark:ring-neutral-700 outline-none transition-all resize-none"
                    placeholder="Tell us about your visit..."
                  />
                </div>

                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-black dark:bg-white text-white dark:text-black py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:opacity-80 transition-opacity"
                >
                  <Send size={14} />
                  Post Review
                </button>
              </div>
            </form>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <AnimatePresence mode="popLayout">
              {reviews.map((review) => (
                <motion.div
                  key={review.id}
                  layout
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="p-8 bg-white dark:bg-neutral-900 rounded-[2rem] border border-neutral-100 dark:border-neutral-800"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-neutral-100 dark:bg-black flex items-center justify-center text-neutral-500">
                        <User size={24} />
                      </div>
                      <div>
                        <h4 className="font-bold">{review.user}</h4>
                        <span className="text-[10px] text-neutral-400 font-mono uppercase">{review.date}</span>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                         <Star 
                           key={i} 
                           size={12} 
                           className={i < review.rating ? 'text-yellow-500 fill-yellow-500' : 'text-neutral-200'} 
                         />
                      ))}
                    </div>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed italic">
                    "{review.comment}"
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
