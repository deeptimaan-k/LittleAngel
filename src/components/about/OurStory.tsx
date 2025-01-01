import React from 'react';
import { GraduationCap, Heart, Users } from 'lucide-react';

const OurStory = () => {
  const milestones = [
    {
      year: '2005',
      title: 'Foundation',
      description: 'Started with just 20 students and a vision to transform early education',
      icon: GraduationCap
    },
    {
      year: '2010',
      title: 'Growth & Recognition',
      description: 'Expanded facilities and received excellence in education award',
      icon: Heart
    },
    {
      year: '2023',
      title: 'Community Impact',
      description: 'Over 1000+ graduates and strong parent community',
      icon: Users
    }
  ];

  return (
    <div className="space-y-12">
      <section className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed">
          Founded in 2005, KidsWorld began with a simple yet powerful vision: to create a nurturing 
          environment where every child's potential could flourish. Our journey started with a small 
          group of dedicated educators who believed in making early education both engaging and effective.
        </p>
        <p className="text-xl text-gray-600 leading-relaxed">
          Over the years, we've grown from a small preschool into a leading early education institution, 
          all while maintaining our core values of individual attention and holistic development.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Journey</h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[50%] top-0 bottom-0 w-0.5 bg-purple-200"></div>
          
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`flex items-center ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}>
                <div className="w-1/2 flex flex-col items-center">
                  <div className={`bg-white p-6 rounded-xl shadow-lg ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <milestone.icon className="h-8 w-8 text-purple-600 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                <div className="relative">
                  <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurStory;