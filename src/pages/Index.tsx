
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard';
import MapView from './MapView';
import Analytics from './Analytics';
import Profile from './Profile';
import Settings from './Settings';
import MobileNavbar from '@/components/MobileNavbar';

const Index = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState('/');

  useEffect(() => {
    // Handle direct URLs like /profile, /map, etc.
    if (location.pathname === '/') {
      setActivePath('/');
    } else if (location.pathname === '/map') {
      setActivePath('/map');
    } else if (location.pathname === '/analytics') {
      setActivePath('/analytics');
    } else if (location.pathname === '/profile') {
      setActivePath('/profile');
    } else if (location.pathname === '/settings') {
      setActivePath('/settings');
    }
  }, [location.pathname]);

  // Effect to navigate when activePath changes
  useEffect(() => {
    if (activePath !== location.pathname) {
      navigate(activePath);
    }
  }, [activePath, navigate, location.pathname]);

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
        <MobileNavbar activePath={activePath} />
      </div>
    </div>
  );
};

export default Index;
