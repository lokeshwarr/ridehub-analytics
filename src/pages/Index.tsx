
import { useState } from 'react';
import Dashboard from './Dashboard';
import MapView from './MapView';
import Analytics from './Analytics';
import Profile from './Profile';
import MobileNavbar from '@/components/MobileNavbar';

const Index = () => {
  const [activePath, setActivePath] = useState('/');

  const renderContent = () => {
    switch (activePath) {
      case '/':
        return <Dashboard />;
      case '/map':
        return <MapView />;
      case '/analytics':
        return <Analytics />;
      case '/profile':
        return <Profile />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-ridehub-background min-h-screen">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        {renderContent()}
        <MobileNavbar activePath={activePath} />
      </div>
    </div>
  );
};

export default Index;
