import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowLeft, CheckCircle, Clock, Users, Star, Award,
  BookOpen, Zap, Shield, ChevronDown, ChevronUp
} from 'lucide-react';
import Navbar from '../components/Navbar';
import ScrollProgress from '../components/ScrollProgress';

const curriculumMap = {
  'Generative AI for Placement': [
    { week: 'Week 1–2', title: 'Foundations of AI & LLMs', topics: ['What are LLMs?', 'GPT Architecture', 'Tokenization & Embeddings', 'OpenAI API Setup'] },
    { week: 'Week 3–4', title: 'Prompt Engineering', topics: ['Zero-shot & Few-shot', 'Chain-of-Thought', 'ReAct Prompting', 'System Prompts'] },
    { week: 'Week 5–6', title: 'RAG & Real Projects', topics: ['Vector Databases', 'RAG Pipelines', 'AI-Assisted Coding', 'Final Project'] },
  ],
  'DSA + System Design': [
    { week: 'Week 1–3', title: 'Core Data Structures', topics: ['Arrays & Strings', 'Linked Lists & Stacks', 'Trees & Graphs', 'Heaps & Tries'] },
    { week: 'Week 4–8', title: 'Algorithms & Patterns', topics: ['Sorting & Searching', 'Dynamic Programming', 'Greedy Algorithms', 'Sliding Window'] },
    { week: 'Week 9–12', title: 'System Design', topics: ['HLD & LLD', 'Scalability Patterns', 'Database Design', 'Mock Interviews'] },
  ],
  'Cloud & DevOps Essentials': [
    { week: 'Week 1–2', title: 'Cloud Fundamentals', topics: ['AWS Core Services', 'Azure Basics', 'IAM & Security', 'S3 & EC2'] },
    { week: 'Week 3–5', title: 'Containers & CI/CD', topics: ['Docker Deep Dive', 'Kubernetes Basics', 'Jenkins Pipelines', 'GitHub Actions'] },
    { week: 'Week 6–8', title: 'Production Practices', topics: ['Monitoring & Logging', 'Terraform IaC', 'Linux Essentials', 'Capstone Project'] },
  ],
  'Full Stack + Interview Prep': [
    { week: 'Week 1–4', title: 'Frontend Development', topics: ['React & Hooks', 'Tailwind CSS', 'State Management', 'REST API Integration'] },
    { week: 'Week 5–10', title: 'Backend & Databases', topics: ['Node.js & Express', 'MongoDB & Mongoose', 'JWT Auth', 'Deployment'] },
    { week: 'Week 11–16', title: 'Interview Preparation', topics: ['ATS Resume Building', 'LinkedIn Optimization', 'HR Interview Prep', 'Mock Technical Rounds'] },
  ],
};

const gradientMap = {
  'Generative AI for Placement': 'from-indigo-600 to-violet-600',
  'DSA + System Design': 'from-blue-600 to-indigo-600',
  'Cloud & DevOps Essentials': 'from-violet-600 to-blue-700',
  'Full Stack + Interview Prep': 'from-blue-700 to-indigo-800',
};

const emojiMap = {};

