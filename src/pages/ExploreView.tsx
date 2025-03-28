
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import MobileNavbar from '@/components/MobileNavbar';
import AppBanner from '@/components/AppBanner';
import { Button } from '@/components/ui/button';
import { Compass, Bike, DollarSign, TrendingUp, Clock } from 'lucide-react';
import ExplorePriceMap from '@/components/ExplorePriceMap';

const ExploreView = () => {
  const location = useLocation();
  const [selectedPriceOption, setSelectedPriceOption] = useState<number | null>(null);

  const priceOptions = [
    {
      id: 1,
      platform: 'Uber',
      price: 250,
      commission: 50,
      commissionPercentage: 20,
      estimatedTime: '15-20 mins',
      popularity: 'High',
      distance: '5.2 km'
    },
    {
      id: 2,
      platform: 'Ola',
      price: 230,
      commission: 46,
      commissionPercentage: 20,
      estimatedTime: '18-25 mins',
      popularity: 'Medium',
      distance: '5.2 km'
    },
    {
      id: 3,
      platform: 'Rapido',
      price: 180,
      commission: 45,
      commissionPercentage: 25,
      estimatedTime: '20-25 mins',
      popularity: 'Medium',
      distance: '5.2 km'
    },
    {
      id: 4,
      platform: 'InDrive',
      price: 210,
      commission: 21,
      commissionPercentage: 10,
      estimatedTime: '20-30 mins',
      popularity: 'Low',
      distance: '5.2 km'
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'Uber': return 'bg-ridehub-primary/10 border-ridehub-primary';
      case 'Ola': return 'bg-ridehub-accent/10 border-ridehub-accent';
      case 'Rapido': return 'bg-orange-500/10 border-orange-500';
      case 'InDrive': return 'bg-blue-500/10 border-blue-500';
      default: return 'bg-gray-100 border-gray-300';
    }
  };

  return (
    <div className="bg-ridehub-background min-h-screen bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-fixed bg-center">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        <AppBanner />
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="pb-4">
            <Header title="Explore Best Rides" />
            
            {/* Happy Customer Image */}
            <div className="relative rounded-lg overflow-hidden mb-4">
              <img 
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&w=800&q=80" 
                alt="Happy customer on bike" 
                className="w-full h-40 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">Find Your Perfect Ride</h3>
                <p className="text-white/90 text-sm">Compare prices across platforms</p>
              </div>
            </div>

            {/* Price Map */}
            <ExplorePriceMap />

            {/* Price Comparison */}
            <div className="mt-4">
              <h3 className="font-medium text-gray-800 mb-2 flex items-center gap-1">
                <DollarSign className="h-4 w-4" /> Price Comparison
              </h3>
              <div className="space-y-3">
                {priceOptions.map((option) => (
                  <div 
                    key={option.id}
                    onClick={() => setSelectedPriceOption(option.id === selectedPriceOption ? null : option.id)}
                    className={`bg-white rounded-xl p-3 border ${option.id === selectedPriceOption ? 'border-ridehub-primary' : 'border-gray-200'} transition-all cursor-pointer`}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-2 ${getPlatformColor(option.platform)}`}>
                          <Bike className="h-4 w-4" />
                        </div>
                        <div>
                          <span className="font-medium">{option.platform}</span>
                          <div className="text-xs text-gray-500">
                            {option.estimatedTime} • {option.distance}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">₹{option.price}</div>
                        <div className="text-xs text-green-600">
                          ₹{option.commission} commission ({option.commissionPercentage}%)
                        </div>
                      </div>
                    </div>
                    
                    {option.id === selectedPriceOption && (
                      <div className="mt-3 pt-2 border-t border-gray-100">
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" /> Wait time:
                          </div>
                          <span>{option.estimatedTime}</span>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 mb-1">
                          <div className="flex items-center gap-1">
                            <TrendingUp className="h-3 w-3" /> Popularity:
                          </div>
                          <span>{option.popularity}</span>
                        </div>
                        <div className="mt-2 flex justify-end">
                          <Button
                            size="sm"
                            className="bg-ridehub-primary text-white h-8 text-xs px-4"
                          >
                            Select Ride
                          </Button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <MobileNavbar activePath={location.pathname} />
      </div>
    </div>
  );
};

export default ExploreView;
