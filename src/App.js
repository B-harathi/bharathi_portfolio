import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import ScrollToTop from './components/common/ScrollTop';
import LoadingSpinner from './components/common/LoadingSpinner';

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
    // Initialize AOS
    AOS.init({
      duration: 1000,
      easing: 'ease-out-cubic',
      once: true,
      offset: 100,
      delay: 0,
    });

    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Refresh AOS on route change
  useEffect(() => {
    AOS.refresh();
  });

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <Router>
      <div className="App min-h-screen bg-gray-50">
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