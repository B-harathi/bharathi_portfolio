import React, { useState, useEffect, useRef } from 'react';

const SkillBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => {
      if (skillRef.current) {
        observer.unobserve(skillRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setProgress(skill.level);
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isVisible, skill.level, delay]);

  const getIconComponent = (iconName) => {
    // This would normally import and return the actual icon component
    // For now, we'll use a placeholder
    return (
      <div 
        className="tech-icon rounded-lg flex items-center justify-center text-white font-bold"
        style={{ backgroundColor: skill.color }}
      >
        {skill.name.charAt(0)}
      </div>
    );
  };

  return (
    <div ref={skillRef} className="skill-item" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex items-center mb-4">
        {/* Skill Icon */}
        <div className="mr-4">
          {getIconComponent(skill.icon)}
        </div>
        
        {/* Skill Info */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-gray-900">{skill.name}</h4>
            <span className="text-sm font-medium text-gray-600">{skill.level}%</span>
          </div>
          
          {/* Progress Bar */}
          <div className="skill-bar">
            <div 
              className="skill-progress"
              style={{ 
                width: `${progress}%`,
                transition: 'width 1.5s ease-out'
              }}
            ></div>
          </div>
          
          {/* Description */}
          {skill.description && (
            <p className="text-sm text-gray-600 mt-2">{skill.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;