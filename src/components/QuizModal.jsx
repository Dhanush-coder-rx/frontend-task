import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, XCircle, ArrowRight, Trophy, RotateCcw } from 'lucide-react';

const QuizModal = ({ course, quizQuestions, color, onClose, onEnroll }) => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const q = quizQuestions[current];
  const isLast = current === quizQuestions.length - 1;
  const score = answers.filter((a, i) => a === quizQuestions[i].answer).length;

  const handleSelect = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === null) return;
    const newAnswers = [...answers, selected];
    if (isLast) {
      setAnswers(newAnswers);
      setSubmitted(true);
    } else {
      setAnswers(newAnswers);
      setSelected(null);
      setCurrent(c => c + 1);
    }
  };

  const handleRetry = () => {
    setCurrent(0);
    setSelected(null);
    setAnswers([]);
    setSubmitted(false);
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);
  const passed = percentage >= 60;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <motion.div
        className="relative w-full max-w-lg bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {/* Header bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${color}`} />

        <div className="p-6">
          {/* Close */}
          <button
            onClick={onClose}
            aria-label="Close quiz"
            className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
              >
                {/* Progress */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Quick Assessment
                  </span>
                  <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                    {current + 1} / {quizQuestions.length}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 bg-gray-100 dark:bg-gray-800 rounded-full mb-6 overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-500`}
                    style={{ width: `${((current + 1) / quizQuestions.length) * 100}%` }}
                  />
                </div>

                <h3 className="text-base font-bold text-gray-900 dark:text-white mb-5 leading-snug">
                  {q.q}
                </h3>

                <div className="space-y-3">
                  {q.options.map((opt, idx) => {
                    let cls = 'border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/30 cursor-pointer';
                    if (selected !== null) {
                      if (idx === q.answer) cls = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400';
                      else if (idx === selected && selected !== q.answer) cls = 'border-red-400 bg-red-50 dark:bg-red-950/30 text-red-600 dark:text-red-400';
                      else cls = 'border-gray-200 dark:border-gray-700 text-gray-400 opacity-60';
                    }
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(idx)}
                        className={`w-full text-left px-4 py-3 rounded-xl border text-sm font-medium transition-all duration-200 flex items-center gap-3 ${cls}`}
                      >
                        <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-xs font-bold flex-shrink-0">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        {opt}
                        {selected !== null && idx === q.answer && <CheckCircle className="w-4 h-4 ml-auto text-emerald-500 flex-shrink-0" />}
                        {selected !== null && idx === selected && selected !== q.answer && <XCircle className="w-4 h-4 ml-auto text-red-400 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>

                <button
                  onClick={handleNext}
                  disabled={selected === null}
                  className={`mt-6 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${color} transition-all ${selected === null ? 'opacity-40 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-95 shadow-lg'}`}
                >
                  {isLast ? 'Submit & See Score' : 'Next Question'} <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="result"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="text-center"
              >
                {/* Score circle */}
                <div className={`mx-auto w-24 h-24 rounded-full bg-gradient-to-br ${color} flex flex-col items-center justify-center shadow-xl mb-4`}>
                  <Trophy className="w-6 h-6 text-white mb-0.5" />
                  <span className="text-2xl font-black text-white leading-none">{score}/{quizQuestions.length}</span>
                </div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white">
                  {passed ? 'Well Done!' : 'Keep Practising!'}
                </h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  You scored <span className="font-bold text-gray-800 dark:text-white">{percentage}%</span>
                  {passed ? ' — You\'re ready to enroll!' : ' — Review the topics and try again.'}
                </p>

                {/* Answer review */}
                <div className="mt-5 space-y-2 text-left max-h-48 overflow-y-auto pr-1">
                  {quizQuestions.map((ques, i) => {
                    const correct = answers[i] === ques.answer;
                    return (
                      <div key={i} className={`flex items-start gap-2 p-3 rounded-xl text-xs ${correct ? 'bg-emerald-50 dark:bg-emerald-950/30' : 'bg-red-50 dark:bg-red-950/20'}`}>
                        {correct
                          ? <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          : <XCircle className="w-3.5 h-3.5 text-red-400 flex-shrink-0 mt-0.5" />
                        }
                        <div>
                          <p className="font-semibold text-gray-800 dark:text-gray-200">{ques.q}</p>
                          <p className={`mt-0.5 ${correct ? 'text-emerald-600 dark:text-emerald-400' : 'text-red-500'}`}>
                            Correct: {ques.options[ques.answer]}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="flex gap-3 mt-5">
                  <button
                    onClick={handleRetry}
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
                  >
                    <RotateCcw className="w-4 h-4" /> Retry
                  </button>
                  <button
                    onClick={onEnroll}
                    className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r ${color} hover:scale-[1.02] active:scale-95 transition-all shadow-md`}
                  >
                    Enroll Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default QuizModal;
