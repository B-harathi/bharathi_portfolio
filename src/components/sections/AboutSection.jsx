import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

const AboutSection = ({ preview = false }) => {
  const softSkillsPreview = personalInfo.softSkills.slice(0, 4);
  const interestsPreview = personalInfo.interests.slice(0, 6);

  const facts = [
    { key: 'role', value: personalInfo.title },
    { key: 'location', value: personalInfo.location },
    { key: 'experience', value: '2 years' },
    { key: 'focus', value: 'fintech · billing systems' },
    { key: 'stack', value: 'mern · nest · postgres · docker' },
    { key: 'status', value: 'open to opportunities' },
  ];

  return (
    <section className={`section-padding ${preview ? '' : 'pt-24'}`} style={{ backgroundColor: 'var(--surface-panel)' }}>
      <div className="container-custom">
        <SectionHeading
          subtitle="About"
          title="About Me"
          description={preview ? "A profile of the engineer behind the console" : "The engineer behind the console — a quick system dump."}
          className="mb-16"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio inside a terminal window */}
          <div className="access-console" data-aos="fade-up">
            <div className="access-console__bar">
              <div className="access-console__dots" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <span className="access-console__title">~/about.md</span>
            </div>
            <div className="access-console__body">
              <p className="access-log-dim mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                {'$ cat ~/about.md'}
              </p>
              <div className="space-y-4">
                <p style={{ color: 'var(--signal-white)' }} className="text-base leading-relaxed">
                  {personalInfo.bio.long}
                </p>
                {!preview && (
                  <p style={{ color: 'var(--signal-white)' }} className="text-base leading-relaxed">
                    {personalInfo.bio.passion}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Right: key-value profile + soft skills + interests */}
          <div data-aos="fade-up" data-aos-delay="120">
            <div className="card p-6 lg:p-8" style={{ fontFamily: 'var(--font-mono)' }}>
              <p className="access-log-dim mb-4">{'$ cat ~/profile.json'}</p>

              <div className="space-y-2">
                {facts.map((f, i) => (
                  <div key={i} className="flex items-baseline gap-4 text-sm">
                    <span className="access-log-dim flex-shrink-0 w-28">{`"${f.key}":`}</span>
                    <span className="access-log-allowed break-words">{f.value}</span>
                  </div>
                ))}
              </div>

              {/* Soft skills */}
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--wire)' }}>
                <p className="access-log-dim mb-3">{'$ soft_skills'}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {(preview ? softSkillsPreview : personalInfo.softSkills).map((skill, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm" style={{ color: 'var(--signal-white)' }}>
                      <span className="skill-dot" style={{ backgroundColor: 'var(--grant-amber)' }} aria-hidden="true" />
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              {/* Interests */}
              <div className="mt-6 pt-6" style={{ borderTop: '1px solid var(--wire)' }}>
                <p className="access-log-dim mb-3">{'$ interests'}</p>
                <div className="flex flex-wrap gap-2">
                  {(preview ? interestsPreview : personalInfo.interests).map((interest, i) => (
                    <span key={i} className="tag-pill">{interest}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Education as a log */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-10">
              <span className="access-log-dim">history</span> · education
            </h3>
            <div className="access-console">
              <div className="access-console__bar">
                <div className="access-console__dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <span className="access-console__title">education.log</span>
              </div>
              <div className="access-console__body">
                <p className="access-log-dim mb-3">{'$ history --education'}</p>
                <div className="space-y-4">
                  {personalInfo.education.map((edu, i) => (
                    <div key={i} className="skill-row">
                      <span className="access-log-dim">{`#${i + 1}`}</span>
                      <div className="flex-1 min-w-0">
                        <p style={{ color: 'var(--signal-white)' }} className="text-sm">{edu.degree}</p>
                        <p className="access-log-dim text-sm">{edu.institution} · {edu.location}</p>
                      </div>
                      <div className="text-right flex-shrink-0">
                        <p className="access-log-allowed text-sm">{edu.cgpa || edu.percentage}</p>
                        <p className="access-log-dim text-sm">{edu.year}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Languages */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-10">languages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {personalInfo.languages.map((lang, i) => (
                <div key={i} className="card p-6" style={{ fontFamily: 'var(--font-mono)' }}>
                  <div className="flex items-baseline justify-between gap-4 mb-3">
                    <span style={{ color: 'var(--signal-white)' }} className="uppercase tracking-wider text-sm">
                      {lang.name}
                    </span>
                    <span className="access-log-allowed text-sm uppercase">{lang.proficiency}</span>
                  </div>
                  <p className="access-log-dim text-sm">{lang.skills.join(' · ')}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA for preview */}
        {preview && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/about" className="btn-primary group">
              Read the full profile
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutSection;