
import React from 'react';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Bike, Navigation, Layers, Circle } from 'lucide-react';

const MapView = () => {
  return (
    <div className="pb-20">
      <Header title="Demand Map" />
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-4">
        {/* Map placeholder - in a real app this would be an actual map integration */}
        <div className="h-72 w-full bg-gray-100 relative">
          {/* Simplified map visualization */}
          <div className="absolute inset-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
          
          {/* Demand hotspots */}
          <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-red-500/20 rounded-full border-2 border-red-500 animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-yellow-500/20 rounded-full border-2 border-yellow-500"></div>
          <div className="absolute bottom-1/4 right-1/4 w-10 h-10 bg-red-500/20 rounded-full border-2 border-red-500 animate-pulse-slow"></div>
          
          {/* Bike station markers */}
          <div className="absolute top-2/5 left-2/5 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-1 rounded-full shadow-md">
              <Bike className="h-4 w-4 text-ridehub-primary" />
            </div>
          </div>
          <div className="absolute top-3/5 left-3/5 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-1 rounded-full shadow-md">
              <Bike className="h-4 w-4 text-ridehub-accent" />
            </div>
          </div>
          <div className="absolute top-2/3 left-1/3 -translate-x-1/2 -translate-y-1/2">
            <div className="bg-white p-1 rounded-full shadow-md">
              <Bike className="h-4 w-4 text-orange-500" />
            </div>
          </div>
          
          {/* User location */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <div className="absolute -inset-2 bg-blue-500/30 rounded-full animate-ping"></div>
              <div className="bg-blue-600 p-1 rounded-full relative z-10">
                <Navigation className="h-3 w-3 text-white" />
              </div>
            </div>
          </div>
          
          {/* Map controls */}
          <div className="absolute top-4 right-4 space-y-2">
            <Button size="icon" variant="secondary" className="bg-white shadow-md h-8 w-8">
              <Layers className="h-4 w-4" />
            </Button>
            <Button size="icon" variant="secondary" className="bg-white shadow-md h-8 w-8">
              <Circle className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Filter options */}
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        <Button variant="outline" size="sm" className="flex-shrink-0 rounded-full">
          All Platforms
        </Button>
        <Button variant="outline" size="sm" className="flex-shrink-0 rounded-full bg-white border-ridehub-primary text-ridehub-primary">
          BlueBike
        </Button>
        <Button variant="outline" size="sm" className="flex-shrink-0 rounded-full">
          GreenRide
        </Button>
        <Button variant="outline" size="sm" className="flex-shrink-0 rounded-full">
          CityScoot
        </Button>
      </div>
      
      {/* Nearby stations */}
      <h3 className="font-medium text-gray-700 mb-2">Nearby Stations</h3>
      <div className="space-y-3">
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-ridehub-primary/20 flex items-center justify-center mr-2">
                  <Bike className="h-3 w-3 text-ridehub-primary" />
                </div>
                <span className="font-medium">Downtown Station</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">0.3 miles away • 8 bikes available</div>
            </div>
            <div className="bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">
              High Demand
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-ridehub-accent/20 flex items-center justify-center mr-2">
                  <Bike className="h-3 w-3 text-ridehub-accent" />
                </div>
                <span className="font-medium">Central Park</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">0.7 miles away • 12 bikes available</div>
            </div>
            <div className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">
              Medium Demand
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-3 shadow-sm">
          <div className="flex justify-between items-center">
            <div>
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                  <Bike className="h-3 w-3 text-orange-500" />
                </div>
                <span className="font-medium">Riverside</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">1.2 miles away • 5 bikes available</div>
            </div>
            <div className="bg-gray-100 text-gray-800 text-xs font-medium px-2 py-0.5 rounded">
              Low Demand
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
