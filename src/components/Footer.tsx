import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-purple-400 mb-4">
              KidsWorld
            </h3>
            <p className="text-gray-400">
              Nurturing young minds and building strong foundations for a
              brighter future.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  Programs
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  Admissions
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-purple-400">
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">info@kidsworld.edu</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-purple-400" />
                <span className="text-gray-400">
                  XYZ school, Bareilly, Uttar Pradesh
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">School Hours</h4>
            <ul className="text-gray-400 space-y-2">
              <li>Monday - Saturday</li>
              <li>8:00 AM - 3:30 PM</li>
              <li>Extended Care Available</li>
              <li>7:00 AM - 6:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} #kkj All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
