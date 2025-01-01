import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../components/navigation/menuData';

const FacilitiesPage = () => {
  const { section } = useParams();
  const facilitiesData = menuItems.find(item => item.title === 'Facilities')?.submenu;
  const pageData = facilitiesData?.find(item => 
    item.title.toLowerCase().replace(/\s+/g, '-') === section
  );

  if (!pageData) return <div>Page not found</div>;

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
              <h3 className="text-xl font-semibold mb-4">Features</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>State-of-the-art equipment</li>
                <li>Child-friendly environment</li>
                <li>Safety measures in place</li>
                <li>Regular maintenance</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Benefits</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Enhanced learning experience</li>
                <li>Safe and secure environment</li>
                <li>Modern amenities</li>
                <li>Comfortable atmosphere</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacilitiesPage;