import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Clock, ArrowRight, Flame, Sparkles, BookOpen, Rocket } from 'lucide-react';
import { courses } from '../data/courses';
import { quizData } from '../data/quizData';
import { CourseCardSkeleton } from './Skeleton';
import QuizModal from './QuizModal';

const badgeConfig = {
  'Most Popular':  { cls: 'bg-blue-600 text-white',   icon: <Flame className="w-3 h-3" /> },
  'Trending':      { cls: 'bg-indigo-600 text-white', icon: <Sparkles className="w-3 h-3" /> },
  'New':           { cls: 'bg-violet-600 text-white', icon: <BookOpen className="w-3 h-3" /> },
  'Comprehensive': { cls: 'bg-blue-800 text-white',   icon: <Rocket className="w-3 h-3" /> },
};

const gradients = [
  'from-indigo-600 to-violet-600',
  'from-blue-600 to-indigo-600',
  'from-violet-600 to-blue-700',
  'from-blue-700 to-indigo-800',
];

const Courses = () => {
  const [loading, setLoading] = useState(true);
  const [activeQuiz, setActiveQuiz] = useState(null); // { course, quizQuestions, color }

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(t);
  }, []);

  const openQuiz = (course, i) => {
    const data = quizData[course.title];
    if (!data) return;
    setActiveQuiz({ course, quizQuestions: data.questions, color: gradients[i] });
  };

  return (
    <>
      <section id="courses" className="relative py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/50 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-widest border border-purple-100 dark:border-purple-900">
              ✦ Learning Paths
            </span>
            <h2 className="mt-4 text-4xl sm:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              Courses & Test Series
            </h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-base">
              Structured tracks designed to take you from zero to placement-ready.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {loading
              ? [...Array(4)].map((_, i) => <CourseCardSkeleton key={i} />)
              : courses.map((course, i) => {
                  const badge = badgeConfig[course.badge];
                  return (
                    <motion.article
                      key={course.title}
                      className="group flex flex-col bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: i * 0.1 }}
                    >
                      {/* Gradient header — no emoji icon */}
                      <div className={`relative h-32 bg-gradient-to-br ${gradients[i]} overflow-hidden`}>
                        <div className="absolute inset-0 bg-black/10" />
                        <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-white/10" />
                        <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-white/10" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <h3 className="relative text-center text-white font-black text-sm px-4 leading-snug drop-shadow">
                            {course.title}
                          </h3>
                        </div>
                        <span className={`absolute top-3 right-3 flex items-center gap-1 text-[10px] font-bold px-2 py-1 rounded-full ${badge.cls}`}>
                          {badge.icon} {course.badge}
                        </span>
                      </div>

                      <div className="flex flex-col flex-1 p-5">
                        <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed flex-1">
                          {course.description}
                        </p>

                        {/* Topic chips */}
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {course.topics.slice(0, 2).map(t => (
                            <span key={t} className="text-[10px] font-medium px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 rounded-full">
                              {t}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                          <div className="flex items-center gap-1.5 text-xs text-gray-400">
                            <Clock className="w-3.5 h-3.5" /> {course.duration}
                          </div>
                          <button
                            onClick={() => openQuiz(course, i)}
                            aria-label={`Enroll in ${course.title}`}
                            className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-bold text-white bg-gradient-to-r ${gradients[i]} rounded-lg hover:scale-105 active:scale-95 transition-all shadow-sm`}
                          >
                            Enroll <ArrowRight className="w-3 h-3" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  );
                })
            }
          </div>
        </div>
      </section>

      {/* Quiz Modal */}
      <AnimatePresence>
        {activeQuiz && (
          <QuizModal
            course={activeQuiz.course}
            quizQuestions={activeQuiz.quizQuestions}
            color={activeQuiz.color}
            onClose={() => setActiveQuiz(null)}
            onEnroll={() => {
              setActiveQuiz(null);
            }}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Courses;
