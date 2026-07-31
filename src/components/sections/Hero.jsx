import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FaDownload, FaArrowRight, FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';

const Hero = () => {
  const downloadResume = useCallback(() => {
    const link = document.createElement('a');
    link.href = personalInfo.resume;
    link.download = 'Bharathi_G_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }, []);

  const handleSocialClick = useCallback((url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  }, []);

  const stack = ['react', 'next', 'node', 'nestjs', 'postgres', 'docker', 'keycloak', 'temporal', 'mongodb'];
  const stats = [
    { value: '2', label: 'years experience' },
    { value: '3+', label: 'projects shipped' },
    { value: '15+', label: 'technologies' },
  ];

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-24 lg:pt-28"
      style={{ backgroundColor: 'var(--bg-void)' }}
    >
      {/* Animated background: drifting data grid + slowly moving glows */}
      <div className="hero-grid" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-1" aria-hidden="true"></div>
      <div className="hero-glow hero-glow-2" aria-hidden="true"></div>

      <div className="container-custom section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: identity */}
          <div className="lg:col-span-7" data-aos="fade-up">
            <div>
              <p className="eyebrow mb-5">full-stack developer</p>
              <h1 className="heading-primary mb-4">
                <span className="block" style={{ color: 'var(--signal-white)' }}>{personalInfo.name}</span>
                <span className="block gradient-text">{personalInfo.subtitle}</span>
              </h1>
              <p className="text-large max-w-xl mb-10">{personalInfo.bio.short}</p>

              {/* CTA buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/projects" className="btn-primary group">
                  View My Work
                  <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
                <button onClick={downloadResume} className="btn-secondary group">
                  <FaDownload className="mr-2 w-4 h-4 group-hover:translate-y-0.5 transition-transform duration-300" />
                  Download Resume
                </button>
              </div>

              {/* Socials */}
              <div className="flex space-x-4">
                {personalInfo.socialLinks.slice(0, 3).map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className="social-icon"
                    aria-label={social.name}
                  >
                    {social.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
                    {social.icon === 'FaGithub' && <FaGithub />}
                    {social.icon === 'FaEnvelope' && <FaEnvelope />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: photo frame + compact system identity */}
          <div className="lg:col-span-5" data-aos="fade-up" data-aos-delay="120">
            {/* Bio-scan photo frame */}
            <div className="photo-frame aspect-[3/4]">
              <img
                src="/images/hero_image.png"
                alt={`${personalInfo.name} — ${personalInfo.subtitle}`}
              />
              <div className="photo-scan-lines" aria-hidden="true"></div>
              <div className="photo-scan" aria-hidden="true"></div>
              <div className="photo-corners" aria-hidden="true">
                <span></span><span></span><span></span><span></span>
              </div>
              <div className="photo-status">
                <span className="dot" aria-hidden="true"></span>
                <span>identity: <b>{personalInfo.name.toLowerCase()}</b> · verified</span>
              </div>
            </div>

            {/* Compact system identity */}
            <div className="card p-6 mt-6" style={{ fontFamily: 'var(--font-mono)' }}>
              <div className="space-y-2 text-sm">
                <p style={{ color: 'var(--wire-grey)' }}>$ whoami</p>
                <p style={{ color: 'var(--signal-white)' }}>
                  {personalInfo.name.toLowerCase()} · {personalInfo.subtitle}
                </p>

                <p style={{ color: 'var(--wire-grey)' }}>$ status</p>
                <p style={{ color: 'var(--grant-amber)' }} className="uppercase tracking-wider">
                  open to opportunities
                </p>

                <p style={{ color: 'var(--wire-grey)' }}>$ stack</p>
                <div className="flex flex-wrap gap-2">
                  {stack.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <p style={{ color: 'var(--wire-grey)' }}>$ location</p>
                <p style={{ color: 'var(--signal-white)' }}>{personalInfo.location}</p>
              </div>

              {/* Stats as log rows */}
              <div className="mt-5 pt-5 space-y-2" style={{ borderTop: '1px solid var(--wire)' }}>
                {stats.map((stat, i) => (
                  <div key={i} className="flex items-baseline justify-between text-sm">
                    <span className="access-log-dim">{'0' + (i + 1)} {stat.label}</span>
                    <span className="gradient-text font-semibold">{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span
          className="text-xs tracking-widest uppercase"
          style={{ color: 'var(--wire-grey)', fontFamily: 'var(--font-mono)' }}
        >
          scroll
        </span>
        <div className="w-5 h-8 border rounded-full flex justify-center" style={{ borderColor: 'var(--wire)' }}>
          <div className="w-1 h-2.5 rounded-full mt-1.5 animate-bounce" style={{ backgroundColor: 'var(--grant-amber)' }}></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;