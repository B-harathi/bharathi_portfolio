import React from 'react';
import Hero from '../components/sections/Hero';
import AboutSection from '../components/sections/AboutSection';
import SkillsSection from '../components/sections/SkillsSection';
import ProjectsGrid from '../components/sections/ProjectsGrid';
import ContactForm from '../components/sections/ContactForm';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />
      
      {/* About Preview Section */}
      <AboutSection preview={true} />
      
      {/* Skills Preview Section */}
      <SkillsSection preview={true} />
      
      {/* Featured Projects Section */}
      <ProjectsGrid preview={true} />
      
      {/* Contact Section */}
      <ContactForm preview={true} />
    </div>
  );
};

export default Home;