const EnrollPage = ({ course, onBack, darkMode, toggleDark }) => {
  const [openWeek, setOpenWeek] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', college: '' });
  const [submitted, setSubmitted] = useState(false);

  const curriculum = curriculumMap[course.title] || [];
  const gradient = gradientMap[course.title] || 'from-blue-600 to-indigo-600';

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.college) return;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      <ScrollProgress />
      <Navbar
        darkMode={darkMode}
        toggleDark={toggleDark}
        onNavigate={(href) => {
          onBack();
          setTimeout(() => {
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }}
      />

      {/* Hero banner */}
      <div className={`relative bg-gradient-to-br ${gradient} pt-10 pb-20 overflow-hidden`}>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium mb-8 transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Courses
          </button>

          <div className="flex flex-col lg:flex-row items-start gap-10">
            <div className="flex-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold mb-4">
                <Zap className="w-3 h-3" /> {course.badge}
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                {course.title}
              </h1>
              <p className="mt-4 text-white/80 text-base leading-relaxed max-w-xl">{course.description}</p>

              <div className="flex flex-wrap gap-4 mt-6">
                {[
                  { icon: <Clock className="w-4 h-4" />, text: course.duration },
                  { icon: <Users className="w-4 h-4" />, text: `${course.enrollCount} Enrolled` },
                  { icon: <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />, text: '4.9 Rating' },
                  { icon: <Award className="w-4 h-4" />, text: 'Certificate Included' },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-white/90 text-sm font-medium">
                    {item.icon} {item.text}
                  </div>
                ))}
              </div>

              {/* Hiring companies */}
              <div className="mt-6">
                <p className="text-white/60 text-xs uppercase tracking-widest mb-2">Hiring Companies</p>
                <div className="flex flex-wrap gap-2">
                  {course.companies.map(c => (
                    <span key={c} className="px-3 py-1 bg-white/15 text-white text-xs font-semibold rounded-full border border-white/20">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Left: Curriculum */}
          <div className="lg:col-span-2 space-y-6">

            {/* What you'll learn */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            >
              <h2 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-500" /> What You'll Learn
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" /> {t}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Curriculum accordion */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 overflow-hidden"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            >
              <div className="p-6 border-b border-gray-100 dark:border-gray-800">
                <h2 className="text-lg font-black text-gray-900 dark:text-white flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-blue-500" /> Course Curriculum
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{curriculum.length} modules • {course.duration}</p>
              </div>

              {curriculum.map((mod, i) => (
                <div key={i} className="border-b border-gray-100 dark:border-gray-800 last:border-0">
                  <button
                    onClick={() => setOpenWeek(openWeek === i ? -1 : i)}
                    className="w-full flex items-center justify-between px-6 py-4 hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                  >
                    <div className="flex items-center gap-3 text-left">
                      <span className={`w-8 h-8 rounded-lg bg-gradient-to-br ${gradient} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                        {i + 1}
                      </span>
                      <div>
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{mod.title}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">{mod.week}</p>
                      </div>
                    </div>
                    {openWeek === i
                      ? <ChevronUp className="w-4 h-4 text-gray-400 flex-shrink-0" />
                      : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />
                    }
                  </button>
                  {openWeek === i && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="px-6 pb-4"
                    >
                      <ul className="space-y-2 ml-11">
                        {mod.topics.map((t, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0" /> {t}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Includes */}
            <motion.div
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 p-6"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
            >
              <h2 className="text-lg font-black text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Shield className="w-5 h-5 text-blue-500" /> This Course Includes
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'HD Video Lectures',
                  'Practice Assignments',
                  'Completion Certificate',
                  'Doubt Resolution Support',
                  'Performance Analytics',
                  'Lifetime Access',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                    <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" /> {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Enrollment form */}
          <div className="lg:col-span-1">
            <motion.div
              className="sticky top-20 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}
            >
              <div className={`h-2 bg-gradient-to-r ${gradient}`} />
              <div className="p-6">
                {!submitted ? (
                  <>
                    <div className="text-center mb-5">
                      <p className="text-2xl font-black text-gray-900 dark:text-white">Enroll for Free</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">No credit card required</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {[
                        { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Arjun Sharma' },
                        { label: 'Email Address', key: 'email', type: 'email', placeholder: 'arjun@example.com' },
                        { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+91 98765 43210' },
                        { label: 'College / University', key: 'college', type: 'text', placeholder: 'VIT University' },
                      ].map(({ label, key, type, placeholder }) => (
                        <div key={key}>
                          <label className="block text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1.5">{label}</label>
                          <input
                            type={type}
                            placeholder={placeholder}
                            value={form[key]}
                            onChange={e => setForm({ ...form, [key]: e.target.value })}
                            required
                            className="w-full px-3.5 py-2.5 text-sm bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>
                      ))}

                      <button
                        type="submit"
                        className={`w-full py-3 text-sm font-bold text-white bg-gradient-to-r ${gradient} rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg mt-2`}
                      >
                        Confirm Enrollment →
                      </button>
                    </form>

                    <p className="text-center text-xs text-gray-400 dark:text-gray-500 mt-4">
                      Your information is safe with us
                    </p>
                  </>
                ) : (
                  <motion.div
                    className="text-center py-6"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/40 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-emerald-500" />
                    </div>
                    <h3 className="text-lg font-black text-gray-900 dark:text-white">You're Enrolled!</h3>
                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      Welcome, <span className="font-semibold text-gray-800 dark:text-white">{form.name}</span>! You're all set.
                    </p>
                    <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                      A confirmation has been sent to <span className="font-medium">{form.email}</span>
                    </p>
                    <div className={`mt-4 p-3 rounded-xl bg-gradient-to-r ${gradient} text-white text-xs font-semibold`}>
                      {course.title}
                    </div>
                    <button
                      onClick={onBack}
                      className="mt-4 text-sm text-blue-600 dark:text-blue-400 hover:underline font-medium"
                    >
                      ← Explore More Courses
                    </button>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnrollPage;
