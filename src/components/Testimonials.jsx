import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../data/testimonials';
import { TestimonialSkeleton } from './Skeleton';
import { BadgeCheck } from 'lucide-react';

const avatarGradients = [
  'from-blue-500 to-indigo-600',
  'from-indigo-500 to-violet-600',
  'from-violet-500 to-blue-600',
];

const Testimonials = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="testimonials" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="absolute inset-0 bg-radial-hero pointer-events-none opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/30 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest border border-blue-100 dark:border-blue-900/50">
            ⭐ Real Placement Stories
          </span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Students Who{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
              Cracked It
            </span>
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Real offers. Real companies. Real packages — from students across India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading
            ? [...Array(3)].map((_, i) => <TestimonialSkeleton key={i} />)
            : testimonials.map((t, i) => (
              <motion.article
                key={t.name}
                className="relative flex flex-col p-7 bg-gray-50 dark:bg-gray-800/50 rounded-2xl border border-gray-100 dark:border-gray-700/50 hover:shadow-card-hover hover:border-violet-200 dark:hover:border-violet-800/50 hover:-translate-y-1.5 transition-all duration-300 overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-indigo-50/0 group-hover:from-violet-50/40 group-hover:to-indigo-50/30 dark:group-hover:from-violet-950/15 dark:group-hover:to-indigo-950/10 rounded-2xl transition-all duration-300" />

                {/* Quote mark */}
                <div className="relative text-6xl font-black text-violet-200 dark:text-violet-900 leading-none mb-2 select-none">"</div>

                {/* Stars */}
                <div className="flex gap-0.5 mb-4" aria-label="5 star rating">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} className="w-4 h-4 fill-blue-400" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="relative text-sm text-gray-600 dark:text-gray-300 leading-relaxed flex-1 italic">
                  {t.story}
                </p>

                <div className="relative flex items-center gap-3.5 mt-6 pt-5 border-t border-gray-200/60 dark:border-gray-700/40">
                  <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarGradients[i]} flex items-center justify-center text-white text-sm font-black shadow-md flex-shrink-0`}>
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="text-sm font-bold text-gray-900 dark:text-white truncate">{t.name}</p>
                      <BadgeCheck className="w-4 h-4 text-violet-500 flex-shrink-0" />
                    </div>
                    <p className="text-xs text-violet-600 dark:text-violet-400 font-semibold truncate">{t.role}</p>
                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mt-0.5 truncate">{t.college}</p>
                  </div>
                </div>
              </motion.article>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
