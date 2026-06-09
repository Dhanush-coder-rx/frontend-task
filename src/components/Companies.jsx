const logoMap = {
  'Google':        '/logos/google.svg',
  'Microsoft':     '/logos/microsoft.svg',
  'Amazon':        '/logos/amazon.svg',
  'Infosys':       '/logos/infosys.svg',
  'TCS':           '/logos/tcs.svg',
  'Wipro':         '/logos/wipro.svg',
  'Accenture':     '/logos/accenture.svg',
  'Flipkart':      '/logos/flipkart.svg',
  'Adobe':         '/logos/adobe.svg',
  'Oracle':        '/logos/oracle.svg',
  'IBM':           '/logos/ibm.svg',
  'Cisco':         '/logos/cisco.svg',
  'Goldman Sachs': '/logos/goldman.svg',
  'Zoho':          '/logos/zoho.svg',
};

const innerRing = ['Google', 'Microsoft', 'Amazon', 'Flipkart', 'TCS', 'Infosys'];
const outerRing = ['Wipro', 'Accenture', 'Adobe', 'Oracle', 'IBM', 'Cisco', 'Goldman Sachs', 'Zoho'];

const stripItems = [
  'Samsung', 'Intel', 'Capgemini', 'Cognizant', 'HCL Technologies',
  'Freshworks', 'JP Morgan', 'Walmart Global Tech', 'Deloitte', 'KPMG',
];

const abbrev = (name) =>
  name.replace('Goldman Sachs', 'GS').replace('HCL Technologies', 'HCL')
    .split(' ').map(w => w[0]).join('').slice(0, 3).toUpperCase();

// Logo node — counter-rotates to stay upright
const CompanyNode = ({ name, large, ccw }) => (
  <div
    className="flex items-center justify-center"
    style={{ animation: `${ccw ? 'spin-cw' : 'spin-ccw'} ${large ? 28 : 40}s linear infinite` }}
  >
    <div
      title={name}
      className={`${large ? 'w-[60px] h-[60px]' : 'w-[46px] h-[46px]'} rounded-full bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 hover:border-violet-400 dark:hover:border-violet-500 transition-all duration-300 cursor-default select-none group`}
    >
      {logoMap[name] ? (
        <img
          src={logoMap[name]}
          alt={name}
          loading="lazy"
          className={`${large ? 'h-8' : 'h-6'} w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity`}
        />
      ) : (
        <span className={`${large ? 'text-[11px]' : 'text-[10px]'} font-black text-gray-700 dark:text-gray-200 group-hover:text-violet-600 dark:group-hover:text-violet-400 text-center leading-tight px-1 transition-colors`}>
          {abbrev(name)}
        </span>
      )}
    </div>
  </div>
);

// Ring container spins; nodes inside counter-spin to stay upright
const OrbitRing = ({ companies, radiusPct, duration, ccw, large }) => (
  <div
    className="absolute inset-0"
    style={{ animation: `${ccw ? 'spin-ccw' : 'spin-cw'} ${duration}s linear infinite` }}
  >
    {companies.map((name, i) => {
      const angle = (i / companies.length) * 360 - 90;
      const rad   = (angle * Math.PI) / 180;
      const cx    = 50 + radiusPct * Math.cos(rad);
      const cy    = 50 + radiusPct * Math.sin(rad);
      return (
        <div
          key={name}
          className="absolute"
          style={{ left: `${cx}%`, top: `${cy}%`, transform: 'translate(-50%,-50%)' }}
        >
          <CompanyNode name={name} large={large} ccw={ccw} />
        </div>
      );
    })}
  </div>
);

const Companies = () => (
  <section id="companies" className="py-20 bg-white dark:bg-gray-900 border-y border-gray-100 dark:border-white/[0.05] overflow-hidden">

    {/* Keyframe definitions */}
    <style>{`
      @keyframes spin-cw  { from { transform: rotate(0deg);   } to { transform: rotate(360deg);  } }
      @keyframes spin-ccw { from { transform: rotate(0deg);   } to { transform: rotate(-360deg); } }
    `}</style>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="text-center mb-14">
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-50 dark:bg-violet-950/50 text-violet-600 dark:text-violet-400 text-xs font-bold uppercase tracking-widest border border-violet-100 dark:border-violet-900/60">
          ✦ Hiring Network
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-black text-gray-900 dark:text-white tracking-tight">
          Where Our Graduates{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">
            Get Hired
          </span>
        </h2>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          900+ companies actively recruit from our student network across India.
        </p>
      </div>

      {/* Orbit */}
      <div className="flex justify-center">
        <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px]">

          {/* Dashed orbit tracks — static */}
          <div className="absolute inset-0 rounded-full border border-dashed border-violet-200/70 dark:border-violet-800/50" />
          <div className="absolute rounded-full border border-dashed border-indigo-200/50 dark:border-indigo-800/30" style={{ inset: '17%' }} />

          {/* Center glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-36 h-36 rounded-full bg-violet-500/15 blur-3xl" />
          </div>

          {/* Center badge */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 shadow-glow-md border-4 border-white dark:border-gray-900">
              <span className="text-white font-black text-base leading-none">900+</span>
              <span className="text-violet-200 text-[9px] font-semibold mt-0.5 tracking-wide">Partners</span>
            </div>
          </div>

          {/* Inner ring — clockwise, 28s */}
          <OrbitRing companies={innerRing} radiusPct={28} duration={28} ccw={false} large={true} />

          {/* Outer ring — counter-clockwise, 40s */}
          <OrbitRing companies={outerRing} radiusPct={46} duration={40} ccw={true}  large={false} />

        </div>
      </div>

      {/* Bottom pill strip */}
      <div
        className="mt-12 relative overflow-hidden"
        role="region"
        aria-label="More hiring companies marquee"
      >
        <div className="absolute left-0 top-0 w-16 h-full bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 w-16 h-full bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="flex animate-marquee gap-3 items-center whitespace-nowrap">
          {[...stripItems, ...stripItems].map((name, i) => (
            <div key={i} className="flex-shrink-0 px-4 py-2 rounded-full bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-xs font-semibold text-gray-500 dark:text-gray-400 hover:text-violet-600 dark:hover:text-violet-400 hover:border-violet-300 dark:hover:border-violet-700 transition-all cursor-default select-none">
              {name}
            </div>
          ))}
        </div>
      </div>

    </div>
  </section>
);

export default Companies;
