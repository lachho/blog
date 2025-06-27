import React from 'react';
import Footer from './Footer';
import HeroSection from './home/HeroSection';
import MainContent from './home/MainContent';
import JourneyTimeline from './home/JourneyTimeline';
import AboutMeSection from './home/AboutMeSection';
import PDCAdvertisement from './common/PDCAdvertisement';

const InfoHomePage = () => {
  const scrollToContentHub = () => {
    const contentHub = document.getElementById('content-discovery-hub');
    if (contentHub) {
      contentHub.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <HeroSection onExploreClick={scrollToContentHub} />

      {/* Journey Timeline Section */}
      <div id="content-discovery-hub">
        <MainContent/>
        <JourneyTimeline />
      </div>

      {/* About Me Section */}
      <AboutMeSection />

      {/* PDC Advertisement */}
      <PDCAdvertisement />

      <Footer />
    </div>
  );
};

export default InfoHomePage; 