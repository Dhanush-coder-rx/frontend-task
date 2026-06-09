import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle, TrendingUp, Users, Award, BookOpen } from 'lucide-react';

const floatingCards = [
  {
    icon: <Award className="w-4 h-4 text-blue-500" />,
    title: 'Offer Received',
    sub: 'Amazon SDE-1 — ₹26 LPA',
    delay: 0,
    pos: 'top-2 right-0 translate-x-1/3',
  },
  {
    icon: <TrendingUp className="w-4 h-4 text-indigo-500" />,
    title: '93% Success Rate',
    sub: '2024 placement batch',
    delay: 0.5,
    pos: 'top-1/2 -left-4 -translate-x-1/2 -translate-y-1/2',
  },
  {
    icon: <Users className="w-4 h-4 text-violet-500" />,
    title: '75,000+ Students',
    sub: 'Trained across India',
    delay: 1,
    pos: 'bottom-4 right-0 translate-x-1/3',
  },
];

const placementOffers = [
  { company: 'Amazon',       role: 'SDE-1',            pkg: '₹26 LPA', color: 'bg-blue-400' },
  { company: 'TCS',          role: 'Systems Engineer', pkg: '₹7 LPA',  color: 'bg-indigo-400' },
  { company: 'Goldman Sachs',role: 'Analyst',          pkg: '₹18 LPA', color: 'bg-violet-400' },
];

const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12 } } },
  item: { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } },
};

const Hero = () => (
  <section className="relative overflow-hidden bg-white dark:bg-gray-950 pt-14 pb-28">

    {/* Grid bg */}
    <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-60 pointer-events-none" />

    {/* Radial glow top */}
    <div className="absolute inset-0 bg-radial-hero pointer-events-none" />

    {/* Violet orb left */}
    <div className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-violet-400/10 dark:bg-violet-600/10 blur-3xl pointer-events-none" />
    {/* Blue orb right */}
    <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full bg-indigo-400/10 dark:bg-indigo-600/10 blur-3xl pointer-events-none" />

    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">

        {/* ── LEFT ── */}
        <motion.div
          className="flex-1 text-center lg:text-left"
          variants={stagger.container}
          initial="hidden"
          animate="show"
        >
          {/* Eyebrow badge */}
          <motion.div variants={stagger.item} className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-7 rounded-full bg-violet-50 dark:bg-violet-950/50 border border-violet-200/70 dark:border-violet-800/60 text-violet-700 dark:text-violet-300 text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            India's Campus Placement Intelligence Platform
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="text-[2.75rem] sm:text-6xl lg:text-[4.25rem] font-black text-gray-900 dark:text-white leading-[1.08] tracking-tight text-balance"
          >
            Crack Every{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-blue-600">
                Campus Drive
              </span>
              {/* Underline SVG */}
              <svg className="absolute -bottom-1.5 left-0 w-full overflow-visible hidden sm:block" viewBox="0 0 320 10" fill="none" preserveAspectRatio="none">
                <path d="M2 7 Q80 1 160 7 Q240 13 318 7" stroke="url(#heroUL)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                <defs>
                  <linearGradient id="heroUL" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%"   stopColor="#7c3aed"/>
                    <stop offset="100%" stopColor="#2563eb"/>
                  </linearGradient>
                </defs>
              </svg>
            </span>
            <br />Before Graduation.
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={stagger.item}
            className="mt-7 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
          >
            Structured prep for TCS NQT, Infosys InfyTQ, Amazon OA, and 900+ company hiring patterns —
            with AI mock tests, DSA problem sets, and ATS-ready resumes.
          </motion.p>

          {/* Pill */}
          <motion.div variants={stagger.item} className="mt-5 flex items-center gap-2 justify-center lg:justify-start">
            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
              900+ hiring partner companies
            </span>
          </motion.div>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href="#courses"
              aria-label="Start Preparing Now"
              className="group flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-bold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:to-indigo-700 hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-violet-500/30"
            >
              Start Preparing Now
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#features"
              className="flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-xl hover:border-violet-300 dark:hover:border-violet-700 hover:text-violet-600 dark:hover:text-violet-400 hover:shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all duration-200"
            >
              <BookOpen className="w-4 h-4" /> Explore Features
            </a>
          </motion.div>
        </motion.div>

        {/* ── RIGHT: Illustration card ── */}
        <motion.div
          className="flex-1 relative flex justify-center items-center min-h-[400px] w-full"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Glow behind card */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-64 h-64 rounded-full bg-violet-500/20 blur-3xl" />
          </div>

          {/* Central card */}
          <div className="relative w-72 h-72 lg:w-80 lg:h-80">
            {/* Shadow layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 rounded-3xl rotate-3 opacity-80 blur-sm" />
            {/* Main card */}
            <div className="absolute inset-0 bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-700 rounded-3xl overflow-hidden">
              {/* Inner pattern */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

              {/* Content */}
              <div className="relative h-full flex flex-col items-center justify-center gap-4 p-7">
                <div className="text-5xl animate-float">🎓</div>
                <div className="text-center">
                  <p className="text-white font-black text-xl tracking-tight">Placement Ready</p>
                  <p className="text-violet-200 text-xs mt-1 font-medium">TCS · Amazon · Goldman Sachs</p>
                </div>

                {/* Offer rows */}
                <div className="w-full space-y-2 mt-1">
                  {placementOffers.map(({ company, role, pkg, color }) => (
                    <div key={company} className="flex items-center justify-between bg-white/10 backdrop-blur-sm rounded-xl px-3 py-2 border border-white/10">
                      <div className="flex items-center gap-2">
                        <span className={`w-1.5 h-1.5 rounded-full ${color} flex-shrink-0`} />
                        <span className="text-white text-xs font-semibold">{company}</span>
                      </div>
                      <span className="text-violet-200 text-[10px] hidden sm:block">{role}</span>
                      <span className="text-blue-200 text-xs font-bold">{pkg}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Floating chips */}
          {floatingCards.map((card, i) => (
            <motion.div
              key={i}
              className={`absolute ${card.pos} bg-white dark:bg-gray-900 rounded-2xl px-3.5 py-2.5 shadow-xl border border-gray-100 dark:border-gray-800 min-w-[148px] z-10`}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: card.delay, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-gray-50 dark:bg-gray-800 flex items-center justify-center flex-shrink-0">
                  {card.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold text-gray-900 dark:text-white leading-tight">{card.title}</p>
                  <p className="text-[9px] text-gray-500 dark:text-gray-400 mt-0.5">{card.sub}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);

export default Hero;
