
import React from 'react';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import PlatformCard from '@/components/PlatformCard';
import DemandMap from '@/components/DemandMap';
import ActiveRides from '@/components/ActiveRides';
import { Bike, DollarSign, Fuel, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Dashboard = () => {
  return (
    <div className="pb-20">
      <Header title="Ride Dashboard" />
      
      {/* Stats section */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatCard
          title="Today's Earnings"
          value="₹8,560.50"
          icon={<DollarSign className="h-5 w-5 text-ridehub-primary" />}
          trend={{ value: "12%", positive: true }}
        />
        <StatCard
          title="Active Rides"
          value="3"
          icon={<Bike className="h-5 w-5 text-ridehub-accent" />}
          trend={{ value: "2", positive: true }}
        />
        <StatCard
          title="Fuel Efficiency"
          value="89%"
          icon={<Fuel className="h-5 w-5 text-yellow-500" />}
          trend={{ value: "4%", positive: true }}
        />
        <StatCard
          title="Avg. Ride Time"
          value="18 min"
          icon={<Clock className="h-5 w-5 text-purple-500" />}
          trend={{ value: "2 min", positive: false }}
        />
      </div>
      
      {/* Platform earnings breakdown */}
      <div className="bg-white rounded-xl p-4 mb-4 shadow-sm">
        <h3 className="font-semibold text-gray-800 mb-3">Today's Platform Breakdown</h3>
        
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-ridehub-primary/20 flex items-center justify-center mr-2">
                <Bike className="h-4 w-4 text-ridehub-primary" />
              </div>
              <span>Uber</span>
            </div>
            <div className="text-right">
              <div className="font-medium">₹4,320.50</div>
              <div className="text-xs text-gray-500">8 rides</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-ridehub-accent/20 flex items-center justify-center mr-2">
                <Bike className="h-4 w-4 text-ridehub-accent" />
              </div>
              <span>Ola</span>
            </div>
            <div className="text-right">
              <div className="font-medium">₹3,150.00</div>
              <div className="text-xs text-gray-500">6 rides</div>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center mr-2">
                <Bike className="h-4 w-4 text-orange-500" />
              </div>
              <span>Rapido</span>
            </div>
            <div className="text-right">
              <div className="font-medium">₹1,090.00</div>
              <div className="text-xs text-gray-500">4 rides</div>
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-gray-100 rounded-full h-2 mb-1">
            <div className="flex h-2 rounded-full">
              <div className="bg-ridehub-primary h-2 rounded-l-full" style={{ width: '50%' }}></div>
              <div className="bg-ridehub-accent h-2" style={{ width: '37%' }}></div>
              <div className="bg-orange-500 h-2 rounded-r-full" style={{ width: '13%' }}></div>
            </div>
          </div>
          <div className="flex justify-between text-xs text-gray-500">
            <span>Uber: 50%</span>
            <span>Ola: 37%</span>
            <span>Rapido: 13%</span>
          </div>
        </div>
      </div>
      
      {/* Active rides */}
      <ActiveRides />
      
      {/* Available platforms */}
      <h2 className="text-lg font-bold mb-3 mt-4 text-ridehub-foreground">Available Platforms</h2>
      <div className="space-y-3">
        <PlatformCard
          name="Uber"
          isHot={true}
          price="₹350/ride"
          demand="high"
          earnings="₹1,200-1,600/h"
          color="#e74c3c"
        />
        <PlatformCard
          name="Ola"
          isHot={false}
          price="₹320/ride"
          demand="medium"
          earnings="₹950-1,250/h"
          color="#4CAF50"
        />
        <PlatformCard
          name="Rapido"
          isHot={false}
          price="₹300/ride"
          demand="low"
          earnings="₹850-1,100/h"
          color="#FF9800"
        />
      </div>
    </div>
  );
};

export default Dashboard;
