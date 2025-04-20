import React from 'react';
import { MessageCircle, Layout, Volume2, Users, TrendingUp, DollarSign, Settings, HelpCircle, RotateCcw, Info } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-48 bg-white shadow-md flex flex-col">
        <div className="flex-1">
          <div className="py-4">
            <a href="#" className="flex items-center px-4 py-2 text-blue-600 hover:bg-blue-50">
              <MessageCircle size={20} className="mr-2" />
              <span>AI Agent</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-blue-600 bg-blue-50 rounded-r">
              <Layout size={20} className="mr-2" />
              <span>Dashboard</span>
            </a>
            
            <a href="#" className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <Volume2 size={20} className="mr-2" />
              <span>Campaign</span>
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
      <div className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm border-b border-gray-200 p-4 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-lg font-medium">Dashboard</h1>
          </div>
          
          <div className="flex items-center">
            <button className="p-2 text-gray-500 hover:text-gray-700">
              <RotateCcw size={18} />
            </button>
            <div className="ml-4 flex items-center">
              <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <div className="ml-2">
                <div className="text-sm font-medium">Kadin Stanton</div>
                <div className="text-xs text-gray-500">kadinstanton@gmail.com</div>
              </div>
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Total Promoters</span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Users size={16} className="text-gray-600" />
                </div>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-xl font-bold">1,234</h3>
                <span className="ml-2 text-xs text-green-500">+7.2% vs last month</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Conversion rate</span>
                <div className="w-8 h-8 bg-red-50 rounded-full flex items-center justify-center">
                  <TrendingUp size={16} className="text-red-500" />
                </div>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-xl font-bold">23.5%</h3>
                <span className="ml-2 text-xs text-red-500">-2.3% vs last month</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Revenue Generated</span>
                <div className="w-8 h-8 bg-pink-50 rounded-full flex items-center justify-center">
                  <DollarSign size={16} className="text-pink-500" />
                </div>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-xl font-bold">$12,345</h3>
                <span className="ml-2 text-xs text-green-500">+15.7% vs last month</span>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">Active Campaigns</span>
                <div className="w-8 h-8 bg-blue-50 rounded-full flex items-center justify-center">
                  <Layout size={16} className="text-blue-500" />
                </div>
              </div>
              <div className="flex items-baseline">
                <h3 className="text-xl font-bold">3</h3>
              </div>
            </div>
          </div>
          
          {/* Circular Progress Charts */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Repeat Referral Rate</span>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EEEEEE"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#4ade80"
                      strokeWidth="2"
                      strokeDasharray="42, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-green-500">42%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Referral Engagement Rate</span>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EEEEEE"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#FF9F7F"
                      strokeWidth="2"
                      strokeDasharray="67, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-orange-400">67%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Churn Rate of Leads</span>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EEEEEE"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#93C5FD"
                      strokeWidth="2"
                      strokeDasharray="28, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-blue-400">28%</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Upsell Rate of Leads</span>
                <Info size={16} className="text-gray-400" />
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-24 h-24">
                  <svg viewBox="0 0 36 36" className="w-full h-full">
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#EEEEEE"
                      strokeWidth="2"
                    />
                    <path
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="#F9A8D4"
                      strokeWidth="2"
                      strokeDasharray="19, 100"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-pink-400">19%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Charts Section */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Line Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium">Promoter Performance Over Time</h3>
                <div className="relative">
                  <button className="px-3 py-1 border border-gray-300 rounded flex items-center text-sm">
                    <span>Last 6 months</span>
                    <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="h-56 relative">
                {/* Chart placeholder */}
                <svg viewBox="0 0 600 200" className="w-full h-full">
                  {/* Grid lines */}
                  <line x1="0" y1="40" x2="600" y2="40" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="0" y1="80" x2="600" y2="80" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="0" y1="120" x2="600" y2="120" stroke="#f0f0f0" strokeWidth="1" />
                  <line x1="0" y1="160" x2="600" y2="160" stroke="#f0f0f0" strokeWidth="1" />
                  
                  {/* Y-axis labels */}
                  <text x="10" y="40" fontSize="12" fill="#888">50%</text>
                  <text x="10" y="80" fontSize="12" fill="#888">40%</text>
                  <text x="10" y="120" fontSize="12" fill="#888">30%</text>
                  <text x="10" y="160" fontSize="12" fill="#888">20%</text>
                  <text x="10" y="200" fontSize="12" fill="#888">10%</text>
                  
                  {/* X-axis labels */}
                  <text x="60" y="220" fontSize="12" fill="#888">Jan</text>
                  <text x="160" y="220" fontSize="12" fill="#888">Feb</text>
                  <text x="260" y="220" fontSize="12" fill="#888">Mar</text>
                  <text x="360" y="220" fontSize="12" fill="#888">Apr</text>
                  <text x="460" y="220" fontSize="12" fill="#888">May</text>
                  <text x="560" y="220" fontSize="12" fill="#888">Jun</text>
                  
                  {/* Line chart */}
                  <path d="M60,140 C100,140 130,100 160,130 C190,160 230,90 260,110 C290,130 330,90 360,80 C390,70 430,90 460,70 C490,50 530,70 560,60" 
                    fill="none" stroke="#3B82F6" strokeWidth="2" />
                  
                  {/* Tooltip */}
                  <g transform="translate(160, 110)">
                    <rect x="-20" y="-25" width="40" height="20" rx="4" fill="#666" />
                    <text x="0" y="-12" fontSize="10" fill="white" textAnchor="middle">+30%</text>
                  </g>
                </svg>
              </div>
            </div>
            
            {/* Pie Chart */}
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-medium">Conversion Success Rate</h3>
              </div>
              
              <div className="flex">
                <div className="w-1/2">
                  <div className="relative w-40 h-40 mx-auto">
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="#EBF4FF"
                        stroke="none"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 15.9155 15.9155 h-15.9155 v-15.9155"
                        fill="#3B82F6"
                        stroke="none"
                      />
                    </svg>
                  </div>
                </div>
                <div className="w-1/2 flex flex-col justify-center">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm">Referrals sent 57%</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-100 mr-2"></div>
                    <span className="text-sm">Converted 42%</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h4 className="text-base font-medium mb-4">Top Performing Channel</h4>
                <div className="grid grid-cols-3 gap-2">
                  <div className="bg-red-50 p-3 rounded-lg text-center">
                    <div className="text-sm mb-1">Facebook</div>
                    <div className="font-bold text-lg">78%</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-sm mb-1">Twitter</div>
                    <div className="font-bold text-lg">45%</div>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg text-center">
                    <div className="text-sm mb-1">LinkedIn</div>
                    <div className="font-bold text-lg">23%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-base font-medium">Recent Activities</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 bg-gray-50">
                    <th className="py-3 px-4">Activities</th>
                    <th className="py-3 px-4">Date</th>
                    <th className="py-3 px-4">Time</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">Julian earned $10</td>
                    <td className="py-3 px-4">28-4-2024</td>
                    <td className="py-3 px-4">10:30 AM</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">John Doe signed up from your referral link</td>
                    <td className="py-3 px-4">29-4-2024</td>
                    <td className="py-3 px-4">9:45 AM</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">You reached 50 referrals milestone!</td>
                    <td className="py-3 px-4">30-4-2024</td>
                    <td className="py-3 px-4">8:20 AM</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">You updated your referral campaign</td>
                    <td className="py-3 px-4">31-4-2024</td>
                    <td className="py-3 px-4">7:00 AM</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Leaderboard Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            <div className="p-4 border-b border-gray-100">
              <h3 className="text-base font-medium">Leaderboard Table View</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-sm text-gray-500 bg-gray-50">
                    <th className="py-3 px-4">Rank</th>
                    <th className="py-3 px-4">Promoter Name</th>
                    <th className="py-3 px-4">Conversion Rate</th>
                    <th className="py-3 px-4">Referrals Sent</th>
                    <th className="py-3 px-4">Successful Conversions</th>
                    <th className="py-3 px-4">Revenue Generated</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">1</td>
                    <td className="py-3 px-4">Emery Dokidis</td>
                    <td className="py-3 px-4">150</td>
                    <td className="py-3 px-4">80</td>
                    <td className="py-3 px-4">60%</td>
                    <td className="py-3 px-4">$1,200</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">2</td>
                    <td className="py-3 px-4">Kadin Lipshurz</td>
                    <td className="py-3 px-4">132</td>
                    <td className="py-3 px-4">90</td>
                    <td className="py-3 px-4">65%</td>
                    <td className="py-3 px-4">$980</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">3</td>
                    <td className="py-3 px-4">Randy Culhane</td>
                    <td className="py-3 px-4">110</td>
                    <td className="py-3 px-4">60</td>
                    <td className="py-3 px-4">60%</td>
                    <td className="py-3 px-4">$880</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">4</td>
                    <td className="py-3 px-4">Jaxson Vaccaro</td>
                    <td className="py-3 px-4">100</td>
                    <td className="py-3 px-4">85</td>
                    <td className="py-3 px-4">75%</td>
                    <td className="py-3 px-4">$500</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">5</td>
                    <td className="py-3 px-4">Jocelyn Levin</td>
                    <td className="py-3 px-4">50</td>
                    <td className="py-3 px-4">30</td>
                    <td className="py-3 px-4">63%</td>
                    <td className="py-3 px-4">$600</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">6</td>
                    <td className="py-3 px-4">Maren Septimus</td>
                    <td className="py-3 px-4">80</td>
                    <td className="py-3 px-4">35</td>
                    <td className="py-3 px-4">25%</td>
                    <td className="py-3 px-4">$200</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">7</td>
                    <td className="py-3 px-4">Haylie Saris</td>
                    <td className="py-3 px-4">120</td>
                    <td className="py-3 px-4">55</td>
                    <td className="py-3 px-4">45%</td>
                    <td className="py-3 px-4">$150</td>
                  </tr>
                  <tr className="border-t border-gray-100">
                    <td className="py-3 px-4">8</td>
                    <td className="py-3 px-4">Randy Herwitz</td>
                    <td className="py-3 px-4">110</td>
                    <td className="py-3 px-4">90</td>
                    <td className="py-3 px-4">65%</td>
                    <td className="py-3 px-4">$380</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}