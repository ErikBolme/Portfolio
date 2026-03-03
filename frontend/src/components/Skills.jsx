import React from 'react';
import { Code, Shield, Database, Activity } from 'lucide-react';
import { skillsData } from '../data/mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const SkillSection = ({ icon: Icon, title, children }) => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={`mb-14 ${isVisible ? 'scroll-visible' : 'scroll-hidden'}`}
    >
      <div className="flex items-center gap-3 mb-8">
        <Icon size={28} className="text-purple-600" strokeWidth={1.5} />
        <h3 className="text-white text-3xl font-semibold" style={{ letterSpacing: '-0.01em' }}>
          {title}
        </h3>
      </div>
      {children}
    </div>
  );
};

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation();

  return (
    <section id="skills" className="bg-black py-20 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
            Skills & Expertise
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Technical competencies developed through academic coursework and hands-on security labs
          </p>
        </div>

        <SkillSection icon={Code} title="Programming Languages">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skillsData.programmingLanguages.map((lang, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
                <h4 className="text-white text-xl font-semibold mb-3">{lang.name}</h4>
                <p className="text-white/70 text-base">{lang.description}</p>
              </div>
            ))}
          </div>
        </SkillSection>

        <SkillSection icon={Shield} title="Security Tools & Technologies">
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
        </SkillSection>

        <SkillSection icon={Database} title="Database Systems">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.databases.map((db, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-2px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)]">
                <h4 className="text-white text-xl font-semibold mb-3">{db.name}</h4>
                <p className="text-white/70 text-base">{db.description}</p>
              </div>
            ))}
          </div>
        </SkillSection>

        <SkillSection icon={Activity} title="Frameworks & Methodologies">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skillsData.frameworks.map((framework, index) => (
              <div key={index} className="bg-[#121212] border border-white/25 p-6">
                <h4 className="text-white text-xl font-semibold mb-3">{framework.name}</h4>
                <p className="text-white/70 text-base">{framework.description}</p>
              </div>
            ))}
          </div>
        </SkillSection>
      </div>
    </section>
  );
};

export default Skills;
