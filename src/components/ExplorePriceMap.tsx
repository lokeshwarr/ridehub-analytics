
import React, { useEffect, useRef, useState } from 'react';
import { MapPin } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

// Define types for Google Maps
declare global {
  interface Window {
    google: any;
    initExplorePriceMap: () => void;
  }
}

const ExplorePriceMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const googleMapRef = useRef<any>(null);
  const [mapLoaded, setMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  const { toast } = useToast();
  
  // This is a simplified visualization of price zones
  const loadGoogleMapsScript = () => {
    // Check if script is already loaded
    const existingScript = document.getElementById('google-maps-explore-script');
    if (existingScript) return;

    // Create script element with a unique callback name
    const script = document.createElement('script');
    script.id = 'google-maps-explore-script';
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg&libraries=places&callback=initExplorePriceMap`;
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
    console.log('Google Maps script added for price explorer');
  };

  useEffect(() => {
    // Define the callback function that will be called when the script loads
    // Using a different name than the one in DemandMap
    window.initExplorePriceMap = () => {
      console.log('initExplorePriceMap called');
      if (!mapRef.current) {
        console.error('Price map container ref not available');
        return;
      }
      
      try {
        initializeMap();
        setMapLoaded(true);
        console.log('Price map successfully initialized');
      } catch (error) {
        console.error('Error initializing price map:', error);
        setMapError('Error initializing price map');
        toast({
          title: 'Map Error',
          description: 'There was a problem loading the map. Please try again later.',
          variant: 'destructive',
        });
      }
    };

    // If Google Maps is not loaded yet, load it
    if (!window.google || !window.google.maps) {
      console.log('Loading Google Maps API for price map...');
      loadGoogleMapsScript();
    } else {
      console.log('Google Maps already loaded, initializing price map...');
      // If already loaded, just initialize map
      initializeMap();
      setMapLoaded(true);
    }

    return () => {
      // Cleanup if needed
      console.log('Cleaning up price map component');
      // Optionally remove the callback function from window to prevent memory leaks
      // But only if no other component is using Google Maps
      if (window.initExplorePriceMap) {
        // Only delete if no other map components are active
        // This is a simple approach; in a real app, you might use a more robust solution
        if (!document.getElementById('google-maps-script')) {
          delete window.initExplorePriceMap;
        }
      }
    };
  }, []);

  const initializeMap = () => {
    console.log('Initializing price map...');
    if (!mapRef.current || !window.google || !window.google.maps) {
      console.error('Price map initialization prerequisites not met');
      return;
    }

    try {
      // Center on specific location (using Mumbai coordinates)
      const center = { lat: 19.076, lng: 72.8777 };
      
      googleMapRef.current = new window.google.maps.Map(mapRef.current, {
        center,
        zoom: 13,
        mapTypeControl: false,
        fullscreenControl: false,
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

      // Add markers for price points
      const priceMarkers = [
        { platform: 'Uber', position: { lat: 19.076, lng: 72.8777 }, price: '₹250' },
        { platform: 'Ola', position: { lat: 19.0760, lng: 72.8820 }, price: '₹230' },
        { platform: 'Rapido', position: { lat: 19.0790, lng: 72.8750 }, price: '₹180' }
      ];

      // Add price markers
      priceMarkers.forEach(marker => {
        let color = '#3498db'; // blue for default
        if (marker.platform === 'Ola') color = '#f39c12'; // yellow for Ola
        if (marker.platform === 'Uber') color = '#e74c3c'; // red for Uber
        
        // Create custom price marker
        const priceMarker = new window.google.maps.Marker({
          position: marker.position,
          map: googleMapRef.current,
          title: `${marker.platform}: ${marker.price}`,
          icon: {
            path: window.google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 0.7,
            strokeWeight: 1,
            strokeColor: '#ffffff',
            scale: 10
          },
          label: {
            text: marker.price,
            color: '#ffffff',
            fontSize: '10px',
            fontWeight: 'bold'
          }
        });

        // Add click event
        priceMarker.addListener('click', () => {
          toast({
            title: marker.platform,
            description: `Price: ${marker.price} - Click 'Select Ride' to proceed`,
          });
        });
      });

      // Add current location marker
      new window.google.maps.Marker({
        position: { lat: 19.0730, lng: 72.8800 },
        map: googleMapRef.current,
        title: 'Your Location',
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          fillColor: '#3b82f6',
          fillOpacity: 1,
          strokeWeight: 1,
          strokeColor: '#ffffff',
          scale: 7
        }
      });
      
      // Add direction line (simple example)
      const directionPath = new window.google.maps.Polyline({
        path: [
          { lat: 19.0730, lng: 72.8800 },  // start point
          { lat: 19.076, lng: 72.8777 }    // end point
        ],
        geodesic: true,
        strokeColor: '#5d9cec',
        strokeOpacity: 1.0,
        strokeWeight: 2
      });

      directionPath.setMap(googleMapRef.current);
      
      console.log('Price map initialized with markers');
    } catch (error) {
      console.error('Error during price map initialization:', error);
      setMapError('Error during price map initialization');
      toast({
        title: 'Map Error',
        description: 'There was a problem setting up the price map. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="bg-white rounded-xl p-4 mb-4 shadow-sm overflow-hidden">
      <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-1">
        <MapPin className="h-4 w-4" /> Available Rides Nearby
      </h3>
      <div className="relative h-56 bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
        {/* Google Map Container */}
        <div ref={mapRef} className="w-full h-full"></div>
        
        {/* Error Message */}
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100/70">
            <div className="text-red-500 bg-white p-3 rounded-lg shadow-md text-center">
              <p className="font-medium">Price map could not be loaded</p>
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
            <div className="text-ridehub-primary animate-pulse">Loading price map...</div>
          </div>
        )}
        
        {/* Legend */}
        <div className="absolute bottom-2 right-2 bg-white/90 p-2 rounded-md text-xs z-10">
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-red-500 mr-1"></div>
            <span>Uber</span>
          </div>
          <div className="flex items-center mb-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500 mr-1"></div>
            <span>Ola</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 rounded-full bg-blue-500 mr-1"></div>
            <span>Rapido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePriceMap;
