import React from 'react';
import { Github, Mail, Heart } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-black border-t border-white/25 py-12 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand/Name */}
          <div>
            <h3 className="text-white text-2xl font-semibold mb-4">
              {profileData.name.split(' ')[0]}
            </h3>
            <p className="text-white/60 text-base leading-relaxed">
              Cybersecurity student passionate about ethical hacking and security research.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      if (element) {
                        const offset = 80;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - offset;
                        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      }
                    }}
                    className="text-white/60 hover:text-purple-600 transition-colors duration-300 text-base"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 border border-white/25 text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-400"
                aria-label="GitHub"
              >
                <Github size={24} strokeWidth={1.5} />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-3 bg-white/10 border border-white/25 text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-400"
                aria-label="Email"
              >
                <Mail size={24} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/25 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-purple-600 fill-purple-600" />
            <span>by {profileData.name.split(' ')[0]}</span>
          </div>
          <button
            onClick={scrollToTop}
            className="text-white/60 hover:text-purple-600 transition-colors duration-300 text-sm uppercase tracking-wider"
          >
            Back to Top ↑
          </button>
        </div>

        {/* Ethical Notice */}
        <div className="mt-8 text-center">
          <p className="text-white/40 text-xs uppercase tracking-wider">
            All security research conducted ethically and legally
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;