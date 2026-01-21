import React from 'react';
import { Shield, Lock, Users, FileCheck } from 'lucide-react';

const MilitaryExperience = () => {
  return (
    <section className="min-h-screen bg-black py-24 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ fontFamily: 'monospace', letterSpacing: '-0.02em' }}>
            Professional Foundation: Security & Information Management
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="order-2 lg:order-1">
            <div className="bg-[#121212] border border-white/25 p-8">
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                My journey into cybersecurity began with a strong foundation in the Norwegian Armed Forces. As an <span className="text-purple-600 font-semibold">Information Manager (IM)</span>, I was responsible for establishing digital collaboration platforms and managing information flow under strict security requirements.
              </p>
              <p className="text-white/85 text-lg leading-relaxed mb-6">
                I gained hands-on experience with <span className="text-purple-600 font-semibold">Role-Based Access Control (RBAC)</span>, managing access levels from Reader to Owner, and ensuring security compliance within staff environments.
              </p>
              <p className="text-white/85 text-lg leading-relaxed">
                A critical part of my role involved security procedures for high-security encrypted rooms, which instilled in me a disciplined approach to information governance and digital defense.
              </p>
            </div>

            {/* Key Competencies */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-purple-600/10 border border-purple-600/30 p-4 transition-all duration-400 hover:bg-purple-600/20">
                <Lock size={24} className="text-purple-600 mb-2" strokeWidth={1.5} />
                <h4 className="text-white text-sm font-semibold mb-1">Access Control</h4>
                <p className="text-white/60 text-xs">RBAC Management</p>
              </div>
              <div className="bg-purple-600/10 border border-purple-600/30 p-4 transition-all duration-400 hover:bg-purple-600/20">
                <Shield size={24} className="text-purple-600 mb-2" strokeWidth={1.5} />
                <h4 className="text-white text-sm font-semibold mb-1">Security Compliance</h4>
                <p className="text-white/60 text-xs">High-Security Protocols</p>
              </div>
              <div className="bg-purple-600/10 border border-purple-600/30 p-4 transition-all duration-400 hover:bg-purple-600/20">
                <FileCheck size={24} className="text-purple-600 mb-2" strokeWidth={1.5} />
                <h4 className="text-white text-sm font-semibold mb-1">Information Flow</h4>
                <p className="text-white/60 text-xs">Document Management</p>
              </div>
              <div className="bg-purple-600/10 border border-purple-600/30 p-4 transition-all duration-400 hover:bg-purple-600/20">
                <Users size={24} className="text-purple-600 mb-2" strokeWidth={1.5} />
                <h4 className="text-white text-sm font-semibold mb-1">Team Leadership</h4>
                <p className="text-white/60 text-xs">Training & Mentoring</p>
              </div>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute inset-0 bg-purple-600/20 blur-xl"></div>
              <img
                src="https://customer-assets.emergentagent.com/job_secdevjourney/artifacts/m9arzg32_Forsvars%20bilde%20av%20meg.jpg"
                alt="Erik Helander Bolme - Norwegian Armed Forces"
                className="relative w-full h-auto border-2 border-purple-600 shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-400 hover:shadow-[0_0_60px_rgba(139,92,246,0.6)]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MilitaryExperience;