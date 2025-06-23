import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaGitAlt, 
  FaDatabase,
  FaServer,
  FaTools,
  FaCode
} from 'react-icons/fa';
import { 
  SiMongodb, 
  SiExpress, 
  SiVisualstudiocode, 
  SiPostman, 
  SiMui, 
  SiAntdesign,
  SiNextdotjs,
  SiTailwindcss
} from 'react-icons/si';
import { 
  MdDesignServices, 
  MdApi, 
  MdPeople, 
  MdGroups 
} from 'react-icons/md';
import { 
  TbBrandNextjs 
} from 'react-icons/tb';

const TechIcon = ({ iconName, size = "w-8 h-8", color, className = "" }) => {
  const iconProps = {
    className: `${size} ${className}`,
    style: color ? { color } : {}
  };

  const iconComponents = {
    // Frontend
    FaReact: <FaReact {...iconProps} />,
    FaJs: <FaJs {...iconProps} />,
    FaHtml5: <FaHtml5 {...iconProps} />,
    FaCss3Alt: <FaCss3Alt {...iconProps} />,
    SiMui: <SiMui {...iconProps} />,
    SiAntdesign: <SiAntdesign {...iconProps} />,
    TbBrandNextjs: <TbBrandNextjs {...iconProps} />,
    SiNextdotjs: <SiNextdotjs {...iconProps} />,
    SiTailwindcss: <SiTailwindcss {...iconProps} />,

    // Backend
    FaNodeJs: <FaNodeJs {...iconProps} />,
    SiExpress: <SiExpress {...iconProps} />,
    SiMongodb: <SiMongodb {...iconProps} />,

    // Tools
    FaGitAlt: <FaGitAlt {...iconProps} />,
    SiVisualstudiocode: <SiVisualstudiocode {...iconProps} />,
    SiPostman: <SiPostman {...iconProps} />,

    // Categories
    MdDesignServices: <MdDesignServices {...iconProps} />,
    FaServer: <FaServer {...iconProps} />,
    FaDatabase: <FaDatabase {...iconProps} />,
    FaTools: <FaTools {...iconProps} />,
    MdApi: <MdApi {...iconProps} />,
    MdPeople: <MdPeople {...iconProps} />,
    MdGroups: <MdGroups {...iconProps} />,
    FaCode: <FaCode {...iconProps} />
  };

  return iconComponents[iconName] || <FaCode {...iconProps} />;
};

// Predefined tech stack with colors
export const techStackData = {
  // Frontend
  'React.js': { icon: 'FaReact', color: '#61DAFB', name: 'React.js' },
  'JavaScript': { icon: 'FaJs', color: '#F7DF1E', name: 'JavaScript' },
  'HTML5': { icon: 'FaHtml5', color: '#E34F26', name: 'HTML5' },
  'CSS3': { icon: 'FaCss3Alt', color: '#1572B6', name: 'CSS3' },
  'Material-UI': { icon: 'SiMui', color: '#007FFF', name: 'Material-UI' },
  'Ant Design': { icon: 'SiAntdesign', color: '#1890FF', name: 'Ant Design' },
  'Next.js': { icon: 'TbBrandNextjs', color: '#000000', name: 'Next.js' },
//   'Tailwind CSS': { icon: 'SiTailwindcss', color: '#06B6D4', name: 'Tailwind CSS' },

  // Backend
  'Node.js': { icon: 'FaNodeJs', color: '#339933', name: 'Node.js' },
  'Express.js': { icon: 'SiExpress', color: '#000000', name: 'Express.js' },
  'MongoDB': { icon: 'SiMongodb', color: '#47A248', name: 'MongoDB' },

  // Tools
  'Git': { icon: 'FaGitAlt', color: '#F05032', name: 'Git' },
  'VS Code': { icon: 'SiVisualstudiocode', color: '#007ACC', name: 'VS Code' },
  'Postman': { icon: 'SiPostman', color: '#FF6C37', name: 'Postman' },

  // Legacy names for backward compatibility
  React: { icon: 'FaReact', color: '#61DAFB', name: 'React.js' },
  NodeJS: { icon: 'FaNodeJs', color: '#339933', name: 'Node.js' },
  JavaScript: { icon: 'FaJs', color: '#F7DF1E', name: 'JavaScript' },
  MongoDB: { icon: 'SiMongodb', color: '#47A248', name: 'MongoDB' },
  Express: { icon: 'SiExpress', color: '#000000', name: 'Express.js' },
  HTML5: { icon: 'FaHtml5', color: '#E34F26', name: 'HTML5' },
  CSS3: { icon: 'FaCss3Alt', color: '#1572B6', name: 'CSS3' },
  Git: { icon: 'FaGitAlt', color: '#F05032', name: 'Git' },
  VSCode: { icon: 'SiVisualstudiocode', color: '#007ACC', name: 'VS Code' },
  Postman: { icon: 'SiPostman', color: '#FF6C37', name: 'Postman' },
  MaterialUI: { icon: 'SiMui', color: '#007FFF', name: 'Material-UI' },
  NextJS: { icon: 'TbBrandNextjs', color: '#000000', name: 'Next.js' },
  Tailwind: { icon: 'SiTailwindcss', color: '#06B6D4', name: 'Tailwind CSS' },

  // Categories
  Frontend: { icon: 'MdDesignServices', color: '#3B82F6', name: 'Frontend' },
  Backend: { icon: 'FaServer', color: '#10B981', name: 'Backend' },
  Database: { icon: 'FaDatabase', color: '#F59E0B', name: 'Database' },
  Tools: { icon: 'FaTools', color: '#EF4444', name: 'Tools' },
  API: { icon: 'MdApi', color: '#8B5CF6', name: 'API' },
  'REST APIs': { icon: 'MdApi', color: '#8B5CF6', name: 'REST APIs' },
  Agile: { icon: 'MdPeople', color: '#06B6D4', name: 'Agile' },
  Scrum: { icon: 'MdGroups', color: '#F97316', name: 'Scrum' },
  npm: { icon: 'FaCode', color: '#CB3837', name: 'npm' }
};

// Animated tech icons showcase
export const TechIconsShowcase = ({ technologies = [], className = "" }) => {
  return (
    <div className={`flex flex-wrap justify-center gap-4 ${className}`}>
      {technologies.map((tech, index) => {
        // Handle both string and object formats
        const techData = typeof tech === 'string' 
          ? (techStackData[tech] || { icon: 'FaCode', color: '#6B7280', name: tech })
          : tech;
        
        return (
          <div
            key={index}
            className="group flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
            data-aos="zoom-in"
            data-aos-delay={index * 100}
          >
            <TechIcon 
              iconName={techData.icon} 
              color={techData.color}
              size="w-12 h-12"
              className="mb-2 group-hover:scale-110 transition-transform duration-300"
            />
            <span className="text-sm font-medium text-gray-700 text-center">
              {techData.name}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default TechIcon;