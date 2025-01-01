import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowRight } from 'lucide-react';

interface SubMenuProps {
  items: Array<{
    title: string;
    content: string;
    description?: string;
    image?: string;
  }>;
  baseUrl: string;
  onClose?: () => void;
}

export const SubMenu = ({ items, baseUrl, onClose }: SubMenuProps) => {
  const getFormattedPath = (title: string) => {
    return title.toLowerCase().replace(/[&]/g, '').replace(/\s+/g, '-');
  };

  return (
    <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-screen max-w-[850px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-0 max-h-[calc(100vh-120px)] overflow-y-auto">
        {/* Featured Item - First Item */}
        <div className="relative hidden md:block bg-gradient-to-br from-purple-600 to-purple-800 text-white p-8">
          <div className="h-full flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-4">{items[0].title}</h3>
              <p className="text-purple-100 mb-6">{items[0].content}</p>
              {items[0].description && (
                <p className="text-sm text-purple-200">{items[0].description}</p>
              )}
            </div>
            <Link
              to={`/${baseUrl}/${getFormattedPath(items[0].title)}`}
              onClick={onClose}
              className="inline-flex items-center text-sm font-semibold text-white hover:text-purple-200 transition-colors"
            >
              Learn more <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
          {items[0].image && (
            <div className="absolute inset-0 opacity-10">
              <img
                src={items[0].image}
                alt={items[0].title}
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Menu Items */}
        <div className="bg-white">
          <div className="p-4">
            {items.map((item) => (
              <Link
                key={item.title}
                to={`/${baseUrl}/${getFormattedPath(item.title)}`}
                onClick={onClose}
                className="group block p-4 hover:bg-purple-50 rounded-lg transition-colors duration-200"
              >
                <div className="flex items-start space-x-4">
                  {item.image && (
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-semibold text-gray-900 group-hover:text-purple-600 truncate">
                        {item.title}
                      </h4>
                      <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-purple-600 transform group-hover:translate-x-1 transition-all" />
                    </div>
                    <p className="mt-1 text-sm text-gray-500 line-clamp-2">
                      {item.content}
                    </p>
                    {item.description && (
                      <p className="mt-1 text-xs text-purple-600 font-medium">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};