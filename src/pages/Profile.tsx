
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Bike, Star, Award, Clock, Settings, LogOut, CreditCard, Bell, Shield } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Profile = () => {
  const navigate = useNavigate();
  
  const handleEditProfile = () => {
    toast({
      title: "Profile Update",
      description: "Profile editing will be available soon!",
      duration: 3000,
    });
  };
  
  const handleSettingClick = (setting: string) => {
    toast({
      title: `${setting}`,
      description: "This feature will be available soon!",
      duration: 3000,
    });
  };
  
  const handleSignOut = () => {
    toast({
      title: "Signing Out",
      description: "You have been signed out successfully",
      duration: 3000,
    });
    
    // Simulate logout by redirecting to home after a delay
    setTimeout(() => {
      navigate('/');
    }, 1500);
  };
  
  return (
    <div className="pb-20">
      <Header title="Profile" />
      
      {/* Profile summary */}
      <div className="bg-white rounded-xl shadow-sm p-4 mb-6 text-center">
        <div className="w-20 h-20 rounded-full bg-gray-200 mx-auto mb-3 relative overflow-hidden">
          {/* This would be a real profile picture in production */}
          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
            <span className="text-xl font-semibold">JD</span>
          </div>
        </div>
        <h2 className="text-lg font-bold">John Doe</h2>
        <p className="text-gray-500 text-sm">Pro Driver • Since Jan 2023</p>
        
        <div className="flex justify-center mt-2 mb-4">
          <div className="flex items-center text-yellow-500">
            <Star className="fill-yellow-500 h-4 w-4" />
            <Star className="fill-yellow-500 h-4 w-4" />
            <Star className="fill-yellow-500 h-4 w-4" />
            <Star className="fill-yellow-500 h-4 w-4" />
            <Star className="fill-yellow-500 h-4 w-4 stroke-0" />
            <span className="text-gray-800 ml-1 text-sm font-medium">4.9</span>
          </div>
        </div>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="text-center">
            <div className="text-sm font-semibold">346</div>
            <div className="text-xs text-gray-500">Rides</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold">₹3,98,240</div>
            <div className="text-xs text-gray-500">Earnings</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold">623</div>
            <div className="text-xs text-gray-500">Hours</div>
          </div>
        </div>
        
        <Button className="bg-ridehub-primary hover:bg-ridehub-primary/90" onClick={handleEditProfile}>Edit Profile</Button>
      </div>
      
      {/* Badges section */}
      <h3 className="font-medium text-gray-700 mb-2">Your Badges</h3>
      <Card className="p-4 mb-6">
        <div className="flex justify-between gap-2">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-1">
              <Award className="h-6 w-6 text-ridehub-primary" />
            </div>
            <span className="text-xs text-center">Top Earner</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-1">
              <Clock className="h-6 w-6 text-ridehub-accent" />
            </div>
            <span className="text-xs text-center">Punctual</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mb-1">
              <Bike className="h-6 w-6 text-yellow-600" />
            </div>
            <span className="text-xs text-center">100+ Rides</span>
          </div>
          <div className="flex flex-col items-center opacity-40">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center mb-1">
              <Star className="h-6 w-6 text-gray-400" />
            </div>
            <span className="text-xs text-center">Unlock Next</span>
          </div>
        </div>
      </Card>
      
      {/* Settings list */}
      <h3 className="font-medium text-gray-700 mb-2">Settings</h3>
      <Card className="divide-y">
        <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick("Payment Methods")}>
          <div className="flex items-center">
            <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
            <span>Payment Methods</span>
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
        <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick("Notifications")}>
          <div className="flex items-center">
            <Bell className="h-5 w-5 text-gray-500 mr-3" />
            <span>Notifications</span>
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
        <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick("Privacy & Security")}>
          <div className="flex items-center">
            <Shield className="h-5 w-5 text-gray-500 mr-3" />
            <span>Privacy & Security</span>
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
        <div className="flex items-center justify-between p-4" onClick={() => navigate('/settings')}>
          <div className="flex items-center">
            <Settings className="h-5 w-5 text-gray-500 mr-3" />
            <span>App Settings</span>
          </div>
          <div className="text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </Card>
      
      {/* Logout button */}
      <div className="mt-6">
        <Button variant="outline" className="w-full border-red-200 text-red-500 hover:bg-red-50" onClick={handleSignOut}>
          <LogOut className="h-4 w-4 mr-2" /> Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
