import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, ChevronRight, Zap } from 'lucide-react';

const navLinks = [
  { label: 'Features',     href: '#features' },
  { label: 'Courses',      href: '#courses' },
  { label: 'Results',      href: '#stats' },
  { label: 'Testimonials', href: '#testimonials' },
];

const Navbar = ({ darkMode, toggleDark, onNavigate }) => {
  const [open, setOpen]       = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        darkMode
          ? 'bg-gray-950/95 backdrop-blur-2xl border-b border-white/[0.06] shadow-sm shadow-black/20'
          : scrolled
            ? 'bg-white/90 backdrop-blur-2xl shadow-sm shadow-black/5 border-b border-gray-200/60'
            : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16"
        aria-label="Main navigation"
      >
        {/* Logo */}
        <a href="/#" className="flex items-center gap-2.5 group flex-shrink-0">
          <div className="relative w-8 h-8 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-glow-sm group-hover:scale-110 transition-transform duration-200">
            <Zap className="w-4 h-4 text-white" />
          </div>
          <span className="font-extrabold text-[17px] tracking-tight text-gray-900 dark:text-white">
            Crack<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">The</span>Campus
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map(link => (
            <li key={link.label}>
              {onNavigate ? (
                <button
                  onClick={() => onNavigate(link.href)}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </button>
              ) : (
                <a
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:bg-violet-50 dark:hover:bg-violet-950/40 rounded-lg transition-all duration-200"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        {/* Right */}
        <div className="hidden md:flex items-center gap-2">
          <button
            onClick={toggleDark}
            aria-label="Toggle dark mode"
            className="p-2 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <a
            href="/sign-in"
            className="px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
          >
            Sign In
          </a>
          <a
            href="#courses"
            aria-label="Get Started"
            className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl hover:from-violet-700 hover:to-indigo-700 hover:scale-105 active:scale-95 transition-all shadow-md shadow-violet-500/25"
          >
            Get Started <ChevronRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile */}
        <div className="flex md:hidden items-center gap-1">
          <button onClick={toggleDark} aria-label="Toggle dark mode" className="p-2 rounded-lg text-gray-500 dark:text-gray-400">
            {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-white/[0.06] ${
          open ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-4 py-3 space-y-0.5">
          {navLinks.map(link => (
            onNavigate ? (
              <button
                key={link.label}
                onClick={() => { setOpen(false); onNavigate(link.href); }}
                className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/30 rounded-xl transition-all"
              >
                {link.label} <ChevronRight className="w-4 h-4 opacity-30" />
              </button>
            ) : (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-violet-600 hover:bg-violet-50 dark:hover:bg-violet-950/30 rounded-xl transition-all"
              >
                {link.label} <ChevronRight className="w-4 h-4 opacity-30" />
              </a>
            )
          ))}
          <div className="pt-3 pb-1">
            <a
              href="#courses"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-3 text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-xl"
            >
              Get Started <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
