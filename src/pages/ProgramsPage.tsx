import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../components/navigation/menuData';

const ProgramsPage = () => {
  const { program } = useParams();
  const programsData = menuItems.find(item => item.title === 'Programs')?.submenu;
  const pageData = programsData?.find(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === program
  );

  if (!pageData) return <div>Program not found</div>;

  return (
    <div className="pt-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="py-12 md:py-20">
        <img
          src={pageData.image}
          alt={pageData.title}
          className="w-full h-64 md:h-96 object-cover rounded-2xl mb-8"
        />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          {pageData.title}
        </h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-600 mb-8">{pageData.content}</p>
          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Daily Schedule</h3>
              <p className="text-gray-600">{pageData.description}</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Learning Outcomes</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Social and emotional development</li>
                <li>Language and communication skills</li>
                <li>Physical development and coordination</li>
                <li>Cognitive development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramsPage;