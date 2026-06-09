import { Zap, Mail, MapPin, Phone } from 'lucide-react';

const LinkedinIcon  = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>;
const InstagramIcon = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>;
const FacebookIcon  = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>;
const TwitterIcon   = () => <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>;

const columns = [
  {
    title: 'Platform',
    links: [
      { label: 'Features',       href: '#features' },
      { label: 'Courses',        href: '#courses' },
      { label: 'Mock Tests',     href: '#courses' },
      { label: 'Roadmaps',       href: '#features' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us',       href: '/about' },
      { label: 'Careers',        href: '/careers' },
      { label: 'Blog',           href: '/blog' },
      { label: 'Press',          href: '/press' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center',    href: '/help' },
      { label: 'FAQs',           href: '/faq' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Use',   href: '/terms' },
    ],
  },
];

const socials = [
  { icon: <LinkedinIcon />,  href: 'https://www.linkedin.com/company/crackthe-campus/', label: 'LinkedIn',  color: 'hover:bg-blue-700' },
  { icon: <InstagramIcon />, href: 'https://www.instagram.com/crackthecampus_',         label: 'Instagram', color: 'hover:bg-indigo-600' },
  { icon: <FacebookIcon />,  href: 'https://www.facebook.com/people/Crack-The-Campus/61576939306177/', label: 'Facebook', color: 'hover:bg-blue-800' },
  { icon: <TwitterIcon />,   href: 'https://twitter.com/crackthecampus',                label: 'Twitter',   color: 'hover:bg-blue-500' },
];

const Footer = () => (
  <footer className="bg-gray-950 text-gray-400">

    {/* Newsletter strip */}
    <div className="border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-white font-semibold text-sm">Stay ahead of every placement drive</p>
          <p className="text-gray-500 text-xs mt-0.5">Weekly prep tips, company packs, and job alerts — free.</p>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-2 flex-1 sm:w-64 px-3 py-2.5 bg-gray-900 border border-white/[0.08] rounded-xl">
            <Mail className="w-4 h-4 text-gray-500 flex-shrink-0" />
            <input
              type="email"
              placeholder="Enter your college email"
              aria-label="Email for newsletter"
              className="bg-transparent text-sm text-gray-300 placeholder-gray-600 outline-none w-full"
            />
          </div>
          <button className="px-4 py-2.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 text-white rounded-xl transition-all flex-shrink-0">
            Subscribe
          </button>
        </div>
      </div>
    </div>

    {/* Main */}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">

        {/* Brand col */}
        <div className="col-span-2 space-y-5">
          <a href="/#" className="flex items-center gap-2.5 group w-fit">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center shadow-glow-sm group-hover:scale-110 transition-transform">
              <Zap className="w-5 h-5 text-white" />
            </div>
            <span className="font-black text-xl text-white tracking-tight">
              Crack<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-indigo-400">The</span>Campus
            </span>
          </a>

          <p className="text-sm leading-relaxed max-w-xs text-gray-500">
            India's campus-to-career prep platform — structured learning, AI mock tests, and ATS resumes trusted by 75,000+ students.
          </p>

          {/* Contact info — scraped from crackthecampus.com */}
          <div className="space-y-2 text-xs text-gray-600">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 mt-0.5 text-gray-700 flex-shrink-0" />
              <span className="leading-snug">Ground Floor, ThiDiff Tech Park, Singasandra, Bengaluru, Karnataka 560068</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-gray-700 flex-shrink-0" />
              <a href="mailto:info@crackthecampus.com" className="hover:text-violet-400 transition-colors">
                info@crackthecampus.com
              </a>
            </div>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-2 pt-1">
            {socials.map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className={`w-8 h-8 rounded-lg bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white ${s.color} transition-all duration-200 hover:scale-110`}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        {columns.map(col => (
          <div key={col.title}>
            <h4 className="text-[10px] font-bold text-gray-500 uppercase tracking-[0.18em] mb-5">{col.title}</h4>
            <ul className="space-y-3">
              {col.links.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 hover:text-violet-400 hover:translate-x-0.5 transition-all duration-200 inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8 border-t border-white/[0.06] text-xs text-gray-600">
        <p>© {new Date().getFullYear()} CrackTheCampus. All rights reserved.</p>
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse-slow" />
          <span>All systems operational</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
