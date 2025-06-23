import React from 'react';
import SkillsSection from '../components/sections/SkillsSection';
import CertificationsSection from '../components/sections/CertificationsSection';

const Skills = () => {
  return (
    <div className="min-h-screen">
      <SkillsSection preview={false} />
      <CertificationsSection />
    </div>
  );
};

export default Skills;