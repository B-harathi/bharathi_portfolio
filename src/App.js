import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollTop';
import LoadingSpinner from './components/common/LoadingSpinner';
import ScrollProgress from './components/ui/ScrollProgress';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

// Styles
import './styles/index.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Force the dark "access log" theme (design is dark-only)
    const root = document.documentElement;
    root.classList.add('dark');
    root.style.colorScheme = 'dark';

    // Initialize AOS per the design system motion spec:
    // fade + rise 12px, 400ms, ease-out, once per section.
    // Disable entirely when the user prefers reduced motion.
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    AOS.init({
      duration: 400,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
      disable: () => reducedMotion,
    });

    // Brief boot so the access-log hero is the first thing seen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App min-h-screen bg-transparent">
        <ScrollProgress />
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;