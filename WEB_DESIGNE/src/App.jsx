// src/App.jsx
import React from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HeroSection from './components/home/HeroSection';
import FeaturesSection from './components/home/FeaturesSection';
import StatsSection from './components/home/StatsSection';
import AboutSection from './components/home/AboutSection';
import AdvantagesSection from './components/home/AdvantagesSection';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <AboutSection />
        <AdvantagesSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;