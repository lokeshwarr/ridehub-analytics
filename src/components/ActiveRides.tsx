
import React from 'react';
import { Bike, Navigation, PhoneCall, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ActiveRideProps {
  platform: string;
  customer: string;
  pickupLocation: string;
  destination: string;
  fare: string;
  eta: string;
  status: 'en-route' | 'waiting' | 'in-progress';
}

const ActiveRide = ({ platform, customer, pickupLocation, destination, fare, eta, status }: ActiveRideProps) => {
  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Uber': return 'text-ridehub-primary bg-ridehub-primary/20 border-ridehub-primary';
      case 'Ola': return 'text-ridehub-accent bg-ridehub-accent/20 border-ridehub-accent';
      case 'Rapido': return 'text-orange-500 bg-orange-500/20 border-orange-500';
      default: return 'text-gray-500 bg-gray-500/20 border-gray-500';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'en-route': return 'bg-blue-100 text-blue-800';
      case 'waiting': return 'bg-yellow-100 text-yellow-800';
      case 'in-progress': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'en-route': return 'En Route to Pickup';
      case 'waiting': return 'Waiting for Rider';
      case 'in-progress': return 'Ride in Progress';
      default: return status;
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm mb-3 border-l-4" style={{ borderLeftColor: platform === 'Uber' ? '#e74c3c' : platform === 'Ola' ? '#4CAF50' : '#FF9800' }}>
      <div className="flex justify-between items-start">
        <div>
          <div className="flex items-center">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-2 ${getPlatformColor(platform)}`}>
              <Bike className="h-3 w-3" />
            </div>
            <span className="font-medium">{platform}</span>
            <span className={`ml-2 text-xs font-medium px-2 py-0.5 rounded ${getStatusBadge(status)}`}>
              {getStatusText(status)}
            </span>
          </div>
          
          <div className="mt-3 text-sm">
            <div className="flex items-start">
              <User className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
              <div>
                <div className="font-medium">{customer}</div>
                <div className="text-xs text-gray-500">{fare}</div>
              </div>
            </div>
          </div>
          
          <div className="mt-2 text-sm">
            <div className="flex items-start">
              <Navigation className="h-4 w-4 mr-2 mt-0.5 text-gray-500" />
              <div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-blue-500 mr-1"></div>
                  <span>{pickupLocation}</span>
                </div>
                <div className="h-4 border-l border-dashed border-gray-300 ml-1"></div>
                <div className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-red-500 mr-1"></div>
                  <span>{destination}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-xs text-gray-500 mt-2">ETA: {eta}</div>
        </div>
      </div>
      
      <div className="flex space-x-2 mt-3">
        <Button variant="outline" size="sm" className="w-full justify-center">
          <Navigation className="h-4 w-4 mr-1" /> Navigate
        </Button>
        <Button variant="outline" size="sm" className="w-full justify-center">
          <PhoneCall className="h-4 w-4 mr-1" /> Contact
        </Button>
      </div>
    </div>
  );
};

const ActiveRides = () => {
  const rides: ActiveRideProps[] = [
    {
      platform: 'Uber',
      customer: 'Rahul Sharma',
      pickupLocation: 'Connaught Place',
      destination: 'Hauz Khas Village',
      fare: '₹350',
      eta: '5 min',
      status: 'en-route'
    },
    {
      platform: 'Ola',
      customer: 'Priya Patel',
      pickupLocation: 'Defence Colony',
      destination: 'Lodhi Garden',
      fare: '₹280',
      eta: '2 min',
      status: 'waiting'
    },
    {
      platform: 'Rapido',
      customer: 'Amit Singh',
      pickupLocation: 'Karol Bagh',
      destination: 'Chandni Chowk',
      fare: '₹200',
      eta: '15 min',
      status: 'in-progress'
    }
  ];

  return (
    <div>
      <h3 className="font-medium text-gray-700 mb-2">Active Rides</h3>
      <div className="space-y-3">
        {rides.map((ride, index) => (
          <ActiveRide key={index} {...ride} />
        ))}
      </div>
    </div>
  );
};

export default ActiveRides;
