import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Users, Building2 } from 'lucide-react';

const trustItems = [
  { icon: <Users className="w-3.5 h-3.5" />,     label: '75,000+ students trained' },
  { icon: <Building2 className="w-3.5 h-3.5" />, label: '900+ hiring partners' },
  { icon: <ShieldCheck className="w-3.5 h-3.5" />, label: '93% placement success' },
];

const CTA = () => (
  <section className="relative py-28 overflow-hidden bg-gradient-to-br from-violet-700 via-indigo-700 to-blue-800">
    {/* Grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

    {/* Glows */}
    <div className="absolute top-0 left-1/4 w-80 h-80 bg-violet-400/20 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl pointer-events-none" />

    {/* Floating dots */}
    {[...Array(5)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full bg-white/20"
        style={{ left: `${15 + i * 18}%`, top: `${22 + (i % 3) * 22}%` }}
        animate={{ y: [0, -18, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ repeat: Infinity, duration: 3.5 + i * 0.4, delay: i * 0.5, ease: 'easeInOut' }}
      />
    ))}

    <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black text-white leading-tight tracking-tight text-balance">
          Your Dream Placement<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
            Starts Right Here.
          </span>
        </h2>

        <p className="mt-6 text-blue-100 text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
          Join <span className="font-bold text-white">75,000+ students</span> who cracked TCS, Amazon, Goldman Sachs and 900+ other companies. Highest package secured: <span className="font-bold text-blue-200">₹26 LPA</span>.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#courses"
            aria-label="Start Practicing Today"
            className="group flex items-center justify-center gap-2 px-8 py-4 text-base font-bold bg-white text-violet-700 rounded-xl hover:bg-violet-50 hover:scale-[1.03] active:scale-[0.97] transition-all shadow-2xl shadow-black/20"
          >
            Start Practicing Today
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#courses"
            className="flex items-center justify-center px-8 py-4 text-base font-semibold text-white border-2 border-white/25 rounded-xl hover:bg-white/10 hover:border-white/50 hover:scale-[1.03] active:scale-[0.97] transition-all backdrop-blur-sm"
          >
            Browse Courses
          </a>
        </div>

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap gap-5 justify-center">
          {trustItems.map(({ icon, label }) => (
            <div key={label} className="flex items-center gap-2 text-sm text-violet-200">
              <span className="text-violet-300">{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTA;
