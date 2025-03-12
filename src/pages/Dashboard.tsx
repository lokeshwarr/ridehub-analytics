
import React from 'react';
import Header from '@/components/Header';
import StatCard from '@/components/StatCard';
import PlatformCard from '@/components/PlatformCard';
import DemandMap from '@/components/DemandMap';
import { Bike, DollarSign, Fuel, Clock } from 'lucide-react';

const Dashboard = () => {
  return (
    <div className="pb-20">
      <Header title="Dashboard" />
      
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
          value="8"
          icon={<Bike className="h-5 w-5 text-ridehub-accent" />}
          trend={{ value: "3", positive: true }}
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
      
      {/* Demand map */}
      <DemandMap />
      
      {/* Available platforms */}
      <h2 className="text-lg font-bold mb-3 text-ridehub-foreground">Available Platforms</h2>
      <div className="space-y-3">
        <PlatformCard
          name="BlueBike"
          isHot={true}
          price="₹350/ride"
          demand="high"
          earnings="₹1,200-1,600/h"
          color="#1976D2"
        />
        <PlatformCard
          name="GreenRide"
          isHot={false}
          price="₹320/ride"
          demand="medium"
          earnings="₹950-1,250/h"
          color="#4CAF50"
        />
        <PlatformCard
          name="CityScoot"
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
