import React, { useEffect, useRef, useState } from 'react';
import { projectsData } from '../../data/Projects';
import { certificationsData } from '../../data/certifications';

const Metric = ({ value, suffix = '', label }) => {
  const ref = useRef(null);
  const started = useRef(false);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1300;
          const t0 = performance.now();
          const tick = (now) => {
            const p = Math.min((now - t0) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(Math.round(value * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center px-6 py-10">
      <div className="text-4xl lg:text-5xl font-bold gradient-text tabular-nums" style={{ fontFamily: 'var(--font-display)' }}>
        {display}
        {suffix}
      </div>
      <div
        className="mt-2 text-xs uppercase tracking-widest"
        style={{ color: 'var(--wire-grey)', fontFamily: 'var(--font-mono)' }}
      >
        {label}
      </div>
    </div>
  );
};

const MetricsBand = () => {
  const techCount = Array.from(new Set(projectsData.flatMap((p) => p.technologies))).length;

  const stats = [
    { value: 2, suffix: '', label: 'years experience' },
    { value: projectsData.length, suffix: '+', label: 'projects shipped' },
    { value: techCount, suffix: '+', label: 'technologies' },
    { value: certificationsData.length, suffix: '', label: 'certifications' },
  ];

  return (
    <div
      className="relative"
      style={{
        backgroundColor: 'var(--bg-void)',
        borderTop: '1px solid var(--wire)',
        borderBottom: '1px solid var(--wire)',
      }}
      data-aos="fade-up"
    >
      <div className="container-custom">
        {/* gap-px over a wire background creates crisp hairlines between cells */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px"
          style={{ backgroundColor: 'var(--wire)' }}
        >
          {stats.map((s, i) => (
            <div key={i} style={{ backgroundColor: 'var(--bg-void)' }}>
              <Metric value={s.value} suffix={s.suffix} label={s.label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetricsBand;
