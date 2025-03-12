
import React from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const DemandMap = () => {
  // This is a simplified visualization of demand zones
  // In a real app, this would be replaced with an actual map integration
  
  const demandZones = [
    { id: 1, x: 20, y: 30, size: 40, intensity: 'high' },
    { id: 2, x: 65, y: 50, size: 30, intensity: 'medium' },
    { id: 3, x: 35, y: 70, size: 25, intensity: 'low' },
    { id: 4, x: 80, y: 25, size: 35, intensity: 'high' },
    { id: 5, x: 50, y: 40, size: 20, intensity: 'medium' },
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'high': return 'bg-red-500/20 border-red-500';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500';
      case 'low': return 'bg-blue-500/20 border-blue-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  const getIntensityPulse = (intensity: string) => {
    return intensity === 'high' ? 'animate-pulse-slow' : '';
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm overflow-hidden">
      <h3 className="font-semibold text-gray-800 mb-3">Demand Zones</h3>
      <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        {/* Simplified map background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/3 left-1/4 w-1/2 h-px bg-gray-400"></div>
          <div className="absolute top-2/3 left-1/4 w-1/2 h-px bg-gray-400"></div>
          <div className="absolute left-1/3 top-1/4 h-1/2 w-px bg-gray-400"></div>
          <div className="absolute left-2/3 top-1/4 h-1/2 w-px bg-gray-400"></div>
        </div>
        
        {/* Demand zones as circles */}
        {demandZones.map((zone) => (
          <div
            key={zone.id}
            className={cn(
              "absolute rounded-full border-2 -translate-x-1/2 -translate-y-1/2",
              getIntensityColor(zone.intensity),
              getIntensityPulse(zone.intensity)
            )}
            style={{
              left: `${zone.x}%`,
              top: `${zone.y}%`,
              width: `${zone.size}px`,
              height: `${zone.size}px`,
            }}
          ></div>
        ))}
        
        {/* User's current location */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="relative">
            <div className="absolute -top-1 -left-1 w-6 h-6 bg-blue-500/30 rounded-full animate-ping"></div>
            <MapPin className="w-4 h-4 text-blue-600 relative z-10" />
          </div>
        </div>
        
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500 mr-1"></div>
            <span>High demand</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500 mr-1"></div>
            <span>Medium demand</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500 mr-1"></div>
            <span>Low demand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandMap;
