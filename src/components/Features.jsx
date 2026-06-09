import { features } from '../data/features';
import FeatureCard from './FeatureCard';

const Features = () => (
  <section id="features" className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
    {/* Subtle grid */}
    <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-40 pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-widest border border-violet-100 dark:border-violet-900/60">
          ✦ Platform Capabilities
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight text-balance">
          Everything You Need to{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            Get Placed
          </span>
        </h2>
        <p className="mt-4 text-base text-gray-500 dark:text-gray-400 leading-relaxed">
          A complete, integrated toolkit covering every stage of the campus placement journey —
          from aptitude prep to offer negotiation.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f, i) => (
          <FeatureCard key={f.title} {...f} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default Features;
