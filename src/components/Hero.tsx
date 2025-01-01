import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnrollmentForm from './EnrollmentForm';
import { ArrowRight, Sparkles, Shield, Heart } from 'lucide-react';
import ChildWithApples from './animations/ChildWithApples';

const Hero = () => {
  const [showEnrollForm, setShowEnrollForm] = useState(false);

  const highlights = [
    { icon: Sparkles, text: 'Innovative Learning' },
    { icon: Shield, text: 'Safe Environment' },
    { icon: Heart, text: 'Caring Teachers' },
  ];

  return (
    <>
      <div className="relative min-h-screen">
        {/* Background with parallax effect */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-purple-600/90 mix-blend-multiply"></div>
          <img
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80"
            className="w-full h-full object-cover"
            alt="Happy children learning"
          />
        </div>
        
        <div className="relative h-full flex items-center">
          <div className="max-w-7xl mx-auto px-4 py-32 sm:px-6 lg:px-8">
            <div className="text-center lg:text-left lg:max-w-2xl">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Where Learning</span>
                <span className="block text-purple-300">Meets Joy</span>
              </h1>
              
              <p className="mt-6 text-xl text-purple-100 max-w-lg lg:mx-0 mx-auto">
                Nurturing young minds with love, care, and excellence in early education
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button
                  onClick={() => setShowEnrollForm(true)}
                  className="px-8 py-4 bg-purple-600 text-white rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 transform hover:scale-105 flex items-center justify-center group"
                >
                  Enroll Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link
                  to="/virtual-tour"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full text-lg font-semibold hover:bg-white/20 transition duration-300 flex items-center justify-center"
                >
                  Virtual Tour
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* Highlights */}
              <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-white max-w-3xl mx-auto lg:mx-0">
                {highlights.map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-lg p-4">
                    <item.icon className="h-6 w-6 text-purple-300" />
                    <span className="font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Add the animated child with apples */}
        <ChildWithApples />

        {/* Decorative pattern */}
        <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white to-transparent"></div>
      </div>
      
      {showEnrollForm && <EnrollmentForm onClose={() => setShowEnrollForm(false)} />}
    </>
  );
};

export default Hero;