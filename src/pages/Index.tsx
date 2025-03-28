
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Dashboard from './Dashboard';
import MobileNavbar from '@/components/MobileNavbar';
import AppBanner from '@/components/AppBanner';

const Index = () => {
  const location = useLocation();

  return (
    <div className="bg-ridehub-background min-h-screen bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-fixed bg-center">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        <AppBanner />
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <Dashboard />
        </div>
        <MobileNavbar activePath={location.pathname} />
      </div>
    </div>
  );
};

export default Index;
