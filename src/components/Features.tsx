import React from 'react';
import { Shield, Heart, BookOpen, Users } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe Environment',
      description: 'CCTV monitored premises with trained staff for complete security',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Heart,
      title: 'Nurturing Care',
      description: 'Experienced teachers providing individual attention to each child',
      color: 'from-pink-500 to-rose-500'
    },
    {
      icon: BookOpen,
      title: 'Modern Curriculum',
      description: 'Activity-based learning following international standards',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Users,
      title: 'Parent Partnership',
      description: 'Regular updates and involvement in child\'s development',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
          <p className="text-xl text-gray-600">
            Creating the perfect environment for early learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-8">
                <div className="w-16 h-16 bg-purple-100 group-hover:bg-white/20 rounded-xl flex items-center justify-center mb-6 transform group-hover:rotate-6 transition-all duration-300">
                  <feature.icon className="h-8 w-8 text-purple-600 group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {feature.description}
                </p>

                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;