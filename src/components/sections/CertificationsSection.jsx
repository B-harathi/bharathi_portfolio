import React from 'react';
import { FaCertificate, FaExternalLinkAlt, FaDownload, FaCalendarAlt } from 'react-icons/fa';
import { certificationsData, certificationStats, learningPath, upcomingCertifications } from '../../data/certifications';
import SectionHeading from '../ui/SectionHeading';
import TechIcon from '../icons/TechIcons';

const CertificationsSection = () => {
  const handleCertificateDownload = (certificateUrl, title) => {
    // In a real implementation, this would download the actual certificate
    // alert(`Downloading certificate: ${title}`);
  };

  const handleVerification = (verificationUrl) => {
    window.open(verificationUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading
          subtitle="Professional Development"
          title="Certifications & Courses"
          description="Continuous learning through industry-recognized certifications and specialized courses"
          className="mb-16"
        />

        {/* Certification Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          {certificationStats.map((stat, index) => (
            <div
              key={index}
              className={`card p-6 text-center group hover:bg-gradient-to-r ${stat.color} hover:text-white transition-all duration-300`}
            >
              <div className="mb-4">
                <TechIcon 
                  iconName={stat.icon} 
                  size="w-12 h-12" 
                  className="mx-auto text-gray-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <div className="text-3xl font-bold mb-2">{stat.count}</div>
              <h3 className="text-lg font-semibold">{stat.category}</h3>
            </div>
          ))}
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {certificationsData.map((cert, index) => (
            <div
              key={cert.id}
              className="card p-6 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Certificate Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center`} style={{ backgroundColor: cert.color }}>
                    <TechIcon iconName={cert.icon} size="w-6 h-6" className="text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {cert.type}
                    </span>
                    <div className="text-sm text-gray-600 flex items-center mt-1">
                      <FaCalendarAlt className="w-3 h-3 mr-1" />
                      {cert.date}
                    </div>
                  </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                  cert.status === 'Completed' 
                    ? 'bg-green-100 text-green-700' 
                    : 'bg-yellow-100 text-yellow-700'
                }`}>
                  {cert.status}
                </div>
              </div>

              {/* Certificate Info */}
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{cert.title}</h3>
              <p className="text-primary-600 font-medium mb-1">{cert.provider}</p>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">{cert.description}</p>

              {/* Skills */}
              <div className="mb-4">
                <div className="text-sm font-medium text-gray-700 mb-2">Skills Acquired:</div>
                <div className="flex flex-wrap gap-1">
                  {cert.skills.slice(0, 3).map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                      +{cert.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2">
                <button
                  className="flex-1 btn-secondary text-xs py-2"
                >
                  <FaDownload className="w-3 h-3 mr-1" />
                  Certificate
                </button>
                <button
                  onClick={() => handleVerification(cert.verificationUrl)}
                  className="flex-1 btn-outline text-xs py-2"
                >
                  <FaExternalLinkAlt className="w-3 h-3 mr-1" />
                  Verify
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="heading-tertiary text-center mb-12">Learning Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-purple-600 rounded-full"></div>
            
            <div className="space-y-12">
              {learningPath.map((phase, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="card p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h4>
                      <p className="text-gray-600 mb-3">{phase.description}</p>
                      <div className="space-y-1">
                        {phase.certifications.map((cert, certIndex) => (
                          <div key={certIndex} className="flex items-center space-x-2">
                            <FaCertificate className="text-primary-600 w-4 h-4" />
                            <span className="text-sm text-gray-700">{cert}</span>
                          </div>
                        ))}
                      </div>
                      <div className="text-sm text-gray-500 mt-3">{phase.timeframe}</div>
                    </div>
                  </div>
                  
                  {/* Timeline Node */}
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Upcoming Certifications */}
        <div data-aos="fade-up">
          <h3 className="heading-tertiary text-center mb-12">Future Learning Goals</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingCertifications.map((cert, index) => (
              <div
                key={index}
                className="card p-6 border-2 border-dashed border-gray-300 hover:border-primary-400 transition-colors duration-300"
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaCertificate className="text-gray-400 w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{cert.title}</h4>
                  <p className="text-primary-600 font-medium mb-2">{cert.provider}</p>
                  <p className="text-sm text-gray-600 mb-3">{cert.plannedDate}</p>
                  <p className="text-xs text-gray-500">{cert.reason}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;