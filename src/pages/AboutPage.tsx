import React from 'react';
import { useParams } from 'react-router-dom';
import OurStory from '../components/about/OurStory';
import VisionMission from '../components/about/VisionMission';
import OurTeam from '../components/about/OurTeam';
import { menuItems } from '../components/navigation/menuData';

const AboutPage = () => {
  const { section } = useParams();
  const aboutData = menuItems.find(item => item.title === 'About Us')?.submenu;
  const pageData = aboutData?.find(item => 
    item.title.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-') === section
  );

  if (!pageData) return <div>Page not found</div>;

  const renderContent = () => {
    const formattedSection = section?.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-');
    switch (formattedSection) {
      case 'our-story':
        return <OurStory />;
      case 'vision-mission':
        return <VisionMission />;
      case 'our-team':
        return <OurTeam />;
      default:
        return <div>Content not found</div>;
    }
  };

  return (
    <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="py-12 md:py-20">
        <img
          src={pageData.image}
          alt={pageData.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12">
          {pageData.title}
        </h1>
        {renderContent()}
      </div>
    </div>
  );
};

export default AboutPage;