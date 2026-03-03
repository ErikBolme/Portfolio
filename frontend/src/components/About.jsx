import React from 'react';
import { aboutData } from '../data/mock';
import useScrollAnimation from '../hooks/useScrollAnimation';

const About = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [contentRef, contentVisible] = useScrollAnimation();

  return (
    <section id="about" className="bg-black py-20 px-[7.6923%]">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headerRef}
          className={`text-center mb-12 ${headerVisible ? 'scroll-visible' : 'scroll-hidden'}`}
        >
          <h2 className="text-white text-5xl font-semibold mb-4" style={{ letterSpacing: '-0.02em' }}>
            About Me
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto"></div>
        </div>

        <div
          ref={contentRef}
          className={`bg-[#121212] border border-white/25 p-10 lg:p-12 ${contentVisible ? 'scroll-visible-scale' : 'scroll-hidden-scale'}`}
        >
          <p className="text-white/85 text-xl leading-relaxed mb-6">
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
