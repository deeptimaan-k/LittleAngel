import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const VirtualTourPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-20">
        {/* Hero Section */}
        <div className="relative h-[40vh] bg-purple-900">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&q=80"
              alt="School Building"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          <div className="relative h-full flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Virtual Campus Tour
              </h1>
              <p className="text-xl text-purple-100">
                Experience our facilities from anywhere
              </p>
            </div>
          </div>
        </div>

        {/* Tour Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Interactive Map */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Interactive Campus Map
              </h2>
              <div className="aspect-video bg-purple-100 rounded-lg mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.3504113814275!2d79.4154413!3d28.8870275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a0017ba5aaac77%3A0x714ce9fa0c40c5!2sBareilly%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1635835636789!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600">
                Explore our campus layout and facilities through this interactive map
              </p>
            </div>

            {/* Virtual Tour Video */}
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Virtual Tour Video
              </h2>
              <div className="aspect-video bg-purple-100 rounded-lg mb-4">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/your-video-id"
                  title="Virtual Tour"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                ></iframe>
              </div>
              <p className="text-gray-600">
                Take a guided tour of our facilities and learn about our learning environment
              </p>
            </div>
          </div>

          {/* Facility Highlights */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Modern Classrooms',
                image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80'
              },
              {
                title: 'Play Areas',
                image: 'https://images.unsplash.com/photo-1597430203889-c93a0cd4e27f?auto=format&fit=crop&q=80'
              },
              {
                title: 'Activity Zones',
                image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?auto=format&fit=crop&q=80'
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default VirtualTourPage;