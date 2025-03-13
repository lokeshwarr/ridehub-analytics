
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  const navigate = useNavigate();
  
  const handleNotificationClick = () => {
    toast({
      title: "Notifications",
      description: "You have no new notifications",
      duration: 3000,
    });
  };
  
  const handleSettingsClick = () => {
    navigate('/settings');
  };
  
  return (
    <div className="flex items-center justify-between mb-4 pb-2 border-b border-gray-200">
      <div>
        <h1 className="text-xl font-bold text-ridehub-foreground">{title}</h1>
      </div>
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" aria-label="Notifications" onClick={handleNotificationClick}>
          <Bell className="h-5 w-5 text-gray-500" />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Settings" onClick={handleSettingsClick}>
          <Settings className="h-5 w-5 text-gray-500" />
        </Button>
      </div>
    </div>
  );
};

export default Header;
