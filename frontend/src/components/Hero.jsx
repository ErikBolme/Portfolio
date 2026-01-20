import React from 'react';
import { Shield, ArrowRight, Mail } from 'lucide-react';
import { profileData } from '../data/mock';

const Hero = () => {
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
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden"
      style={{ paddingTop: '80px' }}
    >
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            'repeating-linear-gradient(0deg, transparent, transparent 1px, #fff 1px, #fff calc(1px + 1px)), repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)',
          backgroundSize: '100% 100%'
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-[7.6923%] text-center">
        {/* Shield Icon */}
        <div className="flex justify-center mb-8 animate-fade-in">
          <div className="p-6 bg-purple-600/10 border-2 border-purple-600 inline-block">
            <Shield size={64} className="text-purple-600" strokeWidth={1.5} />
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

        {/* Title */}
        <h2
          className="text-white/85 font-medium mb-6 animate-fade-in-up"
          style={{
            fontSize: 'clamp(24px, 4vw, 32px)',
            lineHeight: '1.25',
            letterSpacing: '-0.01em',
            animationDelay: '0.1s'
          }}
        >
          {profileData.title}
        </h2>

        {/* Tagline */}
        <p
          className="text-purple-600 font-semibold tracking-wider mb-8 animate-fade-in-up"
          style={{
            fontSize: '20px',
            letterSpacing: '0.15em',
            animationDelay: '0.2s'
          }}
        >
          {profileData.tagline}
        </p>

        {/* Bio */}
        <p
          className="text-white/70 max-w-3xl mx-auto mb-12 animate-fade-in-up"
          style={{
            fontSize: '20px',
            lineHeight: '1.6',
            animationDelay: '0.3s'
          }}
        >
          {profileData.bio}
        </p>

        {/* CTA Buttons */}
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