import React from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import About from './components/About';
import MilitaryExperience from './components/MilitaryExperience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider flip />
        <Projects />
        <SectionDivider />
        <Skills />
        <SectionDivider flip />
        <MilitaryExperience />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
