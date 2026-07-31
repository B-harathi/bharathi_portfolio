import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

const ContactForm = ({ preview = false }) => {
  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: `+91 ${personalInfo.phone}`,
      href: `tel:+91${personalInfo.phone}`
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: personalInfo.location,
      href: null
    },
    {
      icon: FaLinkedinIn,
      title: 'LinkedIn',
      value: 'linkedin.com/in/gbharathi',
      href: personalInfo.linkedin
    }
  ];

  return (
    <section className={`section-padding bg-gray-50 ${preview ? '' : 'pt-24'}`}>
      <div className="container-custom">
        <SectionHeading
          subtitle="Get In Touch"
          title="Let's Work Together"
          description={preview ? "Ready to start your next project? Let's discuss how I can help bring your ideas to life." : "I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development."}
          className="mb-16"
        />

        {/* Contact methods — aligned cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-aos="fade-up">
          {contactMethods.map((method, index) => (
            <div key={index} className="card p-6 text-center group">
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--grant-amber)' }}
              >
                <method.icon className="w-5 h-5" />
              </div>
              <h4 className="font-semibold mb-1" style={{ color: 'var(--signal-white)' }}>{method.title}</h4>
              {method.href ? (
                <a
                  href={method.href}
                  className="text-sm inline-block break-all"
                  style={{ color: 'var(--wire-grey)' }}
                  {...(method.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {method.value}
                </a>
              ) : (
                <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>{method.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Why Work With Me + Follow Me (full page) */}
        {!preview && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 items-stretch" data-aos="fade-up">
            <div className="card p-8">
              <h3 className="heading-tertiary mb-6">Why Work With Me?</h3>
              <ul className="space-y-3">
                {[
                  '2 years of professional development experience',
                  'Expertise in MERN stack technologies',
                  'Strong background in Agile methodologies',
                  'Committed to delivering high-quality solutions',
                  'Available for full-time opportunities'
                ].map((reason, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span
                      className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                      style={{ backgroundColor: 'rgba(232,163,61,0.14)', color: 'var(--grant-amber)' }}
                    >
                      ✓
                    </span>
                    <span style={{ color: 'var(--wire-grey)' }}>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card p-8 flex flex-col justify-center items-center text-center">
              <h3 className="heading-tertiary mb-2">Follow Me</h3>
              <p className="text-sm mb-6" style={{ color: 'var(--wire-grey)' }}>
                Let's connect on the platforms where I share what I build.
              </p>
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
        )}

        {/* CTA for Preview */}
        {preview && (
          <div className="text-center mt-12" data-aos="fade-up">
            <Link
              to="/contact"
              className="btn-primary group"
            >
              Get In Touch
              <FaArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        )}

        {/* Response Time Info (only show in full contact page) */}
        {!preview && (
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6" data-aos="fade-up">
            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--grant-amber)' }}
              >
                <span className="text-2xl">⚡</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--signal-white)' }}>Quick Response</h4>
              <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>I typically respond to emails within 24 hours</p>
            </div>

            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--grant-amber)' }}
              >
                <span className="text-2xl">💼</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--signal-white)' }}>Professional Service</h4>
              <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>Dedicated to delivering high-quality solutions</p>
            </div>

            <div className="card p-6 text-center">
              <div
                className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: 'var(--surface-raised)', color: 'var(--grant-amber)' }}
              >
                <span className="text-2xl">🤝</span>
              </div>
              <h4 className="font-semibold mb-2" style={{ color: 'var(--signal-white)' }}>Collaborative Approach</h4>
              <p className="text-sm" style={{ color: 'var(--wire-grey)' }}>Working closely with clients to achieve their goals</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;