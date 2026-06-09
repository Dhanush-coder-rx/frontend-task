import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { stats } from '../data/stats';

const palette = [
  {
    gradient: 'from-blue-600 to-indigo-600',
    glow:     'bg-blue-500/10',
    text:     'text-blue-600 dark:text-blue-400',
    border:   'border-blue-100 dark:border-blue-900/40',
  },
  {
    gradient: 'from-indigo-500 to-violet-600',
    glow:     'bg-indigo-500/10',
    text:     'text-indigo-600 dark:text-indigo-400',
    border:   'border-indigo-100 dark:border-indigo-900/40',
  },
  {
    gradient: 'from-violet-500 to-blue-600',
    glow:     'bg-violet-500/10',
    text:     'text-violet-600 dark:text-violet-400',
    border:   'border-violet-100 dark:border-violet-900/40',
  },
  {
    gradient: 'from-blue-500 to-violet-500',
    glow:     'bg-blue-400/10',
    text:     'text-blue-600 dark:text-blue-400',
    border:   'border-blue-100 dark:border-blue-900/40',
  },
];

const StatCard = ({ value, suffix, label, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const p = palette[index];

  return (
    <motion.div
      ref={ref}
      className={`relative flex flex-col items-center text-center p-8 rounded-2xl bg-white dark:bg-gray-900 border ${p.border} shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 overflow-hidden group`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Background glow */}
      <div className={`absolute -top-10 -right-10 w-32 h-32 rounded-full ${p.glow} blur-2xl opacity-60 group-hover:opacity-100 transition-opacity`} />

      {/* Number */}
      <span className={`text-5xl sm:text-6xl font-black ${p.text} tabular-nums leading-none`}>
        {inView ? <CountUp end={value} duration={2.2} separator="," /> : '0'}
        <span className="text-3xl sm:text-4xl">{suffix}</span>
      </span>

      <p className="mt-3 text-sm font-semibold text-gray-600 dark:text-gray-300">{label}</p>

      {/* Bottom accent line */}
      <div className={`mt-4 h-1 w-10 rounded-full bg-gradient-to-r ${p.gradient} group-hover:w-16 transition-all duration-300`} />
    </motion.div>
  );
};

const Stats = () => (
  <section id="stats" className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
    <div className="absolute inset-0 bg-radial-hero pointer-events-none opacity-50" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14 max-w-2xl mx-auto">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest border border-indigo-100 dark:border-indigo-900/60">
          ✦ By The Numbers
        </span>
        <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
          Real Numbers.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            Real Results.
          </span>
        </h2>
        <p className="mt-3 text-gray-500 dark:text-gray-400">
          Verified outcomes from our 2024 placement batch across India.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {stats.map((s, i) => <StatCard key={s.label} {...s} index={i} />)}
      </div>
    </div>
  </section>
);

export default Stats;
