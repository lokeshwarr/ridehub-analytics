
import React from 'react';
import { Bike } from 'lucide-react';

const AppBanner = () => {
  return (
    <div className="flex flex-col items-center mb-4 bg-gradient-to-r from-orange-400/80 to-yellow-300/80 p-3 rounded-lg shadow-md backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <Bike size={28} className="text-white" strokeWidth={2.5} />
        <h1 className="text-2xl font-bold text-white">RideHub</h1>
      </div>
      <p className="text-sm text-white/90 italic">"Smartness is key"</p>
    </div>
  );
};

export default AppBanner;
