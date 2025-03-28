import React from 'react';
import Header from '@/components/Header';
import { 
  CreditCard, 
  Bell, 
  Shield, 
  Languages, 
  HelpCircle, 
  Info, 
  Smartphone,
  DollarSign
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import MobileNavbar from '@/components/MobileNavbar';
import { Switch } from '@/components/ui/switch';
import { toast } from '@/hooks/use-toast';
import { useLocation } from 'react-router-dom';
import AppBanner from '@/components/AppBanner';

const Settings = () => {
  const location = useLocation();
  
  const handleSettingClick = (setting: string) => {
    toast({
      title: `${setting} settings`,
      description: "This feature will be available soon!",
      duration: 3000,
    });
  };
  
  return (
    <div className="bg-ridehub-background min-h-screen bg-[url('https://images.unsplash.com/photo-1500673922987-e212871fec22?auto=format&fit=crop&w=1000&q=80')] bg-cover bg-fixed bg-center">
      <div className="container px-4 py-4 pb-20 max-w-md mx-auto">
        <AppBanner />
        <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
          <div className="pb-4">
            <Header title="Settings" />
            
            <div className="space-y-6">
              <Card className="divide-y">
                <h3 className="font-medium text-gray-700 p-4">Account Settings</h3>
                
                <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick('Payment Methods')}>
                  <div className="flex items-center">
                    <CreditCard className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Payment Methods</span>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick('Notifications')}>
                  <div className="flex items-center">
                    <Bell className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Notifications</span>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick('Privacy & Security')}>
                  <div className="flex items-center">
                    <Shield className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Privacy & Security</span>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
              </Card>
              
              <Card className="divide-y">
                <h3 className="font-medium text-gray-700 p-4">App Settings</h3>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Show Earnings in ₹</span>
                  </div>
                  <Switch defaultChecked onCheckedChange={() => handleSettingClick('Currency')} />
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <Languages className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Language</span>
                  </div>
                  <div className="text-sm text-gray-500">English</div>
                </div>
                
                <div className="flex items-center justify-between p-4">
                  <div className="flex items-center">
                    <Smartphone className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Dark Mode</span>
                  </div>
                  <Switch onCheckedChange={() => handleSettingClick('Dark Mode')} />
                </div>
              </Card>
              
              <Card className="divide-y">
                <h3 className="font-medium text-gray-700 p-4">Help & Support</h3>
                
                <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick('Help Center')}>
                  <div className="flex items-center">
                    <HelpCircle className="h-5 w-5 text-gray-500 mr-3" />
                    <span>Help Center</span>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
                
                <div className="flex items-center justify-between p-4" onClick={() => handleSettingClick('About')}>
                  <div className="flex items-center">
                    <Info className="h-5 w-5 text-gray-500 mr-3" />
                    <span>About RideHub</span>
                  </div>
                  <div className="text-gray-400">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
        <MobileNavbar activePath={location.pathname} />
      </div>
    </div>
  );
};

export default Settings;
