import React from 'react';
import { Shield, Target, Lock, Search, Code } from 'lucide-react';
import { aboutData } from '../data/mock';

const About = () => {
  const focusIcons = [Shield, Target, Lock, Search, Code];

  return (
    <section id="about" className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        {/* Main Description */}
        <div className="bg-[#121212] border border-white/25 p-12 mb-12">
          <p className="text-white/85 text-xl leading-relaxed mb-8">
            {aboutData.description}
          </p>
          <p className="text-white/70 text-lg leading-relaxed">
            {aboutData.experience}
          </p>
        </div>

        {/* Security Focus Areas */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-8" style={{ letterSpacing: '-0.01em' }}>
            Security Focus Areas
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {aboutData.focus.map((area, index) => {
              const Icon = focusIcons[index % focusIcons.length];
              return (
                <div
                  key={index}
                  className="bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-purple-600/10 border border-purple-600 shrink-0 transition-all duration-400 group-hover:bg-purple-600/20">
                      <Icon size={24} className="text-purple-600" strokeWidth={1.5} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white text-lg font-medium leading-tight">{area}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-purple-600/5 border border-purple-600/30 p-8">
          <div className="flex items-start gap-4">
            <Shield size={32} className="text-purple-600 shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-white text-xl font-semibold mb-3">Ethical Hacking Commitment</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                All security research and penetration testing activities are conducted within legal boundaries and ethical guidelines. 
                I believe in responsible disclosure and using security knowledge to protect and improve systems, not to harm them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;