import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaBriefcase, FaHeart } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = ({ preview = false }) => {
  const softSkillsPreview = personalInfo.softSkills.slice(0, 4);
  const interestsPreview = personalInfo.interests.slice(0, 6);

  return (
    <section className={`section-padding bg-white ${preview ? '' : 'pt-24'}`}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Get To Know Me"
          title="About Me"
          description={preview ? "A passionate developer with a love for creating innovative solutions" : ""}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div data-aos="fade-right">
            {/* Main Description */}
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {personalInfo.bio.long}
              </p>
              
              {!preview && (
                <p className="text-lg text-gray-700 leading-relaxed">
                  {personalInfo.bio.passion}
                </p>
              )}

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6 my-8">
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <FaBriefcase className="text-primary-600 w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold gradient-text">1+</span>
                  </div>
                  <p className="text-gray-600">Years of Experience</p>
                </div>
                
                <div className="text-center lg:text-left">
                  <div className="flex items-center justify-center lg:justify-start mb-2">
                    <FaGraduationCap className="text-primary-600 w-6 h-6 mr-2" />
                    <span className="text-2xl font-bold gradient-text">8.75</span>
                  </div>
                  <p className="text-gray-600">CGPA in Engineering</p>
                </div>
              </div>

              {/* CTA Button for preview */}
              {preview && (
                <Link
                  to="/about"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium group"
                >
                  Learn more about me
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              )}
            </div>
          </div>

          {/* Right Content */}
          <div data-aos="fade-left">
            {/* Soft Skills */}
            <div className="card p-6 mb-6">
              <h3 className="heading-tertiary mb-6 flex items-center">
                <FaHeart className="text-red-500 w-5 h-5 mr-2" />
                What I'm Passionate About
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {(preview ? softSkillsPreview : personalInfo.softSkills).map((skill, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full"></div>
                    <span className="text-gray-700 text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="card p-6">
              <h3 className="heading-tertiary mb-6">Interests & Technologies</h3>
              <div className="flex flex-wrap gap-2">
                {(preview ? interestsPreview : personalInfo.interests).map((interest, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-primary-100 to-purple-100 text-primary-700 rounded-full text-sm font-medium"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education Section (only show in full about page) */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-12">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {personalInfo.education.map((edu, index) => (
                <div key={index} className="card p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FaGraduationCap className="text-white w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h4>
                  <p className="text-primary-600 font-medium mb-1">{edu.institution}</p>
                  <p className="text-gray-600 text-sm mb-2">{edu.location} • {edu.year}</p>
                  <p className="text-lg font-bold gradient-text mb-3">
                    {edu.cgpa || edu.percentage}
                  </p>
                  <p className="text-gray-600 text-sm">{edu.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Languages Section (only show in full about page) */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-12">Languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {personalInfo.languages.map((language, index) => (
                <div key={index} className="card p-6 text-center">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{language.name}</h4>
                  <p className="text-primary-600 font-medium mb-3">{language.proficiency}</p>
                  <div className="flex justify-center space-x-4">
                    {language.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;