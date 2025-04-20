import { useState } from 'react';
import { Settings, User, Volume2, Users, FileText, CreditCard, HelpCircle, Edit2, LogOut, Trash2 } from 'lucide-react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('User Profile');
  const tabs = ['User Profile', 'Business Profile', 'AI Settings', 'Email & Phone Setup', 'Subscription & Usage'];
  
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200">
        <div className="p-4 flex items-center space-x-2 text-blue-600">
          <Settings className="w-5 h-5" />
          <span className="font-semibold">AI Agent</span>
        </div>
        
        <nav className="mt-6">
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <FileText className="w-5 h-5" />
            <span>Dashboard</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <Volume2 className="w-5 h-5" />
            <span>Campaign</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <Users className="w-5 h-5" />
            <span>Promoters</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <User className="w-5 h-5" />
            <span>Leads</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <CreditCard className="w-5 h-5" />
            <span>Payouts</span>
          </div>
        </nav>
        
        <div className="mt-auto absolute bottom-0 w-56 border-t border-gray-200">
          <div className="px-4 py-3 flex items-center space-x-3 bg-blue-50 text-blue-600">
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </div>
          
          <div className="px-4 py-3 flex items-center space-x-3 text-blue-600">
            <HelpCircle className="w-5 h-5" />
            <span>Help</span>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Settings</h1>
          <div className="flex items-center space-x-2">
            <div className="relative">
              <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-xs text-red-500">1</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div>
                <div className="text-sm font-medium">Kadin Stanton</div>
                <div className="text-xs text-gray-500">kadinstanton@gmail.com</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Tabs */}
        <div className="px-8 pt-6">
          <div className="flex border-b border-gray-200">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium ${
                  activeTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 rounded-t-md' 
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Profile Content */}
          <div className="mt-6">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-medium">Profile</h2>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gray-300 rounded-full overflow-hidden">
                  <img src="/api/placeholder/40/40" alt="Profile" className="w-full h-full object-cover" />
                </div>
                <button className="text-blue-600">
                  <Edit2 className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-200">
              <div className="py-4 flex justify-between items-center border-b border-gray-200">
                <div className="text-gray-700">User Name</div>
                <div className="flex items-center space-x-2">
                  <span>Kadin Stanton</span>
                  <button className="text-blue-600">
                    <Edit2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="py-4 flex justify-between items-center border-b border-gray-200">
                <div className="text-gray-700">User Phone</div>
                <div>1234567890</div>
              </div>
              
              <div className="py-4 flex justify-between items-center border-b border-gray-200">
                <div className="text-gray-700">Email</div>
                <div>kadinstanton@gmail.com</div>
              </div>
              
              <div className="py-4 flex justify-between items-center border-b border-gray-200">
                <div className="text-gray-700">Password</div>
                <div className="flex items-center space-x-3">
                  <span>*******</span>
                  <button className="px-4 py-1 border border-blue-600 rounded text-blue-600 text-sm">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center space-x-4">
              <button className="px-6 py-2 border border-red-500 rounded text-red-500 flex items-center space-x-1">
                <Trash2 className="w-4 h-4" />
                <span>Delete Account</span>
              </button>
              <button className="px-6 py-2 bg-red-500 rounded text-white flex items-center space-x-1">
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}