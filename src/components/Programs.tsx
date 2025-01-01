import React from 'react';
import { BookOpen, Users, Heart, Brain, ArrowRight } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: 'Playgroup',
      age: '1.5 - 2.5 years',
      description: 'Early socialization and sensory development through play',
      icon: Users,
      activities: [
        'Sensory Play',
        'Music & Movement',
        'Basic Motor Skills',
        'Social Interaction'
      ],
      schedule: '2 hours daily',
      color: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Nursery',
      age: '2.5 - 3.5 years',
      description: 'Foundation for learning through creative activities',
      icon: Heart,
      activities: [
        'Art & Craft',
        'Story Time',
        'Number Concepts',
        'Language Development'
      ],
      schedule: '3 hours daily',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      title: 'Junior KG',
      age: '3.5 - 4.5 years',
      description: 'Structured learning with focus on basic concepts',
      icon: BookOpen,
      activities: [
        'Pre-Reading Skills',
        'Basic Mathematics',
        'Environmental Science',
        'Physical Education'
      ],
      schedule: '4 hours daily',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Senior KG',
      age: '4.5 - 5.5 years',
      description: 'Comprehensive development for school readiness',
      icon: Brain,
      activities: [
        'Reading & Writing',
        'Advanced Mathematics',
        'Science Projects',
        'Computer Basics'
      ],
      schedule: '4 hours daily',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="programs">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Programs
          </h2>
          <p className="text-xl text-gray-600">
            Age-appropriate programs designed for holistic development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program) => (
            <div
              key={program.title}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${program.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              
              <div className="relative p-6">
                <div className="w-12 h-12 bg-purple-100 group-hover:bg-white/20 rounded-full flex items-center justify-center mb-4 transition-colors">
                  <program.icon className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                  {program.title}
                </h3>
                <p className="text-purple-600 group-hover:text-purple-100 font-medium mb-2 transition-colors">
                  {program.age}
                </p>
                <p className="text-gray-600 group-hover:text-white/90 mb-4 transition-colors">
                  {program.description}
                </p>
                
                <div className="border-t border-gray-200 group-hover:border-white/20 pt-4 transition-colors">
                  <h4 className="font-semibold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    Key Activities:
                  </h4>
                  <ul className="text-gray-600 group-hover:text-white/90 text-sm space-y-1 transition-colors">
                    {program.activities.map((activity, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-purple-600 group-hover:bg-white rounded-full mr-2 transition-colors"></span>
                        {activity}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-sm text-purple-600 group-hover:text-purple-100 font-medium transition-colors">
                      {program.schedule}
                    </p>
                    <ArrowRight className="h-5 w-5 text-purple-600 group-hover:text-white transform group-hover:translate-x-1 transition-all" />
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

export default Programs;