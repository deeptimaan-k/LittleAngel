import React, { useState } from 'react';
import { Mail, Phone, User, Calendar, BookOpen } from 'lucide-react';

const EnrollmentForm = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    childName: '',
    childAge: '',
    program: '',
    parentName: '',
    email: '',
    phone: '',
    address: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send data to a server
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you soon.');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="bg-purple-600 text-white p-6 rounded-t-2xl">
          <h2 className="text-3xl font-bold">Begin Their Journey</h2>
          <p className="mt-2 opacity-90">Fill out the form below to start the enrollment process</p>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Child's Information */}
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Child's Full Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.childName}
                  onChange={(e) => setFormData({...formData, childName: e.target.value})}
                />
              </div>
              
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  Child's Age
                </label>
                <input
                  type="number"
                  required
                  min="1.5"
                  max="5.5"
                  step="0.5"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.childAge}
                  onChange={(e) => setFormData({...formData, childAge: e.target.value})}
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Program
                </label>
                <select
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.program}
                  onChange={(e) => setFormData({...formData, program: e.target.value})}
                >
                  <option value="">Select a program</option>
                  <option value="playgroup">Playgroup (1.5 - 2.5 years)</option>
                  <option value="nursery">Nursery (2.5 - 3.5 years)</option>
                  <option value="junior">Junior KG (3.5 - 4.5 years)</option>
                  <option value="senior">Senior KG (4.5 - 5.5 years)</option>
                </select>
              </div>
            </div>

            {/* Parent's Information */}
            <div className="space-y-4">
              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <User className="w-4 h-4 mr-2" />
                  Parent's Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.parentName}
                  onChange={(e) => setFormData({...formData, parentName: e.target.value})}
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                />
              </div>

              <div>
                <label className="flex items-center text-gray-700 mb-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                />
              </div>
            </div>
          </div>

          <div>
            <label className="flex items-center text-gray-700 mb-2">
              Address
            </label>
            <textarea
              required
              rows={3}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={formData.address}
              onChange={(e) => setFormData({...formData, address: e.target.value})}
            />
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;