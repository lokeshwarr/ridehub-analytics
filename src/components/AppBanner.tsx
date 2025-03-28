
import React from 'react';
import { Bike } from 'lucide-react';

const AppBanner = () => {
  return (
    <div className="flex justify-between items-center mb-4 bg-gradient-to-r from-orange-400/80 to-yellow-300/80 p-3 rounded-lg shadow-md backdrop-blur-sm">
      <div className="flex items-center gap-2">
        <div className="bg-white rounded-full p-1.5 shadow-md">
          <Bike size={24} className="text-orange-500" strokeWidth={2.5} />
        </div>
        <h1 className="text-2xl font-bold text-white" style={{ fontFamily: "'Baloo 2', cursive" }}>RideHub</h1>
      </div>
      <p className="text-sm text-white/90 italic ml-2">"Smartness is key"</p>
    </div>
  );
};

export default AppBanner;
