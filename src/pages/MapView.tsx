import React from 'react';
import Header from '@/components/Header';
import DemandMap from '@/components/DemandMap';
import { Button } from '@/components/ui/button';
import { Bike, Navigation, Layers, Circle } from 'lucide-react';

const MapView = () => {
  return (
    <div className="pb-20">
      <Header title="Demand Map" />
      
      <DemandMap />
      
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
