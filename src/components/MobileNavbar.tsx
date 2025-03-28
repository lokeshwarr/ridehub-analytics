
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LayoutDashboard, LineChart, User, Settings, Compass } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MobileNavbarProps {
  activePath: string;
}

const MobileNavbar = ({ activePath }: MobileNavbarProps) => {
  const navigate = useNavigate();
  
  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: LineChart, label: 'Analytics', path: '/analytics' },
    { icon: User, label: 'Profile', path: '/profile' },
    { icon: Settings, label: 'Settings', path: '/settings' },
  ];

  const handleNavClick = (path: string) => {
    // Prevent re-navigation to the same route to avoid glitch effect
    if (activePath !== path) {
      navigate(path);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-lg z-10">
      <div className="flex justify-around h-16">
        {navItems.map((item) => {
          const isActive = activePath === item.path;
          return (
            <button
              key={item.path}
              onClick={() => handleNavClick(item.path)}
              className={cn(
                'flex flex-col items-center justify-center w-full text-xs transition-colors',
                isActive
                  ? 'text-ridehub-primary'
                  : 'text-gray-500 hover:text-ridehub-primary'
              )}
              aria-label={item.label}
            >
              <item.icon
                className={cn(
                  'h-5 w-5 mb-1',
                  isActive ? 'text-ridehub-primary' : 'text-gray-500'
                )}
              />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNavbar;
