import React from 'react';
import { Terminal, Activity, AlertCircle } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Home Lab Environment",
      description: "Building a dedicated security testing environment for hands-on practice with various attack vectors and defensive techniques.",
      status: "In Progress",
      icon: Terminal
    },
    {
      title: "Python Security Scanner",
      description: "Developing automated network scanning tools using Python to identify vulnerabilities and potential security issues.",
      status: "In Progress",
      icon: Activity
    },
    {
      title: "Vulnerability Assessment Framework",
      description: "Creating a comprehensive framework for systematic vulnerability assessment and penetration testing methodologies.",
      status: "In Progress",
      icon: AlertCircle
    }
  ];

  return (
    <section className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ fontFamily: 'monospace', letterSpacing: '-0.02em' }}>
            Active Security Projects
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Currently developing hands-on security projects to apply theoretical knowledge in practical scenarios
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="bg-[#121212] border border-white/25 p-8 transition-all duration-400 hover:border-purple-600 hover:translate-y-[-4px] hover:shadow-[0_8px_32px_rgba(139,92,246,0.2)] group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="p-4 bg-purple-600/10 border border-purple-600 transition-all duration-400 group-hover:bg-purple-600/20">
                    <Icon size={40} className="text-purple-600" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-white text-xl font-semibold mb-3 text-center" style={{ fontFamily: 'monospace' }}>
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-base leading-relaxed mb-6 text-center">
                  {project.description}
                </p>

                {/* Status Badge */}
                <div className="flex justify-center">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-purple-600/20 border border-purple-600 text-purple-600 text-sm font-medium">
                    <span className="w-2 h-2 bg-purple-600 rounded-full animate-pulse"></span>
                    Status: {project.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Coming Soon Notice */}
        <div className="mt-12 text-center">
          <p className="text-white/60 text-base">
            More projects and detailed writeups coming soon as development progresses
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;