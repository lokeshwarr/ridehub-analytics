
import React from 'react';
import { Bike, TrendingUp, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PlatformCardProps {
  name: string;
  isHot: boolean;
  price: string;
  demand: 'high' | 'medium' | 'low';
  earnings: string;
  color: string;
}

const PlatformCard = ({ name, isHot, price, demand, earnings, color }: PlatformCardProps) => {
  return (
    <div className="platform-card">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center">
          <div 
            className="flex items-center justify-center w-8 h-8 rounded-full mr-2"
            style={{ backgroundColor: color + '20' }}
          >
            <Bike style={{ color }} className="h-4 w-4" />
          </div>
          <h3 className="font-semibold text-ridehub-foreground">{name}</h3>
        </div>
        {isHot && (
          <div className="flex items-center bg-red-100 text-red-700 text-xs font-medium px-2 py-0.5 rounded">
            <TrendingUp className="h-3 w-3 mr-1" />
            HOT
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="text-sm">
          <div className="text-gray-500 text-xs">Price</div>
          <div className="font-medium">{price}</div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500 text-xs">Demand</div>
          <div className={cn(
            "font-medium",
            demand === 'high' ? 'text-green-600' : 
            demand === 'medium' ? 'text-yellow-600' : 'text-red-600'
          )}>
            {demand.charAt(0).toUpperCase() + demand.slice(1)}
          </div>
        </div>
        <div className="text-sm">
          <div className="text-gray-500 text-xs">Est. earn</div>
          <div className="font-medium">{earnings}</div>
        </div>
      </div>
      
      <Button 
        variant="ghost" 
        size="sm" 
        className="w-full justify-between border border-gray-200 hover:bg-gray-50"
      >
        View details <ArrowRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default PlatformCard;
