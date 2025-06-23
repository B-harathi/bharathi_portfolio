import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaFilter } from 'react-icons/fa';
import { projectsData, projectCategories } from '../../data/Projects';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from '../ui/ProjectCard';

const ProjectsGrid = ({ preview = false }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  const projects = preview ? projectsData.slice(0, 2) : filteredProjects;

  const handleFilterChange = (filterValue) => {
    setActiveFilter(filterValue);
    
    if (filterValue === 'all') {
      setFilteredProjects(projectsData);
    } else {
      const filtered = projectsData.filter(project => {
        switch (filterValue) {
          case 'full-stack':
            return project.category.includes('Full Stack');
          case 'frontend':
            return project.category.includes('Frontend');
          case 'web-app':
            return project.category.includes('Web Application');
          default:
            return true;
        }
      });
      setFilteredProjects(filtered);
    }
  };

  return (
    <section className={`section-padding bg-white ${preview ? '' : 'pt-24'}`}>
      <div className="container-custom">
        <SectionHeading
          subtitle="My Work"
          title="Featured Projects"
          description={preview ? "Showcasing my latest projects and technical achievements" : "A collection of projects demonstrating my skills in full-stack development"}
          className="mb-16"
        />

        {/* Filter Buttons (only show in full projects page) */}
        {!preview && (
          <div className="flex flex-wrap justify-center gap-4 mb-12" data-aos="fade-up">
            <div className="flex items-center space-x-2 mb-4">
              <FaFilter className="text-gray-600 w-4 h-4" />
              <span className="text-gray-600 font-medium">Filter by:</span>
            </div>
            {projectCategories.map((category, index) => (
              <button
                key={index}
                onClick={() => handleFilterChange(category.value)}
                className={`px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.value
                    ? 'bg-gradient-to-r from-primary-600 to-purple-600 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              detailed={!preview}
            />
          ))}
        </div>

        {/* No Projects Message */}
        {!preview && filteredProjects.length === 0 && (
          <div className="text-center py-12" data-aos="fade-up">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
            <p className="text-gray-600 mb-6">No projects match the selected filter. Try selecting a different category.</p>
            <button
              onClick={() => handleFilterChange('all')}
              className="btn-primary"
            >
              Show All Projects
            </button>
          </div>
        )}

        {/* CTA for Preview */}
        {preview && (
          <div className="text-center" data-aos="fade-up">
            <Link
              to="/projects"
              className="btn-primary group"
            >
              View All Projects
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

        {/* Project Stats (only show in full projects page) */}
        {!preview && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6" data-aos="fade-up">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">{projectsData.length}</div>
              <div className="text-gray-600">Total Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {projectsData.filter(p => p.status === 'Completed').length}
              </div>
              <div className="text-gray-600">Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {projectsData.filter(p => p.status === 'In Development').length}
              </div>
              <div className="text-gray-600">In Development</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text mb-2">
                {Array.from(new Set(projectsData.flatMap(p => p.technologies))).length}
              </div>
              <div className="text-gray-600">Technologies Used</div>
            </div>
          </div>
        )}

        {/* Technology Overview (only show in full projects page) */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-12">Technologies Used Across Projects</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {Array.from(new Set(projectsData.flatMap(p => p.technologies)))
                .slice(0, 15)
                .map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium hover:from-primary-200 hover:to-purple-200 transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsGrid;