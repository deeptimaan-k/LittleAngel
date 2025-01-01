import React from 'react';
import { Target, Compass, Award } from 'lucide-react';

const VisionMission = () => {
  const values = [
    {
      title: 'Excellence',
      description: 'Striving for the highest standards in early education',
      icon: Award
    },
    {
      title: 'Innovation',
      description: 'Embracing modern teaching methods and technologies',
      icon: Compass
    },
    {
      title: 'Nurturing Growth',
      description: 'Creating an environment that fosters holistic development',
      icon: Target
    }
  ];

  return (
    <div className="space-y-12">
      {/* Vision Section */}
      <section className="bg-purple-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          To be the leading institution in early childhood education, nurturing future leaders 
          through innovative learning approaches and holistic development programs.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-blue-50 rounded-2xl p-8 md:p-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
        <p className="text-xl text-gray-600 leading-relaxed">
          To provide a safe, nurturing environment where children can discover their potential 
          through play-based learning, creative exploration, and character development.
        </p>
      </section>

      {/* Core Values */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Core Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default VisionMission;