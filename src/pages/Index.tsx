
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import Analytics from './Analytics';
import Settings from './Settings';
import MobileNavbar from '@/components/MobileNavbar';

const Index = () => {
  const location = useLocation();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    // Only set the active path for the index page itself
    // This prevents re-renders when we're already on a dedicated page
    if (location.pathname === '/') {
      setActivePath('/');
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (activePath) {
      case '/':
        return <Dashboard />;
      case '/analytics':
        return <Analytics />;
      case '/settings':
        return <Settings />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="bg-ridehub-background min-h-screen">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        {renderContent()}
        <MobileNavbar activePath={location.pathname} />
      </div>
    </div>
  );
};

export default Index;
