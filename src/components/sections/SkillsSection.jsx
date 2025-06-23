import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { skillsData } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';
import SkillBar from '../ui/SkillBar';
import TechIcon from '../icons/TechIcons';

const SkillsSection = ({ preview = false }) => {
  // Get featured skills for preview
  const featuredSkills = preview 
    ? skillsData.technical[0].skills.slice(0, 4) // First 4 frontend skills
    : skillsData.technical.flatMap(category => category.skills);

  const categories = preview 
    ? skillsData.categories.slice(0, 4) 
    : skillsData.categories;

  const expertise = preview 
    ? skillsData.expertise.slice(0, 3) 
    : skillsData.expertise;

  return (
    <section className={`section-padding bg-gray-50 ${preview ? '' : 'pt-24'}`}>
      <div className="container-custom">
        <SectionHeading
          subtitle="My Expertise"
          title="Skills & Technologies"
          description={preview ? "Technologies I work with to bring ideas to life" : "A comprehensive overview of my technical skills and expertise areas"}
          className="mb-16"
        />

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" data-aos="fade-up">
          {categories.map((category, index) => (
            <div
              key={index}
              className={`card p-6 text-center group hover:bg-gradient-to-r ${category.color} hover:text-white transition-all duration-300`}
            >
              <div className="mb-4">
                <TechIcon 
                  iconName={category.icon} 
                  size="w-12 h-12" 
                  className="mx-auto text-gray-600 group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
              <p className="text-sm opacity-80">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Skills */}
        {!preview && (
          <div className="mb-16">
            <h3 className="heading-tertiary text-center mb-12">Technical Skills</h3>
            {skillsData.technical.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-12">
                <h4 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                  {category.category}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar 
                      key={skillIndex} 
                      skill={skill} 
                      delay={skillIndex * 100} 
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Featured Skills for Preview */}
        {preview && (
          <div className="mb-16">
            <h3 className="heading-tertiary text-center mb-12">Featured Skills</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredSkills.map((skill, index) => (
                <SkillBar 
                  key={index} 
                  skill={skill} 
                  delay={index * 100} 
                />
              ))}
            </div>
          </div>
        )}

        {/* Expertise Levels */}
        <div className="mb-16" data-aos="fade-up">
          <h3 className="heading-tertiary text-center mb-12">Expertise Areas</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, index) => (
              <div key={index} className="card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-lg font-semibold text-gray-900">{area.area}</h4>
                  <span className="text-2xl font-bold gradient-text">{area.percentage}%</span>
                </div>
                
                {/* Progress Ring or Bar */}
                <div className="skill-bar mb-4">
                  <div 
                    className="skill-progress"
                    style={{ width: `${area.percentage}%` }}
                  ></div>
                </div>
                
                <p className="text-gray-600 text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA for Preview */}
        {preview && (
          <div className="text-center" data-aos="fade-up">
            <Link
              to="/skills"
              className="btn-primary group"
            >
              View All Skills
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

        {/* Technology Stack Overview */}
        {!preview && (
          <div data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-12">Technology Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: 'React.js', icon: 'FaReact' },
                { name: 'Node.js', icon: 'FaNodeJs' },
                { name: 'JavaScript', icon: 'FaJs' },
                { name: 'MongoDB', icon: 'SiMongodb' },
                { name: 'Express.js', icon: 'SiExpress' },
                { name: 'HTML5', icon: 'FaHtml5' },
                { name: 'CSS3', icon: 'FaCss3Alt' },
                { name: 'Git', icon: 'FaGitAlt' },
                { name: 'VS Code', icon: 'SiVisualstudiocode' },
                { name: 'Postman', icon: 'SiPostman' },
                { name: 'Material-UI', icon: 'SiMui' },
                { name: 'Next.js', icon: 'TbBrandNextjs' },
                { name: 'Ant Design', icon: 'SiAntdesign' },
                // { name: 'Tailwind CSS', icon: 'SiTailwindcss' },
                { name: 'npm', icon: 'FaCode' },
                { name: 'REST APIs', icon: 'MdApi' }
              ].map((tech, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-4 card group hover:scale-105 transition-transform duration-300"
                  data-aos="zoom-in"
                  data-aos-delay={index * 50}
                >
                  <TechIcon 
                    iconName={tech.icon} 
                    size="w-12 h-12"
                    className="mb-2 group-hover:animate-pulse"
                  />
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;