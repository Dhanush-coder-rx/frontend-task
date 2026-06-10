import { motion } from 'framer-motion';
import { X, ShieldCheck, CreditCard, Lock } from 'lucide-react';

const PaymentModal = ({ course, color, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
    <motion.div
      className="relative w-full max-w-sm bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      <div className={`h-2 w-full bg-gradient-to-r ${color}`} />

      <div className="p-6">
        <button
          onClick={onClose}
          aria-label="Close payment"
          className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-1">
          <CreditCard className="w-4 h-4 text-indigo-500" />
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-500">Secure Checkout</span>
        </div>

        <h3 className="text-lg font-black text-gray-900 dark:text-white mt-1">{course.title}</h3>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{course.duration} · Full Access</p>

        <div className={`mt-4 rounded-xl bg-gradient-to-r ${color} p-4 text-white flex items-end justify-between`}>
          <div>
            <p className="text-xs opacity-80">One-time Payment</p>
            <p className="text-3xl font-black mt-0.5">₹{course.price ?? '1,999'}</p>
          </div>
          <span className="text-xs bg-white/20 px-2 py-1 rounded-lg font-semibold">EMI available</span>
        </div>

        <ul className="mt-4 space-y-2 text-xs text-gray-600 dark:text-gray-400">
          {['Lifetime access to all materials', 'Mock tests & quizzes', 'Certificate of completion', '1-on-1 doubt sessions'].map(f => (
            <li key={f} className="flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {f}
            </li>
          ))}
        </ul>

        <button
          onClick={onClose}
          className={`mt-5 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${color} hover:scale-[1.02] active:scale-95 transition-all shadow-lg`}
        >
          <Lock className="w-4 h-4" /> Pay Now (Demo)
        </button>

        <p className="mt-3 text-center text-[10px] text-gray-400 flex items-center justify-center gap-1">
          <Lock className="w-3 h-3" /> 256-bit SSL · This is a demo — no real payment
        </p>
      </div>
    </motion.div>
  </div>
);

export default PaymentModal;
