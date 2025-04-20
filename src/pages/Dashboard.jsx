import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
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
  RotateCcw,
  TrendingUp,
  DollarSign,
  Info,
  ChevronDown,
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import UserProfile from '../components/UserProfile';
import DashboardLayout from '../components/DashboardLayout';

const ProgressCircle = ({ percentage, color, title }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Start the counter animation
          let start = 0;
          const duration = 2000; // 2 seconds
          const end = percentage;
          const range = end - start;
          const increment = end > start ? 1 : -1;
          const stepTime = Math.abs(Math.floor(duration / range));

          const timer = setInterval(() => {
            start += increment;
            setCount(start);
            
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (circleRef.current) {
      observer.observe(circleRef.current);
    }

    return () => {
      if (circleRef.current) {
        observer.unobserve(circleRef.current);
      }
    };
  }, [percentage]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium">{title}</span>
        <Info size={16} className="text-gray-400" />
      </div>
      <div className="flex items-center justify-center" ref={circleRef}>
        <div className="relative w-24 h-24">
          <svg 
            viewBox="0 0 36 36" 
            className="progress-circle w-full h-full"
            style={{ '--target-percentage': percentage }}
          >
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#EEEEEE"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke={color}
              strokeWidth="2"
              className={`progress-circle-path ${isVisible ? 'animate-progress-circle' : ''}`}
              strokeDasharray={`${isVisible ? percentage : 0}, 100`}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className={`text-lg font-semibold ${isVisible ? 'progress-number' : ''}`}>
              {count}%
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const LineChartWithAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const chartRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (chartRef.current) {
      observer.observe(chartRef.current);
    }

    return () => {
      if (chartRef.current) {
        observer.unobserve(chartRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-base font-medium">Promoter Performance Over Time</h3>
        <div className="relative">
          <button className="px-3 py-1 border border-gray-300 rounded flex items-center text-sm">
            <span>Last 6 months</span>
            <ChevronDown size={14} className="ml-1" />
          </button>
        </div>
      </div>
      <div className="h-64 relative" ref={chartRef}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={[
            { month: 'Jan', value: 30 },
            { month: 'Feb', value: 40 },
            { month: 'Mar', value: 25 },
            { month: 'Apr', value: 35 },
            { month: 'May', value: 45 },
            { month: 'Jun', value: 50 }
          ]}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis 
              axisLine={false} 
              tickLine={false}
              domain={[0, 60]}
              ticks={[10, 20, 30, 40, 50]}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#4F46E5"
              strokeWidth={3}
              dot={{ fill: "#4F46E5", strokeWidth: 2 }}
              activeDot={{ r: 8 }}
              className={isVisible ? 'animate-line' : ''}
            />
          </LineChart>
        </ResponsiveContainer>
        
        {/* Tooltip */}
        <div className={`absolute top-1/3 left-2/3 bg-gray-700 px-3 py-1 rounded text-white text-sm ${
          isVisible ? 'animate-fade-in-up' : 'opacity-0'
        }`}>
          +30%
        </div>
      </div>
    </div>
  );
};

export default function Dashboard() {
  const [showTour, setShowTour] = useState(false);

  return (
    <>
      {/* Stats Cards */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-scale-in" style={{ animationDelay: "0s" }}>
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
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-scale-in" style={{ animationDelay: "0.1s" }}>
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
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-scale-in" style={{ animationDelay: "0.2s" }}>
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
        
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 animate-scale-in" style={{ animationDelay: "0.3s" }}>
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
      <div className="grid grid-cols-4 gap-4 mb-8 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <ProgressCircle
          percentage={42}
          color="#4F46E5"
          title="Repeat Referral Rate"
        />
        <ProgressCircle
          percentage={67}
          color="#FF9F7F"
          title="Referral Engagement Rate"
        />
        <ProgressCircle
          percentage={28}
          color="#93C5FD"
          title="Churn Rate of Leads"
        />
        <ProgressCircle
          percentage={19}
          color="#F9A8D4"
          title="Upsell Rate of Leads"
        />
      </div>
      
      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <LineChartWithAnimation />
        
        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-base font-medium">Conversion Success Rate</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={[
                    { name: 'Referrals sent', value: 57, fill: '#6366F1' },
                    { name: 'Converted', value: 42, fill: '#E0E7FF' }
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  className="animate-pie-chart"
                >
                  {/* Add animation for each segment */}
                  <Cell className="animate-pie-segment" />
                  <Cell className="animate-pie-segment" />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            
            {/* Legend */}
            <div className="flex justify-center gap-8 mt-4 animate-fade-in">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mr-2"></div>
                <span className="text-sm text-gray-600">Referrals sent 57%</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-indigo-100 mr-2"></div>
                <span className="text-sm text-gray-600">Converted 42%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Recent Activities */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 mb-6 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 animate-slide-up" style={{ animationDelay: "0.2s" }}>
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
