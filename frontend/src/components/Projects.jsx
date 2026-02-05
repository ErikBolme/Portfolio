import React from 'react';
import { Github, Code, Shield } from 'lucide-react';

const Projects = () => {
  // Empty projects array - ready for future project cards
  const projects = [];

  return (
    <section id="projects" className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ fontFamily: 'monospace', letterSpacing: '-0.02em' }}>
            Active Security Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        {/* Ethical Hacking Commitment */}
        <div className="mb-16 bg-purple-600/5 border border-purple-600/30 p-8">
          <div className="flex items-start gap-4">
            <Shield size={32} className="text-purple-600 shrink-0 mt-1" strokeWidth={1.5} />
            <div>
              <h4 className="text-white text-xl font-semibold mb-3">Ethical Hacking Commitment</h4>
              <p className="text-white/70 text-lg leading-relaxed">
                All activities are conducted within legal boundaries and ethical guidelines.
              </p>
            </div>
          </div>
        </div>

        {/* GitHub Call-to-Action */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#121212] border border-white/25 p-12 text-center">
            <div className="mb-8">
              <Code size={64} className="text-purple-600 mx-auto mb-6" strokeWidth={1.5} />
              <p className="text-white/85 text-xl leading-relaxed mb-8">
                Security projects and technical documentation available on GitHub.
              </p>
            </div>
            
            {/* GitHub Button */}
            <a
              href="https://github.com/ErikBolme"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-4 bg-purple-600 text-black px-12 py-5 text-xl font-semibold transition-all duration-400 hover:bg-purple-500 hover:scale-105 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)] group"
              style={{ fontFamily: 'monospace' }}
            >
              <Github size={32} strokeWidth={2} className="group-hover:rotate-12 transition-transform duration-400" />
              <span>View My GitHub Profile</span>
            </a>

            {/* Subtle decoration */}
            <div className="mt-8 flex items-center justify-center gap-2 text-white/40 text-sm">
              <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></div>
              <span>Actively Contributing</span>
            </div>
          </div>
        </div>

        {/* Flexible Project Cards Section - Ready for future use */}
        {projects.length > 0 && (
          <div className="mt-16">
            <h3 className="text-white text-3xl font-semibold mb-8 text-center" style={{ fontFamily: 'monospace' }}>
              Featured Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <div
                    key={index}
                    className="bg-[#121212] border border-white/25 p-8 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] group"
                  >
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-purple-600/10 border border-purple-600 transition-all duration-400 group-hover:bg-purple-600/20">
                        <Icon size={40} className="text-purple-600" strokeWidth={1.5} />
                      </div>
                    </div>
                    <h3 className="text-white text-xl font-semibold mb-3 text-center" style={{ fontFamily: 'monospace' }}>
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-base leading-relaxed mb-6 text-center">
                      {project.description}
                    </p>
                    <div className="flex justify-center">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600/20 border border-purple-600 text-purple-600 text-sm font-medium hover:bg-purple-600 hover:text-black transition-all duration-400"
                      >
                        <Github size={18} />
                        View Repository
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
