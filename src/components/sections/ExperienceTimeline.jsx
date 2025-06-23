import React, { useState } from 'react';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaAward, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { experienceData, careerStats } from '../../data/experience';
import SectionHeading from '../ui/SectionHeading';
import { TechIconsShowcase } from '../icons/TechIcons';

const ExperienceTimeline = ({ preview = false }) => {
  const [expandedExperience, setExpandedExperience] = useState(null);
  
  const experiences = preview ? experienceData.slice(0, 1) : experienceData;

  const toggleExpanded = (id) => {
    setExpandedExperience(expandedExperience === id ? null : id);
  };

  return (
    <section className={`section-padding bg-gray-50 ${preview ? '' : 'pt-24'}`}>
      <div className="container-custom">
        <SectionHeading
          subtitle="My Journey"
          title="Work Experience"
          description={preview ? "Professional experience in software development and digital marketing" : "A detailed overview of my professional journey and achievements"}
          className="mb-16"
        />

        {/* Career Stats */}
        {!preview && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
            {careerStats.map((stat, index) => (
              <div key={index} className="card p-6 text-center">
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</h3>
                <p className="text-sm text-gray-600">{stat.description}</p>
              </div>
            ))}
          </div>
        )}

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-purple-600 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 200}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <div className="card p-6 group">
                    {/* Experience Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-lg flex items-center justify-center">
                          <FaBriefcase className="text-white w-6 h-6" />
                        </div>
                        <div>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            exp.type === 'Full-time' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {exp.type}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-gray-600 flex items-center">
                          <FaCalendarAlt className="w-3 h-3 mr-1" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>

                    {/* Job Details */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{exp.title}</h3>
                    <h4 className="text-lg font-medium text-primary-600 mb-2">{exp.company}</h4>
                    <div className="flex items-center text-gray-600 text-sm mb-4">
                      <FaMapMarkerAlt className="w-3 h-3 mr-1" />
                      {exp.location} • {exp.startDate} - {exp.endDate}
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-4 leading-relaxed">{exp.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-gray-900 mb-2">Technologies Used:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Expand/Collapse Button */}
                    {!preview && (
                      <button
                        onClick={() => toggleExpanded(exp.id)}
                        className="flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group transition-colors duration-300"
                      >
                        {expandedExperience === exp.id ? 'Show Less' : 'Show More'}
                        {expandedExperience === exp.id ? (
                          <FaChevronUp className="ml-1 w-3 h-3 group-hover:-translate-y-1 transition-transform duration-300" />
                        ) : (
                          <FaChevronDown className="ml-1 w-3 h-3 group-hover:translate-y-1 transition-transform duration-300" />
                        )}
                      </button>
                    )}

                    {/* Expanded Content */}
                    {(!preview || expandedExperience === exp.id) && (
                      <div className={`mt-6 space-y-6 ${expandedExperience === exp.id || preview ? 'block' : 'hidden'}`}>
                        {/* Responsibilities */}
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                            <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full mr-2"></div>
                            Key Responsibilities
                          </h5>
                          <ul className="space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start text-gray-700 text-sm">
                                <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {responsibility}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h5 className="text-sm font-semibold text-gray-900 mb-3 flex items-center">
                            <FaAward className="text-yellow-500 w-4 h-4 mr-2" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start text-gray-700 text-sm">
                                <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Company Info */}
                        <div className="bg-gray-50 rounded-lg p-4">
                          <h5 className="text-sm font-semibold text-gray-900 mb-2">About {exp.company}</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            <span className="font-medium">Industry:</span> {exp.companyInfo.industry}
                          </p>
                          <p className="text-sm text-gray-600">{exp.companyInfo.description}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Empty space for alternating layout */}
                <div className="hidden md:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Gained Section */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-12">Skills Developed Through Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💻</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Technical Skills</h4>
                <p className="text-gray-600 text-sm">Full-stack development, API integration, database design, and modern web technologies</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">🤝</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Soft Skills</h4>
                <p className="text-gray-600 text-sm">Team collaboration, Agile methodologies, problem-solving, and effective communication</p>
              </div>
              
              <div className="card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📈</span>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Business Skills</h4>
                <p className="text-gray-600 text-sm">Digital marketing, SEO optimization, campaign management, and analytics</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceTimeline;