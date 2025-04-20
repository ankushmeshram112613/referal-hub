import { useState } from 'react';
import { ChevronLeft, ChevronDown, Search, Bell, Settings, HelpCircle, BarChart, Users, FileText, MessageSquare, CreditCard } from 'lucide-react';
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function SummerReferralDashboard() {
  const barChartData = [
    { month: 'Jan', clicks: 3000 },
    { month: 'Feb', clicks: 2500 },
    { month: 'Mar', clicks: 600 },
    { month: 'Apr', clicks: 1000 },
    { month: 'May', clicks: 2800 },
    { month: 'Jun', clicks: 600 },
    { month: 'Jul', clicks: 1900 },
    { month: 'Aug', clicks: 1000 },
    { month: 'Sep', clicks: 2800 },
    { month: 'Oct', clicks: 3200 },
    { month: 'Nov', clicks: 1000 },
    { month: 'Dec', clicks: 2000 },
  ];

  const lineChartData = [
    { month: 'Jan', revenue: 400, conversion: 30 },
    { month: 'Feb', revenue: 500, conversion: 35 },
    { month: 'Mar', revenue: 450, conversion: 28 },
    { month: 'Apr', revenue: 470, conversion: 32 },
    { month: 'May', revenue: 540, conversion: 35 },
    { month: 'Jun', revenue: 580, conversion: 37 },
    { month: 'Jul', revenue: 600, conversion: 40 },
    { month: 'Aug', revenue: 700, conversion: 50 },
    { month: 'Sep', revenue: 750, conversion: 55 },
    { month: 'Oct', revenue: 790, conversion: 60 },
    { month: 'Nov', revenue: 770, conversion: 58 },
    { month: 'Dec', revenue: 750, conversion: 57 },
  ];

  const pieChartData = [
    { name: 'Referrals sent', value: 57, color: '#6366F1' },
    { name: 'Converted', value: 42, color: '#E0E7FF' },
  ];

  const channelData = [
    { name: 'Facebook', value: '78%', color: '#FFECD1' },
    { name: 'Twitter', value: '45%', color: '#F9D5E5' },
    { name: 'LinkedIn', value: '23%', color: '#D6EAF8' },
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-52 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-2 text-blue-600 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <div className="text-blue-600">
                <MessageSquare size={18} />
              </div>
            </div>
            <span className="font-medium">AI Agent</span>
          </div>
          
          <nav className="space-y-1">
            <NavItem icon={<FileText size={18} />} label="Dashboard" />
            <NavItem icon={<BarChart size={18} />} label="Campaign" active />
            <NavItem icon={<Users size={18} />} label="Promoters" />
            <NavItem icon={<Users size={18} />} label="Leads" />
            <NavItem icon={<CreditCard size={18} />} label="Payouts" />
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <NavItem icon={<Settings size={18} />} label="Settings" />
          <NavItem icon={<HelpCircle size={18} />} label="Help" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-800">Summer Referral Program</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
              <Bell size={20} className="text-gray-500" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-800 rounded-full"></div>
              <div>
                <p className="text-sm font-medium text-gray-800">Kadin Stanton</p>
                <p className="text-xs text-gray-500">kadinstanton@gmail.com</p>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
          {/* Back Button */}
          <button className="flex items-center text-gray-500 mb-6">
            <ChevronLeft size={18} />
            <span>Back</span>
          </button>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-8">
            <StatCard 
              icon={<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><Users size={16} className="text-gray-600" /></div>}
              title="Total Promoters"
              value="1,234"
              change="+12%"
              isPositive={true}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><div className="text-orange-500">%</div></div>}
              title="Conversion rate"
              value="23.5%"
              change="-2.4%"
              isPositive={false}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center"><div className="text-pink-500">$</div></div>}
              title="Revenue Generated"
              value="$12,345"
              change="+8.7%"
              isPositive={true}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center"><FileText size={16} className="text-blue-600" /></div>}
              title="New Leads"
              value="500"
              isPositive={true}
            />
          </div>

          {/* Charts Row 1 */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Link Clicks Chart */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-medium mb-4">Total Link Clicks</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsBarChart data={barChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="month" axisLine={false} tickLine={false} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Bar dataKey="clicks" fill="#A5D6A7" radius={[4, 4, 0, 0]} />
                  </RechartsBarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Conversion Rate Chart */}
            <div className="bg-white p-4 rounded shadow">
              <h2 className="text-lg font-medium mb-4">Conversion Success Rate</h2>
              <div className="h-64 flex items-center justify-center">
                <div className="w-2/3">
                  <ResponsiveContainer width="100%" height={200}>
                    <PieChart>
                      <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={10}
                        dataKey="value"
                      >
                        {pieChartData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="flex flex-col items-center mt-4">
                    <div className="flex items-center mb-2">
                      <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                      <span className="text-sm text-gray-600">Referrals sent 57%</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 rounded-full bg-blue-100 mr-2"></div>
                      <span className="text-sm text-gray-600">Converted 42%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Top Performing Channel */}
          <div className="bg-white p-4 rounded shadow mb-6">
            <h2 className="text-lg font-medium mb-4">Top Performing Channel</h2>
            <div className="flex gap-4">
              {channelData.map((channel, index) => (
                <div key={index} className={`flex-1 rounded p-4 text-center`} style={{ backgroundColor: channel.color }}>
                  <div className="text-sm text-gray-600 mb-2">{channel.name}</div>
                  <div className="text-xl font-bold">{channel.value}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Campaign Performance */}
          <div className="bg-white p-4 rounded shadow">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-medium">Campaign Performance</h2>
              <div className="flex items-center">
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Revenue</span>
                </div>
                <div className="flex items-center mr-4">
                  <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
                  <span className="text-sm text-gray-600">Conversion</span>
                </div>
                <button className="flex items-center gap-1 border border-gray-300 rounded px-3 py-1 text-sm">
                  <span>Last 1 year</span>
                  <ChevronDown size={14} />
                </button>
              </div>
            </div>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={lineChartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis dataKey="month" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="left" axisLine={false} tickLine={false} />
                  <YAxis yAxisId="right" orientation="right" axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#6366F1" strokeWidth={3} activeDot={{ r: 8 }} dot={false} />
                  <Line yAxisId="right" type="monotone" dataKey="conversion" stroke="#F59E0B" strokeWidth={3} dot={false} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
      <div className={`${active ? 'text-blue-600' : 'text-gray-400'}`}>{icon}</div>
      <span className={`text-sm ${active ? 'font-medium' : ''}`}>{label}</span>
    </div>
  );
}

function StatCard({ icon, title, value, change, isPositive }) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex justify-between mb-3">
        <div>{icon}</div>
        {change && (
          <div className={`text-xs flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
            {change}
            <span className="text-gray-400 ml-1">vs last month</span>
          </div>
        )}
      </div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}