import React, { useEffect, useState } from 'react';

/**
 * AccessLog — the signature element of the design system.
 * A thin console that "types" simulated authorization/infra checks
 * one line at a time, then loops. ALLOW/OK/200 lines are amber,
 * DENY lines are rose, everything else muted.
 *
 * Reduced-motion / JS-off-safe: renders all lines statically.
 */

const LOG_LINES = [
  { method: 'POST',   path: '/v1/policy/evaluate',                              tenant: 'tenant:acme',    result: 'ALLOW', ms: '12ms' },
  { method: 'GET',    path: '/v1/resource/847',                                 tenant: 'tenant:globex',  result: 'ALLOW', ms: '4ms'  },
  { method: 'POST',   path: '/v1/policy/evaluate',                              tenant: 'tenant:initech', result: 'DENY',  ms: '9ms'  },
  { method: 'POST',   path: '/realms/acme/protocol/openid-connect/token',       tenant: 'issuer:keycloak', result: '200',   ms: '34ms' },
  { method: 'SELECT', path: 'FROM tenants WHERE id = $1',                       tenant: 'db:postgres',    result: 'OK',    ms: '18ms' },
];

const lineText = (l) =>
  `${l.method.padEnd(7)}${l.path.padEnd(48)}${l.tenant.padEnd(22)}${l.result.padEnd(8)}${l.ms}`;

const usePrefersReducedMotion = () => {
  const [reduced, setReduced] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handler = () => setReduced(mq.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return reduced;
};

const StaticLine = ({ line }) => (
  <div className="access-console__line">
    <span className="access-log-dim">{line.method}</span>
    <span className="access-log-dim">{line.path}</span>
    <span className="access-log-dim">{line.tenant}</span>
    <span className={line.result === 'DENY' ? 'access-log-denied' : 'access-log-allowed'}>{line.result}</span>
    <span className="access-log-dim">{line.ms}</span>
  </div>
);

const AccessLog = () => {
  const reduced = usePrefersReducedMotion();
  const [doneCount, setDoneCount] = useState(0);
  const [current, setCurrent] = useState('');

  // Ambient typing loop: type line by line, hold, then restart.
  useEffect(() => {
    if (reduced) return undefined;
    let cancelled = false;
    let t;

    if (doneCount >= LOG_LINES.length) {
      // all lines visible → hold, then loop
      t = setTimeout(() => {
        if (!cancelled) {
          setDoneCount(0);
          setCurrent('');
        }
      }, 3400);
    } else {
      const full = lineText(LOG_LINES[doneCount]);
      if (current.length < full.length) {
        t = setTimeout(() => {
          if (!cancelled) setCurrent(full.slice(0, current.length + 1));
        }, 20);
      } else {
        t = setTimeout(() => {
          if (!cancelled) {
            setDoneCount((d) => d + 1);
            setCurrent('');
          }
        }, 220);
      }
    }

    return () => {
      cancelled = true;
      clearTimeout(t);
    };
  }, [current, doneCount, reduced]);

  const doneLines = LOG_LINES.slice(0, doneCount);
  const activeLine = doneCount < LOG_LINES.length ? LOG_LINES[doneCount] : null;

  return (
    <div className="access-console" role="log" aria-label="Simulated authorization access log">
      <div className="access-console__bar">
        <div className="access-console__dots" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <span className="access-console__title">authz · access log</span>
      </div>
      <div className="access-console__body">
        {reduced ? (
          LOG_LINES.map((line, i) => <StaticLine key={i} line={line} />)
        ) : (
          <>
            {doneLines.map((line, i) => (
              <StaticLine key={i} line={line} />
            ))}
            {activeLine && (
              <div className="access-console__line" aria-hidden="true">
                <span className="access-log-dim">{current}</span>
                <span className="access-console__cursor" />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AccessLog;
