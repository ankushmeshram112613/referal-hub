import React, { useState } from 'react';
import { MessageCircle, RotateCcw, ArrowRight, Settings, HelpCircle, Layout, Users, TrendingUp, DollarSign, Link, Send, Plus, Share2, Eye } from 'lucide-react';

export default function ReferralCampaignUI() {
  const [inputValue, setInputValue] = useState('');
  
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-48 bg-white shadow-md flex flex-col">
        <div className="p-4 border-b border-gray-200">
          <h2 className="text-lg font-medium">AI Agent</h2>
        </div>
        
        <div className="flex-1">
          <div className="py-2">
            <a href="#" className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-r">
              <MessageCircle size={20} className="mr-2" />
              <span>AI Agent</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Layout size={20} className="mr-2" />
              <span>Dashboard</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Users size={20} className="mr-2" />
              <span>Promoters</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <TrendingUp size={20} className="mr-2" />
              <span>Leads</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <DollarSign size={20} className="mr-2" />
              <span>Payouts</span>
            </a>
          </div>
        </div>
        
        <div className="mt-auto border-t border-gray-200 p-2">
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            <Settings size={18} className="mr-2" />
            <span>Settings</span>
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded">
            <HelpCircle size={18} className="mr-2" />
            <span>Help</span>
          </a>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-2">
              <MessageCircle size={16} />
            </div>
            <h1 className="text-lg font-medium">AI Agent</h1>
          </div>
          
          <div className="flex items-center">
            <button className="px-4 py-1.5 border border-gray-300 rounded-md flex items-center text-sm">
              <RotateCcw size={16} className="mr-1" />
              Reset
            </button>
            <div className="ml-4 flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">Kadin Stanton</div>
                <div className="text-xs text-gray-500">kadinstanton@mail.com</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Conversation */}
        <div className="flex-1 overflow-y-auto bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>Welcome Back, Kadin! How can I help you today?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>Hey, I want to create a new referral campaign, but I'd like some help from AI to make sure it's set up correctly and performs well. Can you guide me through it?</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>Absolutely! I'll help you create a high-converting referral campaign step by step. Let's start by defining your main objective. What's the primary goal of this campaign?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>My main goal is to increase sales through referrals. I want existing customers to bring in new paying customers, and I'd like to reward them for it.</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>That's a great goal! Referral campaigns work best when there's a strong incentive. What kind of reward would you like to offer referrers?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>Discount on next purchase</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>Smart choice! Discounts are a great way to encourage both referrals and repeat purchases. How much discount would you like to offer per successful referral?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>15%</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>15% sounds like a strong incentive! Now, let's define when a referral is considered valid. When should the referrer receive their reward?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>When the referred person signs up</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>That's a great way to ensure that your campaign drives real revenue! Now, how long do you want this referral campaign to run?</p>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>I want to test this campaign for a while before making any long-term decisions, so I think 3 months would be ideal. If it works well, I can always extend it later.</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
            
            <div className="flex items-start mb-6">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white mr-3">
                <MessageCircle size={16} />
              </div>
              <div className="bg-blue-50 rounded-lg p-3 max-w-3xl">
                <p>Got it! Here's a quick summary of your campaign:</p>
                <div className="bg-white p-4 rounded-md mt-2 border border-gray-200">
                  <ul className="space-y-2">
                    <li className="flex">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Goal:</strong> Increase sales</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Reward:</strong> 15% discount on the next purchase</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Condition:</strong> Reward is given when the referred person makes a purchase</span>
                    </li>
                    <li className="flex">
                      <span className="text-blue-600 mr-2">•</span>
                      <span><strong>Duration:</strong> 3 months</span>
                    </li>
                  </ul>
                </div>
                <div className="flex mt-3 space-x-2">
                  <button className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-gray-700">Edit</button>
                  <button className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md">Launch</button>
                </div>
              </div>
            </div>
            
            <div className="flex items-start mb-6 justify-end">
              <div className="bg-white rounded-lg p-3 max-w-3xl shadow-sm">
                <p>Launch</p>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden ml-3">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Links */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium mb-3">Quick Links</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
                <Link size={16} className="mr-2" />
                SEND REFERRAL
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
                <Plus size={16} className="mr-2" />
                CREATE CAMPAIGN
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
                <Share2 size={16} className="mr-2" />
                FOLLOW-UP
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center">
                <Eye size={16} className="mr-2" />
                VIEW REFERRAL
              </button>
            </div>
          </div>
        </div>
        
        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-full pr-12"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={handleInputChange}
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center text-blue-600">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}