import React from 'react';
import ProjectsGrid from '../components/sections/ProjectsGrid';

const Projects = () => {
  return (
    <div className="min-h-screen">
      <ProjectsGrid preview={false} />
    </div>
  );
};

export default Projects;