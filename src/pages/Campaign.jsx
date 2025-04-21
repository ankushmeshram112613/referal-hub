import { useState } from 'react';
import { Link } from 'react-router-dom';
import DashboardLayout from '../components/DashboardLayout';
import { 
  Settings, 
  Bot, 
  Layout, 
  MessagesSquare, 
  UserPlus, 
  Users, 
  CreditCard,
  HelpCircle,
  FileText,
  Bell,
  ChevronLeft,
  ChevronDown,
} from 'lucide-react';
import { LineChart, Line, BarChart as RechartsBarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export default function Campaign() {
  const [showTour, setShowTour] = useState(false);

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
    <>
      <div className="p-4 md:p-6 lg:p-8 max-w-[2000px] mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Link Clicks Chart */}
          <div className="bg-white p-4 rounded shadow animate-slide-up">
            <h2 className="text-lg font-medium mb-4">Total Link Clicks</h2>
            <div className="h-[250px] sm:h-[300px] lg:h-[400px]">
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
          <div className="bg-white p-4 rounded shadow animate-slide-up">
            <h2 className="text-lg font-medium mb-4">Conversion Success Rate</h2>
            <div className="h-[250px] sm:h-[300px] lg:h-[400px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart
                  data={[
                    { month: 'Jan', conversion: 35 },
                    { month: 'Feb', conversion: 38 },
                    { month: 'Mar', conversion: 42 },
                    { month: 'Apr', conversion: 40 },
                    { month: 'May', conversion: 45 },
                    { month: 'Jun', conversion: 42 },
                    { month: 'Jul', conversion: 48 },
                    { month: 'Aug', conversion: 50 },
                    { month: 'Sep', conversion: 47 },
                    { month: 'Oct', conversion: 45 },
                    { month: 'Nov', conversion: 42 },
                    { month: 'Dec', conversion: 44 }
                  ]}
                  margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                  <CartesianGrid strokeDasharray="3 3" vertical={false} />
                  <XAxis 
                    dataKey="month" 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                  />
                  <YAxis 
                    axisLine={false} 
                    tickLine={false}
                    tick={{ fill: '#6B7280', fontSize: 12 }}
                    domain={[0, 100]}
                    ticks={[0, 25, 50, 75, 100]}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #E5E7EB',
                      borderRadius: '6px',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="conversion"
                    stroke="#6366F1"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{ r: 6, fill: '#6366F1' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Top Performing Channel */}
        <div className="bg-white p-4 rounded shadow mb-6 animate-slide-up">
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
        <div className="bg-white p-4 rounded shadow animate-slide-up">
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
      </div>
    </>
  );
}

function SidebarItem({ icon, label, isActive = false, id }) {
  return (
    <div
      id={id}
      className={`px-4 py-3 flex items-center gap-2 text-sm cursor-pointer relative ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
        }`}
    >
      {icon}
      <span>{label}</span>
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
