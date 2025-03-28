import React, { useState } from 'react';
import Header from '@/components/Header';
import EarningsChart from '@/components/EarningsChart';
import StatCard from '@/components/StatCard';
import { DollarSign, TrendingUp, MapPin, CreditCard, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MobileNavbar from '@/components/MobileNavbar';
import { useLocation } from 'react-router-dom';
import AppBanner from '@/components/AppBanner';

const Analytics = () => {
  const [period, setPeriod] = useState<'daily' | 'weekly' | 'monthly'>('weekly');
  const location = useLocation();
  
  return (
    <div className="bg-ridehub-background min-h-screen bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-fixed bg-center">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        <AppBanner />
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="pb-4">
            <Header title="Earnings Analytics" />
            
            {/* Period selector */}
            <div className="flex space-x-2 mb-4">
              <Button 
                variant={period === 'daily' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('daily')}
                className="flex-1"
              >
                Daily
              </Button>
              <Button 
                variant={period === 'weekly' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('weekly')}
                className="flex-1"
              >
                Weekly
              </Button>
              <Button 
                variant={period === 'monthly' ? 'default' : 'outline'} 
                size="sm" 
                onClick={() => setPeriod('monthly')}
                className="flex-1"
              >
                Monthly
              </Button>
            </div>
            
            {/* Weekly stats */}
            <h3 className="font-medium text-gray-700 mb-2">
              {period === 'daily' ? 'Today' : period === 'weekly' ? 'This Week' : 'This Month'}
            </h3>
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
                value="Uber"
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
                    <div className="w-3 h-3 rounded-full bg-[#e74c3c] mr-2"></div>
                    <span className="text-sm">Uber</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">₹31,320.60</span>
                    <span className="text-xs text-gray-500">48%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#e74c3c] h-2 rounded-full" style={{ width: '48%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#4CAF50] mr-2"></div>
                    <span className="text-sm">Ola</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">₹20,223.82</span>
                    <span className="text-xs text-gray-500">31%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#4CAF50] h-2 rounded-full" style={{ width: '31%' }}></div>
                </div>
              </div>
              
              <div className="space-y-3 mt-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#FF9800] mr-2"></div>
                    <span className="text-sm">Rapido</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-sm font-medium mr-2">₹13,696.00</span>
                    <span className="text-xs text-gray-500">21%</span>
                  </div>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div className="bg-[#FF9800] h-2 rounded-full" style={{ width: '21%' }}></div>
                </div>
              </div>
            </div>
            
            {/* Earnings calendar */}
            <h3 className="font-medium text-gray-700 mt-4 mb-2">Earnings History</h3>
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2 text-gray-500" />
                  <span className="font-medium">October 2023</span>
                </div>
                <div className="text-sm font-medium">₹65,240.42</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: 31 }).map((_, i) => {
                  const day = i + 1;
                  const isToday = day === 15;
                  const hasEarnings = day <= 20; // For demo, assume earnings until the 20th
                
                  return (
                    <div 
                      key={day} 
                      className={`aspect-square rounded flex items-center justify-center text-xs ${
                        isToday ? 'bg-ridehub-primary text-white' : 
                        hasEarnings ? 'bg-gray-100' : 'bg-gray-50 text-gray-300'
                      }`}
                    >
                      {day}
                    </div>
                  );
                })}
              </div>
              
              <div className="flex justify-between items-center mt-3 text-xs text-gray-500">
                <div>Highest: ₹3,250 (Oct 12)</div>
                <div>Lowest: ₹1,320 (Oct 5)</div>
              </div>
            </div>
          </div>
        </div>
        <MobileNavbar activePath={location.pathname} />
      </div>
    </div>
  );
};

export default Analytics;
