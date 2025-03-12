
import React from 'react';
import { Link } from 'react-router-dom';
import { LayoutDashboard, Map, LineChart, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavbarProps {
  activePath: string;
}

const MobileNavbar = ({ activePath }: MobileNavbarProps) => {
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Map, label: 'Map', path: '/map' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-lg z-10">
      <div className="flex justify-around h-16">
        {navItems.map((item) => {
          const isActive = activePath === item.path;
          return (
            <Link
              key={item.path}
              to={item.path}
              className={cn(
                'flex flex-col items-center justify-center w-full text-xs transition-colors',
                isActive
                  ? 'text-ridehub-primary'
                  : 'text-gray-500 hover:text-ridehub-primary'
              )}
            >
              <item.icon
                className={cn(
                  'h-5 w-5 mb-1',
                  isActive ? 'text-ridehub-primary' : 'text-gray-500'
                )}
              />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
