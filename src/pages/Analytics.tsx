
import React from 'react';
import Header from '@/components/Header';
import EarningsChart from '@/components/EarningsChart';
import StatCard from '@/components/StatCard';
import { DollarSign, TrendingUp, MapPin, CreditCard } from 'lucide-react';

const Analytics = () => {
  return (
    <div className="pb-20">
      <Header title="Analytics" />
      
      {/* Weekly stats */}
      <h3 className="font-medium text-gray-700 mb-2">This Week</h3>
      <div className="grid grid-cols-2 gap-3 mb-4">
        <StatCard
          title="Total Earnings"
          value="₹65,240.42"
          icon={<DollarSign className="h-5 w-5 text-ridehub-primary" />}
          trend={{ value: "8%", positive: true }}
        />
        <StatCard
          title="Completed Rides"
          value="42"
          icon={<MapPin className="h-5 w-5 text-red-500" />}
          trend={{ value: "5", positive: true }}
        />
        <StatCard
          title="Top Platform"
          value="BlueBike"
          icon={<TrendingUp className="h-5 w-5 text-green-500" />}
        />
        <StatCard
          title="Avg. Per Ride"
          value="₹1,553.82"
          icon={<CreditCard className="h-5 w-5 text-purple-500" />}
          trend={{ value: "₹90", positive: true }}
        />
      </div>
      
      {/* Earnings chart */}
      <EarningsChart />
      
      {/* Platform breakdown */}
      <h3 className="font-medium text-gray-700 mt-4 mb-2">Platform Breakdown</h3>
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-ridehub-primary mr-2"></div>
              <span className="text-sm">BlueBike</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">₹31,320.60</span>
              <span className="text-xs text-gray-500">48%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-ridehub-primary h-2 rounded-full" style={{ width: '48%' }}></div>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-ridehub-accent mr-2"></div>
              <span className="text-sm">GreenRide</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">₹20,223.82</span>
              <span className="text-xs text-gray-500">31%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-ridehub-accent h-2 rounded-full" style={{ width: '31%' }}></div>
          </div>
        </div>
        
        <div className="space-y-3 mt-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-2"></div>
              <span className="text-sm">CityScoot</span>
            </div>
            <div className="flex items-center">
              <span className="text-sm font-medium mr-2">₹13,696.00</span>
              <span className="text-xs text-gray-500">21%</span>
            </div>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '21%' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
