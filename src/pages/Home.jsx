import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Companies from '../components/Companies';
import Features from '../components/Features';
import Stats from '../components/Stats';
import Courses from '../components/Courses';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import MainLayout from '../layouts/MainLayout';
import ScrollProgress from '../components/ScrollProgress';

const Home = ({ darkMode, toggleDark }) => (
  <>
    {/* Skip to main content — keyboard accessibility */}
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-lg focus:text-sm focus:font-semibold focus:shadow-lg"
    >
      Skip to main content
    </a>
    <ScrollProgress />
    <Navbar darkMode={darkMode} toggleDark={toggleDark} />
    <MainLayout>
      <Hero />
      <Companies />
      <Features />
      <Stats />
      <Courses />
      <Testimonials />
      <CTA />
    </MainLayout>
    <Footer />
  </>
);

export default Home;
