
import React from 'react';

const AppBanner = () => {
  return (
    <div className="flex flex-col items-center mb-4 bg-gradient-to-r from-orange-400/80 to-yellow-300/80 p-3 rounded-lg shadow-md backdrop-blur-sm">
      <h1 className="text-2xl font-bold text-white">RideHub</h1>
      <p className="text-sm text-white/90 italic">"Smartness is key"</p>
    </div>
  );
};

export default AppBanner;
