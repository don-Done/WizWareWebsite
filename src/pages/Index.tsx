
import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import GamesSection from '../components/GamesSection';
import EducationalSection from '../components/EducationalSection';
import BlogSection from '../components/BlogSection';
import TeamSection from '../components/TeamSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden bg-wizware-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <GamesSection />
      <EducationalSection />
      <BlogSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
