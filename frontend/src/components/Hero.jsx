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
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 50%, rgba(139,92,246,0.08) 0%, transparent 60%)'
        }}
      />

      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      {/* Top and bottom fade edges */}
      <div
        className="absolute top-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to bottom, #000 0%, transparent 100%)' }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-32"
        style={{ background: 'linear-gradient(to top, #000 0%, transparent 100%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-[7.6923%] text-center">
        {/* Logo with glow */}
        <div className="flex justify-center mb-10 animate-fade-in">
          <div className="relative">
            <div
              className="absolute inset-0 blur-2xl opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.6) 0%, transparent 70%)' }}
            />
            <img
              src="/logo.png"
              alt="Cybersecurity Logo"
              className="relative h-48 md:h-56 w-auto object-contain drop-shadow-[0_0_30px_rgba(139,92,246,0.4)]"
            />
          </div>
        </div>

        {/* Name */}
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

        {/* Typing title */}
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

        {/* Divider line */}
        <div className="flex justify-center mb-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
          <div className="w-24 h-[2px] bg-gradient-to-r from-transparent via-purple-600 to-transparent"></div>
        </div>

        {/* Tagline */}
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

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <button
            onClick={() => scrollToSection('skills')}
            className="inline-flex items-center justify-between gap-3 bg-purple-600 text-black px-8 py-4 text-lg font-medium transition-all duration-400 hover:bg-purple-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.4)] min-w-[200px]"
          >
            <span>View Skills</span>
            <ArrowRight size={20} />
          </button>
          
          <button
            onClick={() => scrollToSection('contact')}
            className="inline-flex items-center justify-between gap-3 bg-white/10 text-white border border-white/20 px-8 py-4 text-lg font-medium transition-all duration-400 hover:bg-white hover:text-black min-w-[200px]"
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
