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
      </div>
    </section>
  );
};

export default About;
