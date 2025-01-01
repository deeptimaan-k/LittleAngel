import React from 'react';
import { useParams } from 'react-router-dom';
import { menuItems } from '../components/navigation/menuData';

const AdmissionsPage = () => {
  const { section } = useParams();
  const admissionsData = menuItems.find(item => item.title === 'Admissions')?.submenu;
  const pageData = admissionsData?.find(item => 
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
          {section === 'admission-process' && (
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Step 1: Application</h3>
                <p className="text-gray-600">Fill out the online application form with your child's details</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Step 2: Assessment</h3>
                <p className="text-gray-600">Schedule a visit for your child's assessment and tour</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">Step 3: Enrollment</h3>
                <p className="text-gray-600">Complete the enrollment process and welcome to KidsWorld!</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdmissionsPage;