import React from 'react';
import { Code, Shield, Database, Activity } from 'lucide-react';
import { skillsData } from '../data/mock';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technical competencies developed through academic coursework and hands-on security labs
          </p>
        </div>

        {/* Programming Languages */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Code size={28} className="text-purple-600" strokeWidth={1.5} />
            <h3 className="text-white text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
              Programming Languages
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.programmingLanguages.map((lang, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
                <h4 className="text-white text-xl font-semibold mb-3">{lang.name}</h4>
                <p className="text-white/70 text-base">{lang.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Tools */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield size={28} className="text-purple-600" strokeWidth={1.5} />
            <h3 className="text-white text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
              Security Tools & Technologies
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skillsData.securityTools.map((tool, index) => (
              <div
                key={index}
                className="bg-[#121212] border border-white/25 p-5 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]"
              >
                <h4 className="text-white text-lg font-medium mb-2">{tool.name}</h4>
                <p className="text-purple-600 text-sm font-normal">{tool.category}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Database */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Database size={28} className="text-purple-600" strokeWidth={1.5} />
            <h3 className="text-white text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
              Database Systems
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.databases.map((db, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
                <h4 className="text-white text-xl font-semibold mb-3">{db.name}</h4>
                <p className="text-white/70 text-base">{db.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Methodologies */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Activity size={28} className="text-purple-600" strokeWidth={1.5} />
            <h3 className="text-white text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
              Frameworks & Methodologies
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.frameworks.map((framework, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6">
                <h4 className="text-white text-xl font-semibold mb-3">{framework.name}</h4>
                <p className="text-white/70 text-base">{framework.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Security Focus Keywords */}
        <div>
          <h3 className="text-white text-3xl font-semibold mb-8" style={{ letterSpacing: '-0.01em' }}>
            Key Security Competencies
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsData.securityFocus.map((focus, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-purple-600/10 border border-purple-600 text-purple-600 text-base font-medium transition-all duration-400 hover:bg-purple-600 hover:text-black cursor-default"
              >
                {focus}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;