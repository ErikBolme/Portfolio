import React, { useState } from 'react';
import { Mail, Github, MapPin, Send, CheckCircle } from 'lucide-react';
import { profileData } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is mock functionality - will be replaced with backend API
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Interested in collaboration, security research, or just want to connect? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-white text-3xl font-semibold mb-8" style={{ letterSpacing: '-0.01em' }}>
              Connect With Me
            </h3>

            {/* Contact Cards */}
            <div className="space-y-6 mb-8">
              {/* Email */}
              <a
                href={`mailto:${profileData.email}`}
                className="block bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/10 border border-purple-600 transition-all duration-400 group-hover:bg-purple-600/20">
                    <Mail size={24} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white text-lg font-medium">{profileData.email}</div>
                  </div>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] group"
              >
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/10 border border-purple-600 transition-all duration-400 group-hover:bg-purple-600/20">
                    <Github size={24} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm uppercase tracking-wider mb-1">GitHub</div>
                    <div className="text-white text-lg font-medium">@ErikBolme</div>
                  </div>
                </div>
              </a>

              {/* Location */}
              <div className="bg-[#121212] border border-white/25 p-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-600/10 border border-purple-600">
                    <MapPin size={24} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                  <div>
                    <div className="text-white/60 text-sm uppercase tracking-wider mb-1">Location</div>
                    <div className="text-white text-lg font-medium">{profileData.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Status Notice */}
            <div className="bg-purple-600/5 border border-purple-600/30 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle size={24} className="text-purple-600 shrink-0 mt-1" strokeWidth={1.5} />
                <div>
                  <div className="text-white text-lg font-semibold mb-2">Open to Opportunities</div>
                  <div className="text-white/70 text-base">
                    Available for internships, security research projects, and collaboration opportunities.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-white text-3xl font-semibold mb-8" style={{ letterSpacing: '-0.01em' }}>
              Send a Message
            </h3>

            {isSubmitted ? (
              <div className="bg-purple-600/10 border border-purple-600 p-8 text-center">
                <CheckCircle size={64} className="text-purple-600 mx-auto mb-4" strokeWidth={1.5} />
                <h4 className="text-white text-2xl font-semibold mb-2">Message Sent!</h4>
                <p className="text-white/70 text-lg">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-white text-base font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121212] border border-white/25 text-white px-4 py-3 text-lg focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="Your Name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white text-base font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121212] border border-white/25 text-white px-4 py-3 text-lg focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label htmlFor="subject" className="block text-white text-base font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121212] border border-white/25 text-white px-4 py-3 text-lg focus:outline-none focus:border-purple-600 transition-colors duration-300"
                    placeholder="What's this about?"
                  />
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-white text-base font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full bg-[#121212] border border-white/25 text-white px-4 py-3 text-lg focus:outline-none focus:border-purple-600 transition-colors duration-300 resize-none"
                    placeholder="Your message..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-3 bg-purple-600 text-black px-8 py-4 text-lg font-medium transition-all duration-400 hover:bg-purple-500 hover:scale-105"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;