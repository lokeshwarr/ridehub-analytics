
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EarningsChart = () => {
  // Sample data
  const data = [
    { name: 'Mon', BlueBike: 120, GreenRide: 80, CityScoot: 50 },
    { name: 'Tue', BlueBike: 100, GreenRide: 100, CityScoot: 80 },
    { name: 'Wed', BlueBike: 140, GreenRide: 90, CityScoot: 70 },
    { name: 'Thu', BlueBike: 170, GreenRide: 60, CityScoot: 110 },
    { name: 'Fri', BlueBike: 190, GreenRide: 120, CityScoot: 130 },
    { name: 'Sat', BlueBike: 220, GreenRide: 170, CityScoot: 140 },
    { name: 'Sun', BlueBike: 180, GreenRide: 150, CityScoot: 100 },
  ];

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm h-64">
      <h3 className="font-semibold text-gray-800 mb-2">Earnings by Platform</h3>
      <div className="h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{
              top: 10,
              right: 10,
              left: -20,
              bottom: 0,
            }}
            barSize={12}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
            <XAxis dataKey="name" scale="point" axisLine={false} tickLine={false} tickMargin={8} tick={{ fontSize: 10 }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10 }} tickFormatter={(value) => `₹${value}`} />
            <Tooltip 
              formatter={(value: number) => [`₹${value}`, '']}
              itemStyle={{ fontSize: 12, padding: 0, margin: 0 }}
              contentStyle={{ borderRadius: 8, border: '1px solid #e2e8f0', padding: '8px 12px' }}
            />
            <Bar dataKey="BlueBike" fill="#1976D2" radius={[4, 4, 0, 0]} />
            <Bar dataKey="GreenRide" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="CityScoot" fill="#FF9800" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;
