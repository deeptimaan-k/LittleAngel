import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import MenuItem from './navigation/MenuItem';
import { menuItems } from './navigation/menuData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleMenuClick = (title: string) => {
    setActiveSubmenu(activeSubmenu === title ? null : title);
  };

  const handleClickOutside = () => {
    setActiveSubmenu(null);
  };

  const handleMobileItemClick = (baseUrl: string, itemPath: string) => {
    navigate(`${baseUrl}/${itemPath}`);
    setIsOpen(false);
    setActiveSubmenu(null);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="text-3xl font-bold text-purple-600">
            KidsWorld
          </Link>

          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center space-x-2">
            {menuItems.map((item) => (
              <div key={item.title} className="px-4">
                <MenuItem
                  item={item}
                  isActive={activeSubmenu === item.title}
                  onClick={() => handleMenuClick(item.title)}
                  onClickOutside={handleClickOutside}
                />
              </div>
            ))}
          </div>

          {/* Empty div for flex spacing */}
          <div className="hidden md:block w-[120px]"></div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600 p-2"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t overflow-y-auto max-h-[calc(100vh-5rem)]">
          {menuItems.map((item) => (
            <div key={item.title} className="px-4 py-2">
              <button
                onClick={() => handleMenuClick(item.title)}
                className="flex items-center justify-between w-full py-2 text-gray-700"
              >
                <span className="font-medium">{item.title}</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
                  activeSubmenu === item.title ? 'rotate-180' : ''
                }`} />
              </button>
              {activeSubmenu === item.title && (
                <div className="pl-4 pb-2">
                  {item.submenu.map((subItem) => (
                    <button
                      key={subItem.title}
                      className="block w-full text-left py-2 hover:bg-purple-50 rounded-lg px-3"
                      onClick={() => handleMobileItemClick(
                        item.title.toLowerCase().replace(/\s+/g, ''),
                        subItem.title.toLowerCase().replace(/\s+/g, '-')
                      )}
                    >
                      <div className="text-gray-900 font-medium">
                        {subItem.title}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {subItem.content}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;