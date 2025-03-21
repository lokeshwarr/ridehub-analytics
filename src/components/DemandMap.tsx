
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

// Define types for Google Maps
declare global {
  interface Window {
    google: any;
    initMap: () => void;
  }
}

const DemandMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // This is a simplified visualization of demand zones
  // In a real app, this would be replaced with an actual map integration
  
  const demandZones = [
    { id: 1, lat: 19.076, lng: 72.8777, size: 40, intensity: 'high', platform: 'Uber' }, // Mumbai
    { id: 2, lat: 28.6139, lng: 77.2090, size: 30, intensity: 'medium', platform: 'Ola' }, // Delhi
    { id: 3, lat: 12.9716, lng: 77.5946, size: 25, intensity: 'low', platform: 'Rapido' }, // Bangalore
    { id: 4, lat: 17.3850, lng: 78.4867, size: 35, intensity: 'high', platform: 'Uber' }, // Hyderabad
    { id: 5, lat: 13.0827, lng: 80.2707, size: 20, intensity: 'medium', platform: 'Ola' }, // Chennai
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

  const loadGoogleMapsScript = () => {
    // Check if script is already loaded
    const existingScript = document.getElementById('google-maps-script');
    if (existingScript) return;

    // Create script element
    const script = document.createElement('script');
    script.id = 'google-maps-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places&callback=initMap`;
    script.async = true;
    script.defer = true;
    script.onerror = () => {
      setMapError('Failed to load Google Maps API');
      toast({
        title: 'Map Error',
        description: 'Failed to load Google Maps. Please check your internet connection.',
        variant: 'destructive',
      });
      console.error('Failed to load Google Maps API');
    };
    document.head.appendChild(script);
    
    // Log for debugging
    console.log('Google Maps script added to document');
  };

  useEffect(() => {
    // Define the callback function that will be called when the script loads
    window.initMap = () => {
      console.log('initMap called');
      if (!mapRef.current) {
        console.error('Map container ref not available');
        return;
      }
      
      try {
        initializeMap();
        setMapLoaded(true);
        console.log('Map successfully initialized');
      } catch (error) {
        console.error('Error initializing map:', error);
        setMapError('Error initializing map');
        toast({
          title: 'Map Error',
          description: 'There was a problem loading the map. Please try again later.',
          variant: 'destructive',
        });
      }
    };

    // If Google Maps is not loaded yet, load it
    if (!window.google || !window.google.maps) {
      console.log('Loading Google Maps API...');
      loadGoogleMapsScript();
    } else {
      console.log('Google Maps already loaded, initializing map...');
      // If already loaded, just initialize map
      initializeMap();
      setMapLoaded(true);
    }

    return () => {
      // Cleanup if needed
      console.log('Cleaning up map component');
      if (window.google && window.google.maps && googleMapRef.current) {
        // No specific cleanup needed for Google Maps
      }
      // Optionally remove the initMap function from window to prevent memory leaks
      delete window.initMap;
    };
  }, []);

  const initializeMap = () => {
    console.log('Initializing map...');
    if (!mapRef.current || !window.google || !window.google.maps) {
      console.error('Map initialization prerequisites not met');
      return;
    }

    try {
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
        let color = '#3498db'; // blue for Rapido
        if (zone.platform === 'Ola') color = '#f39c12'; // yellow for Ola
        if (zone.platform === 'Uber') color = '#e74c3c'; // red for Uber

        // Create circular overlay for demand zone
        new window.google.maps.Circle({
          strokeColor: color,
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: color,
          fillOpacity: 0.2,
          map: googleMapRef.current,
          center: { lat: zone.lat, lng: zone.lng },
          radius: zone.size * 1000, // Scale the size for better visibility
        });

        // Add a marker
        new window.google.maps.Marker({
          position: { lat: zone.lat, lng: zone.lng },
          map: googleMapRef.current,
          title: `${zone.platform} - ${zone.intensity} demand`,
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
      
      console.log('Map initialized with markers');
    } catch (error) {
      console.error('Error during map initialization:', error);
      setMapError('Error during map initialization');
      toast({
        title: 'Map Error',
        description: 'There was a problem setting up the map. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm overflow-hidden">
      <h3 className="font-semibold text-gray-800 mb-3">Live Ride Requests Map</h3>
      <div className="relative h-64 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        {/* Google Map Container */}
        <div ref={mapRef} className="w-full h-full"></div>
        
        {/* Error Message */}
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/70">
            <div className="text-red-500 bg-white p-3 rounded-lg shadow-md text-center">
              <p className="font-medium">Map could not be loaded</p>
              <p className="text-sm">{mapError}</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-2 px-3 py-1 bg-ridehub-primary text-white rounded-md text-sm"
              >
                Retry
              </button>
            </div>
          </div>
        )}
        
        {/* Loading State */}
        {!mapLoaded && !mapError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/70">
            <div className="text-ridehub-primary animate-pulse">Loading map...</div>
          </div>
        )}
        
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs z-10">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500 mr-1"></div>
            <span>Uber</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500 mr-1"></div>
            <span>Ola</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500/20 border border-blue-500 mr-1"></div>
            <span>Rapido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DemandMap;
