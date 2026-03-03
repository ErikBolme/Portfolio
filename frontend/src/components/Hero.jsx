import React, { useState, useEffect } from 'react';
import { ArrowRight, Mail } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = profileData.title;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 60);

    return () => clearInterval(timer);
  }, [fullText]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff calc(1px + 1px)), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%'
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-[7.6923%] text-center">
        <div className="flex justify-center mb-8 animate-fade-in">
          <img
            src="/logo.png"
            alt="Cybersecurity Logo"
            className="h-32 w-auto object-contain"
          />
        </div>

        <h1
          className="text-white font-semibold mb-4 animate-fade-in-up"
          style={{
            fontSize: 'clamp(48px, 8vw, 66px)',
            lineHeight: '1.1',
            letterSpacing: '-0.62px'
          }}
        >
          {profileData.name}
        </h1>

        <h2
          className="text-white/85 font-medium mb-6"
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            minHeight: 'clamp(30px, 5vw, 40px)'
          }}
        >
          <span className={showCursor ? 'typing-cursor' : ''}>
            {displayText}
          </span>
        </h2>

        <p
          className="text-purple-600 font-semibold tracking-wider mb-10 animate-fade-in-up"
          style={{
            fontSize: '20px',
            letterSpacing: '0.15em',
            animationDelay: '0.2s'
          }}
        >
          {profileData.tagline}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('skills')}
            className="inline-flex items-center justify-between gap-3 bg-purple-600 text-black px-8 py-4 text-lg font-medium transition-all duration-400 hover:bg-purple-500 hover:scale-105 min-w-[200px]"
          >
            <span>View Skills</span>
            <ArrowRight size={20} />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-between gap-3 bg-white/10 text-white px-8 py-4 text-lg font-medium transition-all duration-400 hover:bg-white hover:text-black min-w-[200px]"
          >
            <Mail size={20} />
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
