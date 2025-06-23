import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaEye, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const ProjectCard = ({ project, detailed = false }) => {
  const [expanded, setExpanded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLinkClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-700';
      case 'In Development':
        return 'bg-blue-100 text-blue-700';
      case 'Planning':
        return 'bg-yellow-100 text-yellow-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="project-card group" data-aos="fade-up">
      {/* Project Image */}
      <div className="relative overflow-hidden h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        {/* Image Placeholder */}
        <div className="absolute inset-0 flex items-center justify-center">
          {imageLoaded ? null : (
            <div className="text-center">
              <div className="text-4xl mb-2">🚀</div>
              <div className="text-gray-500 text-sm">{project.title}</div>
            </div>
          )}
        </div>
        
        {/* Actual Image (hidden until we have real images) */}
        {project.image && (
          <img
            src={project.image}
            alt={project.title}
            className={`w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageLoaded(false)}
          />
        )}

        {/* Status Badge */}
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
            {project.status}
          </span>
        </div>

        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
          {project.links?.live && (
            <button
              onClick={() => handleLinkClick(project.links.live)}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-primary-500 hover:text-white transition-colors duration-300"
              aria-label="View Live Demo"
            >
              <FaExternalLinkAlt className="w-4 h-4" />
            </button>
          )}
          {project.links?.github && (
            <button
              onClick={() => handleLinkClick(project.links.github)}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-gray-800 hover:text-white transition-colors duration-300"
              aria-label="View Source Code"
            >
              <FaGithub className="w-4 h-4" />
            </button>
          )}
          {project.links?.demo && (
            <button
              onClick={() => handleLinkClick(project.links.demo)}
              className="p-3 bg-white rounded-full text-gray-800 hover:bg-green-500 hover:text-white transition-colors duration-300"
              aria-label="View Demo"
            >
              <FaEye className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-6">
        {/* Project Header */}
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-primary-600 font-medium text-sm">{project.subtitle}</p>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500 flex items-center">
              <FaCalendarAlt className="w-3 h-3 mr-1" />
              {project.duration}
            </div>
          </div>
        </div>

        {/* Project Description */}
        <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded text-xs font-medium"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                +{project.technologies.length - 4} more
              </span>
            )}
          </div>
        </div>

        {/* Expand/Collapse for detailed view */}
        {detailed && (
          <>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm mb-4 group transition-colors duration-300"
            >
              {expanded ? 'Show Less' : 'Show More Details'}
              {expanded ? (
                <FaChevronUp className="ml-1 w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
              ) : (
                <FaChevronDown className="ml-1 w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
              )}
            </button>

            {/* Expanded Content */}
            {expanded && (
              <div className="space-y-4 border-t pt-4">
                {/* Long Description */}
                {project.longDescription && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">About the Project</h5>
                    <p className="text-gray-700 text-sm leading-relaxed">{project.longDescription}</p>
                  </div>
                )}

                {/* Features */}
                {project.features && project.features.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Key Features</h5>
                    <ul className="space-y-1">
                      {project.features.slice(0, 5).map((feature, index) => (
                        <li key={index} className="flex items-start text-gray-700 text-sm">
                          <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges & Solutions */}
                {project.challenges && project.solutions && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Challenges</h5>
                      <ul className="space-y-1">
                        {project.challenges.slice(0, 3).map((challenge, index) => (
                          <li key={index} className="text-gray-700 text-xs flex items-start">
                            <span className="text-red-500 mr-1">•</span>
                            {challenge}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Solutions</h5>
                      <ul className="space-y-1">
                        {project.solutions.slice(0, 3).map((solution, index) => (
                          <li key={index} className="text-gray-700 text-xs flex items-start">
                            <span className="text-green-500 mr-1">•</span>
                            {solution}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Achievements */}
                {project.achievements && project.achievements.length > 0 && (
                  <div>
                    <h5 className="text-sm font-semibold text-gray-900 mb-2">Achievements</h5>
                    <ul className="space-y-1">
                      {project.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start text-gray-700 text-sm">
                          <span className="text-yellow-500 mr-2">🏆</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Action Buttons */}
        <div className="flex space-x-3 mt-6">
          {project.links?.live && (
            <button
              onClick={() => handleLinkClick(project.links.live)}
              className="flex-1 btn-primary text-sm py-2"
            >
              <FaExternalLinkAlt className="w-3 h-3 mr-2" />
              Live Demo
            </button>
          )}
          {project.links?.github && (
            <button
              onClick={() => handleLinkClick(project.links.github)}
              className="flex-1 btn-secondary text-sm py-2"
            >
              <FaGithub className="w-3 h-3 mr-2" />
              Code
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;