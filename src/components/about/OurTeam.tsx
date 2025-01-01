import React from 'react';
import { Mail, Phone, Award } from 'lucide-react';

const OurTeam = () => {
  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Principal',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
      qualifications: 'M.Ed. Early Childhood Education',
      experience: '15+ years',
      email: 'sarah.j@kidsworld.edu'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Curriculum',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
      qualifications: 'Ph.D. Education Psychology',
      experience: '12+ years',
      email: 'michael.c@kidsworld.edu'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Lead Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
      qualifications: 'B.Ed. Elementary Education',
      experience: '8+ years',
      email: 'emily.r@kidsworld.edu'
    }
  ];

  return (
    <div className="space-y-12">
      <section className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed">
          Our dedicated team of educators brings together decades of experience in early childhood 
          education. Each member is committed to providing the best possible learning experience 
          for your child.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        {team.map((member) => (
          <div key={member.name} className="bg-white rounded-xl shadow-lg overflow-hidden group">
            <div className="relative h-64 overflow-hidden">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <p className="text-purple-200">{member.role}</p>
              </div>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">{member.qualifications}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">{member.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-purple-600" />
                <span className="text-gray-700">Experience: {member.experience}</span>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Join Our Team Section */}
      <section className="bg-purple-50 rounded-2xl p-8 md:p-12 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Join Our Team</h2>
        <p className="text-xl text-gray-600 mb-8">
          We're always looking for passionate educators to join our growing family.
        </p>
        <button className="bg-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition-colors">
          View Opportunities
        </button>
      </section>
    </div>
  );
};

export default OurTeam;