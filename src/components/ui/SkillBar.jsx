import React, { useState, useEffect, useRef } from 'react';
import TechIcon from '../icons/TechIcons';

const SkillBar = ({ skill, delay = 0 }) => {
  const [progress, setProgress] = useState(0);
  const [displayPercent, setDisplayPercent] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const skillRef = useRef(null);

  useEffect(() => {
    const currentRef = skillRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
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

  // Animated percentage counter
  useEffect(() => {
    if (progress === 0) return;
    const duration = 1000;
    const steps = 30;
    const increment = skill.level / steps;
    let current = 0;
    const interval = setInterval(() => {
      current += increment;
      if (current >= skill.level) {
        setDisplayPercent(skill.level);
        clearInterval(interval);
      } else {
        setDisplayPercent(Math.round(current));
      }
    }, duration / steps);
    return () => clearInterval(interval);
  }, [progress, skill.level]);

  return (
    <div ref={skillRef} className="skill-item group" data-aos="fade-up" data-aos-delay={delay}>
      <div className="flex items-start mb-4">
        {/* Skill Icon */}
        <div className="mr-4 flex-shrink-0">
          <div 
            className="w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
            style={{ backgroundColor: skill.color + '20' }}
          >
            <TechIcon 
              iconName={skill.icon} 
              color={skill.color}
              size="w-6 h-6"
            />
          </div>
        </div>
        
        {/* Skill Info */}
        <div className="flex-1 min-w-0">
          <div className="flex justify-between items-center mb-2">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 truncate">{skill.name}</h4>
            <span 
              className="text-sm font-bold tabular-nums ml-2 flex-shrink-0"
              style={{ color: skill.color }}
            >
              {displayPercent}%
            </span>
          </div>
          
          {/* Progress Bar */}
          <div className="skill-bar relative">
            <div 
              className="skill-progress relative"
              style={{ 
                width: `${progress}%`,
                backgroundColor: skill.color,
                backgroundImage: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`,
                transition: 'width 1.2s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {/* Shimmer overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>
          
          {/* Description */}
          {skill.description && (
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">{skill.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillBar;