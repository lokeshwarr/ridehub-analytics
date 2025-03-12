
import React, { useEffect, useRef } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';

const DemandMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<google.maps.Map | null>(null);
  
  // This is a simplified visualization of demand zones
  // In a real app, this would be replaced with an actual map integration
  
  const demandZones = [
    { id: 1, lat: 19.076, lng: 72.8777, size: 40, intensity: 'high' }, // Mumbai
    { id: 2, lat: 28.6139, lng: 77.2090, size: 30, intensity: 'medium' }, // Delhi
    { id: 3, lat: 12.9716, lng: 77.5946, size: 25, intensity: 'low' }, // Bangalore
    { id: 4, lat: 17.3850, lng: 78.4867, size: 35, intensity: 'high' }, // Hyderabad
    { id: 5, lat: 13.0827, lng: 80.2707, size: 20, intensity: 'medium' }, // Chennai
  ];

  const getIntensityColor = (intensity: string) => {
    switch (intensity) {
      case 'high': return 'bg-red-500/20 border-red-500';
      case 'medium': return 'bg-yellow-500/20 border-yellow-500';
      case 'low': return 'bg-blue-500/20 border-blue-500';
      default: return 'bg-gray-500/20 border-gray-500';
    }
  };

  const getIntensityPulse = (intensity: string) => {
    return intensity === 'high' ? 'animate-pulse-slow' : '';
  };

  useEffect(() => {
    if (!window.google || !mapRef.current) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initMap;
      document.head.appendChild(script);
    } else {
      initMap();
    }

    return () => {
      // Cleanup if needed
    };
  }, []);

  const initMap = () => {
    if (!mapRef.current || !window.google) return;

    // Center on India
    const indiaCenter = { lat: 20.5937, lng: 78.9629 };
    
    googleMapRef.current = new window.google.maps.Map(mapRef.current, {
      center: indiaCenter,
      zoom: 5,
      mapTypeControl: false,
      streetViewControl: false,
      styles: [
        {
          featureType: 'poi',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        },
        {
          featureType: 'transit',
          elementType: 'labels',
          stylers: [{ visibility: 'off' }]
        }
      ]
    });

    // Add markers for demand zones
    demandZones.forEach(zone => {
      let color = '#3498db'; // blue
      if (zone.intensity === 'medium') color = '#f39c12'; // yellow
      if (zone.intensity === 'high') color = '#e74c3c'; // red

      // Create circular overlay for demand zone
      new window.google.maps.Circle({
        strokeColor: color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: color,
        fillOpacity: 0.2,
        map: googleMapRef.current,
        center: { lat: zone.lat, lng: zone.lng },
        radius: zone.size * 500, // Scale the size for better visibility
        animation: zone.intensity === 'high' ? window.google.maps.Animation.BOUNCE : undefined
      });

      // Add a marker
      new window.google.maps.Marker({
        position: { lat: zone.lat, lng: zone.lng },
        map: googleMapRef.current,
        title: `Demand Zone ${zone.id}`,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: color,
          fillOpacity: 0.6,
          strokeWeight: 0,
          scale: 8
        }
      });
    });

    // Add user marker (centered in Delhi for demo)
    new window.google.maps.Marker({
      position: { lat: 28.6139, lng: 77.2090 },
      map: googleMapRef.current,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        fillColor: '#3b82f6',
        fillOpacity: 1,
        strokeWeight: 1,
        strokeColor: '#ffffff',
        scale: 7
      },
      title: 'Your Location'
    });
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm overflow-hidden">
      <h3 className="font-semibold text-gray-800 mb-3">Demand Zones</h3>
      <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        {/* Google Map Container */}
        <div ref={mapRef} className="w-full h-full"></div>
        
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs z-10">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500 mr-1"></div>
            <span>High demand</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500 mr-1"></div>
            <span>Medium demand</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500 mr-1"></div>
            <span>Low demand</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandMap;
