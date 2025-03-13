
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EarningsChart = () => {
  // Sample data
  const data = [
    { name: 'Mon', Uber: 1200, Ola: 800, Rapido: 500 },
    { name: 'Tue', Uber: 1000, Ola: 1000, Rapido: 800 },
    { name: 'Wed', Uber: 1400, Ola: 900, Rapido: 700 },
    { name: 'Thu', Uber: 1700, Ola: 600, Rapido: 1100 },
    { name: 'Fri', Uber: 1900, Ola: 1200, Rapido: 1300 },
    { name: 'Sat', Uber: 2200, Ola: 1700, Rapido: 1400 },
    { name: 'Sun', Uber: 1800, Ola: 1500, Rapido: 1000 },
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
            <Bar dataKey="Uber" fill="#e74c3c" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Ola" fill="#4CAF50" radius={[4, 4, 0, 0]} />
            <Bar dataKey="Rapido" fill="#FF9800" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default EarningsChart;
