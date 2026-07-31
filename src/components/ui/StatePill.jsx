import React, { useEffect, useRef, useState } from 'react';

/**
 * StatePill — Temporal-style workflow state pill.
 * The fill sweeps left-to-right (like a progress bar) when the pill
 * scrolls into view. States: 'running' (indigo, pulsing dot),
 * 'completed' (amber), 'denied' (rose).
 */
const StatePill = ({ state = 'completed', label }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <span ref={ref} className="state-pill" data-state={state} data-visible={visible}>
      <span className="dot" aria-hidden="true"></span>
      {label || state}
    </span>
  );
};

export default StatePill;
