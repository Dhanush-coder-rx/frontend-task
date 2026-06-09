import { motion } from 'framer-motion';

const FeatureCard = ({ icon: Icon, title, description, index }) => (
  <motion.article
    className="group relative p-6 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800/80 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 hover:border-violet-200 dark:hover:border-violet-800/60 transition-all duration-300 cursor-default overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
  >
    {/* Hover gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-violet-50/0 to-indigo-50/0 group-hover:from-violet-50/50 group-hover:to-indigo-50/40 dark:group-hover:from-violet-950/20 dark:group-hover:to-indigo-950/10 rounded-2xl transition-all duration-300" />

    {/* Number watermark */}
    <span className="absolute top-4 right-4 text-[2.5rem] font-black text-gray-100 dark:text-gray-800 select-none group-hover:text-violet-100 dark:group-hover:text-violet-950/70 transition-colors leading-none">
      {String(index + 1).padStart(2, '0')}
    </span>

    <div className="relative">
      {/* Icon */}
      <div className="w-11 h-11 rounded-xl bg-violet-50 dark:bg-violet-950/50 border border-violet-100 dark:border-violet-900/50 flex items-center justify-center mb-5 group-hover:bg-violet-600 group-hover:border-violet-600 transition-all duration-300">
        <Icon className="w-5 h-5 text-violet-600 dark:text-violet-400 group-hover:text-white transition-colors duration-300" />
      </div>

      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 group-hover:text-violet-700 dark:group-hover:text-violet-300 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{description}</p>
    </div>
  </motion.article>
);

export default FeatureCard;
