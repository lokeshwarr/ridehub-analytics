
import React, { useState } from 'react';
import Header from '@/components/Header';
import DemandMap from '@/components/DemandMap';
import { Button } from '@/components/ui/button';
import { Bike, Navigation, Layers, Circle, ArrowRight } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const MapView = () => {
  const [activePlatform, setActivePlatform] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handlePlatformFilter = (platform: string) => {
    setActivePlatform(activePlatform === platform ? null : platform);
  };
  
  const handleAcceptRide = (rideId: number, platform: string) => {
    // In a real app, this would make an API call to accept the ride
    toast({
      title: "Ride Accepted",
      description: `You've accepted a ride from ${platform}. A notification has been sent to the rider.`,
      variant: "default",
    });
  };
  
  const nearbyRides = [
    {
      id: 1,
      platform: 'Uber',
      location: 'Downtown Station',
      distance: '0.3',
      riders: 1,
      fare: '₹250',
      demand: 'High Demand'
    },
    {
      id: 2,
      platform: 'Ola',
      location: 'Central Park',
      distance: '0.7',
      riders: 2,
      fare: '₹320',
      demand: 'Medium Demand'
    },
    {
      id: 3,
      platform: 'Rapido',
      location: 'Riverside',
      distance: '1.2',
      riders: 1,
      fare: '₹180',
      demand: 'Low Demand'
    },
    {
      id: 4,
      platform: 'Uber',
      location: 'Metro Station',
      distance: '0.5',
      riders: 1,
      fare: '₹220',
      demand: 'Medium Demand'
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Uber': return 'text-ridehub-primary bg-ridehub-primary/20';
      case 'Ola': return 'text-ridehub-accent bg-ridehub-accent/20';
      case 'Rapido': return 'text-orange-500 bg-orange-500/20';
      default: return 'text-gray-500 bg-gray-500/20';
    }
  };
  
  const getDemandBadge = (demand: string) => {
    if (demand.includes('High')) return 'bg-green-100 text-green-800';
    if (demand.includes('Medium')) return 'bg-yellow-100 text-yellow-800';
    return 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="pb-20">
      <Header title="Ride Requests" />
      
      <DemandMap />
      
      {/* Filter options */}
      <div className="flex space-x-2 mb-4 overflow-x-auto pb-2">
        <Button 
          variant="outline" 
          size="sm" 
          className={`flex-shrink-0 rounded-full ${activePlatform === null ? 'bg-white border-ridehub-primary text-ridehub-primary' : ''}`}
          onClick={() => setActivePlatform(null)}
        >
          All Platforms
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className={`flex-shrink-0 rounded-full ${activePlatform === 'Uber' ? 'bg-white border-ridehub-primary text-ridehub-primary' : ''}`}
          onClick={() => handlePlatformFilter('Uber')}
        >
          Uber
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className={`flex-shrink-0 rounded-full ${activePlatform === 'Ola' ? 'bg-white border-ridehub-primary text-ridehub-primary' : ''}`}
          onClick={() => handlePlatformFilter('Ola')}
        >
          Ola
        </Button>
        <Button 
          variant="outline" 
          size="sm" 
          className={`flex-shrink-0 rounded-full ${activePlatform === 'Rapido' ? 'bg-white border-ridehub-primary text-ridehub-primary' : ''}`}
          onClick={() => handlePlatformFilter('Rapido')}
        >
          Rapido
        </Button>
      </div>
      
      {/* Nearby rides */}
      <h3 className="font-medium text-gray-700 mb-2">Nearby Ride Requests</h3>
      <div className="space-y-3">
        {nearbyRides
          .filter(ride => activePlatform === null || ride.platform === activePlatform)
          .map(ride => (
            <div key={ride.id} className="bg-white rounded-xl p-3 shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <div className="flex items-center">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${getPlatformColor(ride.platform)}`}>
                      <Bike className="h-3 w-3" />
                    </div>
                    <span className="font-medium">{ride.location}</span>
                    <span className="ml-2 text-xs font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600">
                      {ride.platform}
                    </span>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {ride.distance} miles away • {ride.riders} {ride.riders > 1 ? 'riders' : 'rider'} • <span className="font-semibold">{ride.fare}</span>
                  </div>
                </div>
                <div className={`${getDemandBadge(ride.demand)} text-xs font-medium px-2 py-0.5 rounded flex items-center`}>
                  {ride.demand}
                </div>
              </div>
              <div className="mt-2 flex justify-end">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-xs h-7 bg-ridehub-primary text-white border-0 hover:bg-ridehub-primary/90"
                  onClick={() => handleAcceptRide(ride.id, ride.platform)}
                >
                  Accept Ride
                </Button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MapView;
