import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { skillsData } from '../../data/skills';
import SectionHeading from '../ui/SectionHeading';

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-');

const SkillsSection = ({ preview = false }) => {
  const namespaces = skillsData.technical; // [{ category, skills[] }]
  const [active, setActive] = useState(0);
  const [widths, setWidths] = useState({});

  // Animate the bars (0 -> level) every time the namespace changes
  useEffect(() => {
    const cat = namespaces[active];
    const reset = {};
    cat.skills.forEach((s) => { reset[s.name] = 0; });
    setWidths(reset);
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const full = {};
        cat.skills.forEach((s) => { full[s.name] = s.level; });
        setWidths(full);
      });
    });
    return () => cancelAnimationFrame(raf1);
  }, [active, namespaces]);

  const activeCat = namespaces[active];
  const expertise = preview ? skillsData.expertise.slice(0, 3) : skillsData.expertise;
  const allTech = preview
    ? namespaces.flatMap((c) => c.skills).slice(0, 8).map((s) => s.name)
    : namespaces.flatMap((c) => c.skills).map((s) => s.name);

  const handleTab = useCallback((i) => setActive(i), []);

  return (
    <section className={`section-padding ${preview ? '' : 'pt-24'}`} style={{ backgroundColor: 'var(--bg-void)' }}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Skills"
          title="Skills & Technologies"
          description={preview ? "A live manifest of the stack I work with — switch namespaces to inspect each layer" : "Every tool I reach for is logged here. Click a namespace to inspect each layer of the stack."}
          className="mb-16"
        />

        {/* ======== Runtime manifest terminal ======== */}
        <div className="access-console" data-aos="fade-up">
          <div className="access-console__bar">
            <div className="access-console__dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <span className="access-console__title">skills · runtime manifest</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12">
            {/* Namespace sidebar */}
            <div
              className="md:col-span-4 lg:col-span-3 p-4 border-b md:border-b-0 md:border-r"
              style={{ borderColor: 'var(--wire)' }}
            >
              <div className="manifest-nav flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible">
                {namespaces.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => handleTab(i)}
                    className={`manifest-tab ${active === i ? 'active' : ''}`}
                    aria-pressed={active === i}
                  >
                    <span className="prompt">{active === i ? '▸' : ' '}</span>
                    <span>{slug(cat.category)}</span>
                    <span className="count">{cat.skills.length}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Skill rows */}
            <div className="md:col-span-8 lg:col-span-9 p-4 md:p-5">
              <p className="access-log-dim mb-3" style={{ fontFamily: 'var(--font-mono)' }}>
                {'$ cat '}{slug(activeCat.category)}.manifest
              </p>

              <div key={active}>
                {activeCat.skills.map((skill) => (
                  <div key={skill.name} className="skill-row" title={skill.description}>
                    <span className="skill-dot" style={{ backgroundColor: skill.color }} aria-hidden="true" />
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-leader" aria-hidden="true" />
                    <span className="skill-track" style={{ width: 'min(150px, 32vw)' }}>
                      <span className="skill-fill" style={{ width: `${widths[skill.name] ?? 0}%` }} />
                    </span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                ))}
              </div>

              <p className="access-log-dim mt-3" style={{ fontFamily: 'var(--font-mono)' }}>
                total: {activeCat.skills.length} packages · {namespaces.length} namespaces
              </p>
            </div>
          </div>
        </div>

        {/* ======== env · expertise ======== */}
        <div className="mt-16" data-aos="fade-up">
          <h3 className="heading-tertiary text-center mb-10">
            <span className="access-log-dim">env</span> · expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((area, i) => (
              <div key={i} className="card p-6" style={{ fontFamily: 'var(--font-mono)' }}>
                <div className="flex items-baseline justify-between gap-4 mb-3">
                  <span className="text-sm uppercase tracking-wider" style={{ color: 'var(--signal-white)' }}>
                    {area.area}
                  </span>
                  <span className="gradient-text font-semibold">{area.percentage}%</span>
                </div>
                <span className="skill-track w-full mb-3">
                  <span className="skill-fill" style={{ width: `${area.percentage}%` }} />
                </span>
                <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ======== runtime deps (tech stack) ======== */}
        {!preview && (
          <div className="mt-16" data-aos="fade-up">
            <h3 className="heading-tertiary text-center mb-10">runtime deps</h3>
            <div className="access-console">
              <div className="access-console__bar">
                <div className="access-console__dots" aria-hidden="true">
                  <span></span><span></span><span></span>
                </div>
                <span className="access-console__title">dependencies.json</span>
              </div>
              <div className="access-console__body">
                <p className="access-log-dim mb-3" style={{ fontFamily: 'var(--font-mono)' }}>{'{'}</p>
                <div className="flex flex-wrap gap-2 pl-4 pb-2">
                  {allTech.map((t) => (
                    <span key={t} className="tag-pill">{t}</span>
                  ))}
                </div>
                <p className="access-log-dim" style={{ fontFamily: 'var(--font-mono)' }}>{'}'}</p>
              </div>
            </div>
          </div>
        )}

        {/* CTA for Preview */}
        {preview && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Link to="/skills" className="btn-primary group">
              View All Skills
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;