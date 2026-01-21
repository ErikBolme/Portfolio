import React, { useState, useEffect } from 'react';
import { Menu, X, Github } from 'lucide-react';
import { profileData } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'military-experience' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black border-b border-white/25' : 'bg-transparent'
      }`}
      style={{ height: '80px' }}
    >
      <div className="max-w-full px-[7.6923%] h-full flex items-center justify-between">
        {/* Logo/Name */}
        <div
          onClick={() => scrollToSection('home')}
          className="text-white text-xl font-semibold cursor-pointer hover:text-purple-500 transition-colors duration-300"
        >
          {profileData.name.split(' ')[0]}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-white/70 hover:text-white text-lg font-normal transition-colors duration-300"
            >
              {link.name}
            </button>
          ))}
          <a
            href={profileData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 inline-flex items-center gap-2 bg-purple-600 text-black px-6 py-3 text-lg font-medium transition-all duration-400 hover:bg-purple-500 hover:scale-105"
          >
            <Github size={20} />
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-white p-2"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black border-b border-white/25">
          <nav className="flex flex-col px-[7.6923%] py-6 gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-white/70 hover:text-white text-lg font-normal transition-colors duration-300 text-left"
              >
                {link.name}
              </button>
            ))}
            <a
              href={profileData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-purple-600 text-black px-6 py-3 text-lg font-medium transition-all duration-400 hover:bg-purple-500 mt-2"
            >
              <Github size={20} />
              GitHub
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;