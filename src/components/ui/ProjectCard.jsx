import React, { useState } from 'react';
import { FaExternalLinkAlt, FaGithub, FaCalendarAlt, FaChevronDown, FaChevronUp, FaAward } from 'react-icons/fa';
import TechIcon from '../icons/TechIcons';

const ProjectCard = ({ project, detailed = false }) => {
  const [expanded, setExpanded] = useState(false);

  const handleLinkClick = (url) => {
    if (url) window.open(url, '_blank', 'noopener,noreferrer');
  };

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Completed':
        return { bg: 'bg-emerald-100 dark:bg-emerald-900/30', text: 'text-emerald-700 dark:text-emerald-300', dot: 'bg-emerald-500' };
      case 'In Development':
        return { bg: 'bg-blue-100 dark:bg-blue-900/30', text: 'text-blue-700 dark:text-blue-300', dot: 'bg-blue-500' };
      default:
        return { bg: 'bg-gray-100 dark:bg-gray-700', text: 'text-gray-700 dark:text-gray-300', dot: 'bg-gray-500' };
    }
  };

  const statusStyle = getStatusStyle(project.status);

  return (
    <div className="group relative" data-aos="fade-up">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-opacity duration-500"></div>
      <div className="relative bg-white dark:bg-dark-800 rounded-xl shadow-soft hover:shadow-lg border border-gray-100 dark:border-dark-700 transition-all duration-300 overflow-hidden">
        
        {/* Header Area */}
        <div className="relative h-52 overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dark-900 dark:to-dark-800">
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]"
            style={{ backgroundImage: 'radial-gradient(circle at 25px 25px, rgba(37,99,235,0.3) 1px, transparent 0)', backgroundSize: '50px 50px' }}>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent dark:from-dark-800/80"></div>

          <div className={`absolute top-4 right-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium ${statusStyle.bg} ${statusStyle.text}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${statusStyle.dot}`}></span>
            {project.status}
          </div>

          <div className="absolute top-4 left-4 z-10 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/80 dark:bg-dark-800/80 backdrop-blur-sm rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
            <FaCalendarAlt className="w-3 h-3" />
            {project.duration}
          </div>

          <div className="absolute bottom-4 left-4 z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-purple-600 rounded-2xl shadow-lg flex items-center justify-center">
              <span className="text-2xl font-bold text-white">{project.title.charAt(0)}</span>
            </div>
          </div>

          <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 flex items-center justify-center gap-3">
            {project.links?.live && (
              <button onClick={() => handleLinkClick(project.links.live)}
                className="p-3 bg-white/90 hover:bg-white rounded-xl text-gray-800 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="Live Demo" title="Live Demo">
                <FaExternalLinkAlt className="w-5 h-5" />
              </button>
            )}
            {project.links?.github && (
              <button onClick={() => handleLinkClick(project.links.github)}
                className="p-3 bg-white/90 hover:bg-white rounded-xl text-gray-800 hover:text-gray-900 transition-all duration-300 transform hover:scale-110 shadow-lg" aria-label="Source Code" title="Source Code">
                <FaGithub className="w-5 h-5" />
              </button>
            )}
            {detailed && (
              <button onClick={() => setExpanded(!expanded)}
                className="p-3 bg-white/90 hover:bg-white rounded-xl text-gray-800 hover:text-primary-600 transition-all duration-300 transform hover:scale-110 shadow-lg"
                aria-label={expanded ? 'Show Less' : 'Show More'} title={expanded ? 'Show Less' : 'Show More'}>
                {expanded ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-3">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">{project.title}</h3>
            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">{project.subtitle}</p>
          </div>

          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-5 line-clamp-3">{project.description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 5).map((tech, index) => (
              <span key={index}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gradient-to-r from-primary-50 to-purple-50 dark:from-primary-900/20 dark:to-purple-900/20 text-primary-700 dark:text-primary-300 rounded-lg text-xs font-medium border border-primary-100 dark:border-primary-800/30">
                <TechIcon iconName={tech} size="w-3 h-3" />
                {tech}
              </span>
            ))}
            {project.technologies.length > 5 && (
              <span className="px-2.5 py-1 bg-gray-100 dark:bg-dark-700 text-gray-500 dark:text-gray-400 rounded-lg text-xs font-medium">
                +{project.technologies.length - 5}
              </span>
            )}
          </div>

          {detailed && expanded && (
            <div className="space-y-5 mt-5 pt-5 border-t border-gray-100 dark:border-dark-700 animate-fade-in">
              {project.longDescription && (
                <div>
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"></span>
                    About the Project
                  </h5>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{project.longDescription}</p>
                </div>
              )}
              {project.features && project.features.length > 0 && (
                <div>
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-primary-500 to-purple-500 rounded-full"></span>
                    Key Features
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.features.slice(0, 6).map((feature, index) => (
                      <div key={index} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-primary-500 to-purple-500 rounded-full mt-1.5 flex-shrink-0"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {project.challenges && project.solutions && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 bg-red-50/50 dark:bg-red-900/10 rounded-xl border border-red-100 dark:border-red-900/20">
                    <h5 className="text-sm font-bold text-red-600 dark:text-red-400 mb-2">Challenges</h5>
                    <ul className="space-y-1.5">
                      {project.challenges.slice(0, 3).map((c, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-xs flex items-start gap-1.5">
                          <span className="text-red-400 mt-0.5">◆</span>{c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-xl border border-emerald-100 dark:border-emerald-900/20">
                    <h5 className="text-sm font-bold text-emerald-600 dark:text-emerald-400 mb-2">Solutions</h5>
                    <ul className="space-y-1.5">
                      {project.solutions.slice(0, 3).map((s, i) => (
                        <li key={i} className="text-gray-600 dark:text-gray-400 text-xs flex items-start gap-1.5">
                          <span className="text-emerald-400 mt-0.5">◆</span>{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
              {project.achievements && project.achievements.length > 0 && (
                <div>
                  <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                    <FaAward className="text-amber-500 w-4 h-4" />
                    Achievements
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {project.achievements.map((a, i) => (
                      <div key={i} className="flex items-start gap-2 text-gray-600 dark:text-gray-400 text-sm p-2.5 bg-amber-50/50 dark:bg-amber-900/10 rounded-lg">
                        <span className="text-amber-500 flex-shrink-0 mt-0.5">✦</span>{a}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {detailed && !expanded && (
            <button onClick={() => setExpanded(true)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 bg-primary-50/50 dark:bg-primary-900/10 hover:bg-primary-100/50 dark:hover:bg-primary-900/20 rounded-xl transition-all duration-300 mt-2">
              <FaChevronDown className="w-3 h-3" /> Show More Details
            </button>
          )}

          {detailed && expanded && (
            <button onClick={() => setExpanded(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 bg-gray-50 dark:bg-dark-700/50 hover:bg-gray-100 dark:hover:bg-dark-700 rounded-xl transition-all duration-300 mt-2">
              <FaChevronUp className="w-3 h-3" /> Show Less
            </button>
          )}

          {!detailed && (
            <div className="flex gap-3 mt-4 pt-4 border-t border-gray-100 dark:border-dark-700">
              {project.links?.live && (
                <button onClick={() => handleLinkClick(project.links.live)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold rounded-md hover:-translate-y-0.5 transition-all duration-200"
                  style={{ backgroundColor: 'var(--grant-amber)', color: 'var(--bg-void)' }}>
                  <FaExternalLinkAlt className="w-3 h-3" /> Live Demo
                </button>
              )}
              {project.links?.github && (
                <button onClick={() => handleLinkClick(project.links.github)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border-2 border-gray-200 dark:border-dark-600 text-gray-700 dark:text-gray-300 text-sm font-medium rounded-xl hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-400 dark:hover:text-primary-400 transition-all duration-300">
                  <FaGithub className="w-3 h-3" /> Code
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;