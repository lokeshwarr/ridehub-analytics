
import React from 'react';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
      <div>
        <h1 className="text-xl font-bold text-ridehub-foreground">{title}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" aria-label="Notifications">
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings">
          <Settings className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
