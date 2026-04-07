import React from 'react';
import { Github, Shield, Cloud } from 'lucide-react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const Projects = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [ethicsRef, ethicsVisible] = useScrollAnimation();
  const [projectRef, projectVisible] = useScrollAnimation();

  return (
    <section id="projects" className="relative bg-black py-20 px-[7.6923%] overflow-hidden">
      {/* Purple accent glow - left side */}
      <div
        className="absolute top-1/3 left-0 w-[400px] h-[400px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-14 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ fontFamily: 'monospace', letterSpacing: '-0.02em' }}>
            Active Security Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div
          ref={ethicsRef}
          className={`mb-14 bg-purple-600/5 border border-purple-600/30 p-8 ${ethicsVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
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

        {/* Featured Project Card */}
        <div
          ref={projectRef}
          className={`max-w-2xl mx-auto ${projectVisible ? 'scroll-visible-scale' : 'scroll-hidden-scale'}`}
        >
          <div className="bg-[#111111] border border-white/10 overflow-hidden transition-all duration-500 hover:border-purple-600/50 hover:shadow-[0_8px_40px_rgba(139,92,246,0.15)] group">
            {/* Project header banner */}
            <div className="relative h-32 flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' }}
            >
              <div className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(circle at 50% 50%, rgba(139,92,246,0.3) 0%, transparent 70%)' }}
              />
              <Cloud size={48} className="text-purple-500 relative z-10" strokeWidth={1.5} />
            </div>

            {/* Project info */}
            <div className="p-8">
              <div className="flex items-center gap-2 mb-3">
                <Github size={18} className="text-white/60" strokeWidth={1.5} />
                <h3 className="text-white text-2xl font-semibold" style={{ fontFamily: 'monospace' }}>
                  azure-cloud-security-lab
                </h3>
              </div>

              <p className="text-white/70 text-lg leading-relaxed mb-5">
                Cloud security lab environment built in Microsoft Azure for hands-on security testing, monitoring, and incident response.
              </p>

              <div className="flex items-center gap-3 mb-8">
                <span className="px-3 py-1 bg-blue-600/20 border border-blue-500/40 text-blue-400 text-sm font-medium">
                  Azure
                </span>
                <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/40 text-purple-400 text-sm font-medium">
                  Cloud Security
                </span>
                <div className="flex items-center gap-1.5 ml-auto">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></div>
                  <span className="text-white/40 text-sm">In Progress</span>
                </div>
              </div>

              <a
                href="https://github.com/ErikBolme/azure-cloud-security-lab"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 bg-purple-600 text-black px-8 py-4 text-lg font-semibold transition-all duration-400 hover:bg-purple-500 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                style={{ fontFamily: 'monospace' }}
              >
                <Github size={22} strokeWidth={2} />
                <span>View Project on GitHub</span>
              </a>
            </div>
          </div>
        </div>

        {/* More projects coming */}
        <div className="mt-10 text-center">
          <p className="text-white/30 text-sm uppercase tracking-wider">More projects coming soon</p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
