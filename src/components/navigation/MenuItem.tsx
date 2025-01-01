import React, { useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import { SubMenu } from './SubMenu';
import { useClickOutside } from './useClickOutside';

interface MenuItemProps {
  item: {
    title: string;
    path?: string;
    submenu: Array<{
      title: string;
      content: string;
      description?: string;
      image?: string;
    }>;
  };
  isActive: boolean;
  onClick: () => void;
  onClickOutside: () => void;
}

const MenuItem = ({ item, isActive, onClick, onClickOutside }: MenuItemProps) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const baseUrl = item.title.toLowerCase().replace(/\s+/g, '');
  
  useClickOutside(menuRef, onClickOutside, isActive);

  return (
    <div className="relative group" ref={menuRef}>
      <button 
        className={`
          text-gray-700 hover:text-purple-600 
          px-4 py-2 rounded-lg
          flex items-center space-x-1
          transition-colors duration-200
          ${isActive ? 'bg-purple-50 text-purple-600' : ''}
        `}
        onClick={onClick}
      >
        <span>{item.title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${
          isActive ? 'rotate-180' : ''
        }`} />
      </button>
      {isActive && <SubMenu items={item.submenu} baseUrl={baseUrl} onClose={onClickOutside} />}
    </div>
  );
};

export default MenuItem;