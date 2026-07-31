import React, { useState, useRef, useEffect, useCallback } from 'react';
import { personalInfo } from '../../data/personal';
import { skillsData } from '../../data/skills';
import { experienceData } from '../../data/experience';
import { projectsData } from '../../data/Projects';
import SectionHeading from '../ui/SectionHeading';

const COMMANDS = ['help', 'whoami', 'about', 'skills', 'experience', 'projects', 'contact', 'clear'];

const InteractiveTerminal = () => {
  const [lines, setLines] = useState(() => [
    { type: 'output', text: 'Welcome to bharathi@terminal' },
    { type: 'output', text: "Type 'help' to see available commands." },
  ]);
  const [input, setInput] = useState('');
  const [history, setHistory] = useState([]);
  const [histIndex, setHistIndex] = useState(-1);

  const bodyRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll to the newest line
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [lines]);

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    const next = [{ type: 'input', text: raw.trim() }];

    if (cmd === '') {
      // just an empty prompt
    } else if (cmd === 'help') {
      next.push({ type: 'output', text: 'available commands:' });
      COMMANDS.filter((c) => c !== 'help').forEach((c) =>
        next.push({ type: 'output', text: `  ▸ ${c}` })
      );
    } else if (cmd === 'whoami') {
      next.push({ type: 'output', text: `${personalInfo.name.toLowerCase()} — ${personalInfo.subtitle}` });
    } else if (cmd === 'about') {
      next.push({ type: 'output', text: personalInfo.bio.short });
    } else if (cmd === 'skills') {
      const stack = skillsData.technical.flatMap((c) => c.skills).map((s) => s.name);
      next.push({ type: 'output', text: stack.join(' · ') });
    } else if (cmd === 'experience') {
      experienceData.forEach((e) =>
        next.push({ type: 'output', text: `  ${e.title} @ ${e.company} (${e.duration})` })
      );
    } else if (cmd === 'projects') {
      projectsData.forEach((p) =>
        next.push({ type: 'output', text: `  ${p.title} — ${p.status}` })
      );
    } else if (cmd === 'contact') {
      next.push({ type: 'output', text: `  email: ${personalInfo.email}` });
      next.push({ type: 'output', text: `  location: ${personalInfo.location}` });
      next.push({ type: 'output', text: `  linkedin: ${personalInfo.linkedin}` });
    } else if (cmd === 'clear') {
      setLines([]);
      return;
    } else {
      next.push({ type: 'error', text: `command not found: ${raw.trim()} — try 'help'` });
    }

    setLines((prev) => [...prev, ...next]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setHistory((prev) => [input, ...prev].slice(0, 50));
    setHistIndex(-1);
    const raw = input;
    setInput('');
    runCommand(raw);
  };

  const handleArrowKeys = (e) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      const next = Math.min(histIndex + 1, history.length - 1);
      if (history[next] !== undefined) {
        setHistIndex(next);
        setInput(history[next]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      const next = Math.max(histIndex - 1, -1);
      setHistIndex(next);
      setInput(next === -1 ? '' : history[next]);
    }
  };

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  return (
    <section className="section-padding pt-24" style={{ backgroundColor: 'var(--bg-void)' }}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Playground"
          title="Interactive Terminal"
          description="This portfolio is a terminal at heart — try a command. help · whoami · about · skills · experience · projects · contact · clear"
          className="mb-16"
        />

        <div
          className="access-console"
          data-aos="fade-up"
          onClick={focusInput}
          role="application"
          aria-label="Interactive portfolio terminal"
        >
          <div className="access-console__bar">
            <div className="access-console__dots" aria-hidden="true">
              <span></span><span></span><span></span>
            </div>
            <span className="access-console__title">terminal · interactive</span>
          </div>

          <div className="access-console__body h-72 overflow-y-auto" ref={bodyRef}>
            {lines.map((line, i) => (
              <div key={i} className="access-console__line">
                {line.type === 'input' ? (
                  <>
                    <span className="access-log-allowed">guest@bharathi:~$</span>
                    <span className="access-log-dim">{line.text}</span>
                  </>
                ) : line.type === 'error' ? (
                  <span className="access-log-denied">{line.text}</span>
                ) : (
                  <span className="access-log-dim">{line.text}</span>
                )}
              </div>
            ))}

            {/* Active prompt */}
            <form onSubmit={handleSubmit} className="access-console__line">
              <span className="access-log-allowed">guest@bharathi:~$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleArrowKeys}
                className="flex-1 min-w-0 bg-transparent outline-none"
                style={{
                  color: 'var(--signal-white)',
                  fontFamily: 'inherit',
                  fontSize: 'inherit',
                  border: 'none',
                  caretColor: 'var(--grant-amber)',
                }}
                aria-label="Type a terminal command"
                autoComplete="off"
                autoCapitalize="off"
                autoCorrect="off"
                spellCheck={false}
              />
              <span className="access-console__cursor" aria-hidden="true"></span>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTerminal;
