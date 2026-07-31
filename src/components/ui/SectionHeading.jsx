import React from 'react';

const SectionHeading = ({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  gradient = false,
  showDivider = true,
  className = "" 
}) => {
  return (
    <div className={`${centered ? 'text-center' : 'text-left'} ${className}`} data-aos="fade-up">
      {/* Mono eyebrow label — e.g. "// experience" */}
      {subtitle && (
        <div className={`eyebrow mb-4 ${centered ? 'justify-center' : ''}`}>{subtitle}</div>
      )}

      {/* Main Title */}
      <h2 className={`heading-secondary mb-4 ${gradient ? 'gradient-text' : ''}`}>
        {title}
      </h2>

      {/* Hairline divider with a short amber segment */}
      {showDivider && (
        <div className={`flex items-center gap-2 ${centered ? 'justify-center' : ''} mb-4`}>
          <div className="w-16 h-px" style={{ backgroundColor: 'var(--wire)' }}></div>
          <div className="w-8 h-px" style={{ backgroundColor: 'var(--grant-amber)' }}></div>
        </div>
      )}

      {/* Description */}
      {description && (
        <p className={`text-large max-w-3xl ${centered ? 'mx-auto' : ''}`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;