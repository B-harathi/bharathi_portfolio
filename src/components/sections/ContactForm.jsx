import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt, FaLinkedinIn, FaGithub, FaArrowRight } from 'react-icons/fa';
import { personalInfo } from '../../data/personal';
import SectionHeading from '../ui/SectionHeading';

const ContactForm = ({ preview = false }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission (replace with actual form handling)
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1000);
  };

  const handleSocialClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: FaPhone,
      title: 'Phone',
      value: `+91 ${personalInfo.phone}`,
      href: `tel:+91${personalInfo.phone}`,
      color: 'from-green-500 to-teal-500'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Location',
      value: personalInfo.location,
      href: '#',
      color: 'from-blue-500 to-purple-500'
    },
    {
      icon: FaLinkedinIn,
      title: 'LinkedIn',
      value: 'linkedin.com/in/gbharathi',
      href: personalInfo.linkedin,
      color: 'from-blue-600 to-blue-700'
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div data-aos="fade-right">
            <div className="space-y-6">
              {/* Contact Methods */}
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${method.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <method.icon className="text-white w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">{method.title}</h4>
                    <a
                      href={method.href}
                      className="text-gray-600 hover:text-primary-600 transition-colors duration-300"
                      {...(method.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {personalInfo.socialLinks.slice(0, 3).map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.url)}
                    className="social-icon bg-white shadow-md hover:shadow-lg"
                    aria-label={social.name}
                  >
                    {social.icon === 'FaLinkedinIn' && <FaLinkedinIn />}
                    {social.icon === 'FaGithub' && <FaGithub />}
                    {social.icon === 'FaEnvelope' && <FaEnvelope />}
                  </button>
                ))}
              </div>
            </div>

            {/* Additional Info for full contact page */}
            {!preview && (
              <div className="mt-8 p-6 bg-white rounded-xl shadow-lg">
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Why Work With Me?</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    1+ year of professional development experience
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Expertise in MERN stack technologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Strong background in Agile methodologies
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Committed to delivering high-quality solutions
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    Available for full-time opportunities
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Contact Form */}
          <div data-aos="fade-left">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send me a message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="form-textarea"
                    placeholder="Tell me more about your project or inquiry..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full btn-primary ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      Thank you! Your message has been sent successfully. I'll get back to you soon.
                    </div>
                  </div>
                )}
              </form>

              {/* Note */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> This is a styled contact form for portfolio demonstration. 
                  For direct contact, please use the email or LinkedIn links above.
                </p>
              </div>
            </div>
          </div>
        </div>

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
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8" data-aos="fade-up">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">⚡</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Quick Response</h4>
              <p className="text-gray-600 text-sm">I typically respond to emails within 24 hours</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">💼</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Professional Service</h4>
              <p className="text-gray-600 text-sm">Dedicated to delivering high-quality solutions</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">🤝</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Collaborative Approach</h4>
              <p className="text-gray-600 text-sm">Working closely with clients to achieve their goals</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;