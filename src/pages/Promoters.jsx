import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  Eye, 
  MessageSquare, 
  Plus, 
  ChevronUp, 
  ChevronDown, 
  MessageCircle,
  Settings,
  Bot,
  Layout,
  MessagesSquare,
  UserPlus,
  Users,
  CreditCard,
  HelpCircle,
  MoreVertical
} from 'lucide-react';
// import DashboardLayout from '../components/DashboardLayout';

export default function Promoters() {
  const [showTour, setShowTour] = useState(false);
  const [selectedPromoters, setSelectedPromoters] = useState([]);

  const promoters = [
    {
      id: 1,
      name: "Sarah Wilson",
      email: "sarah.w@example.com",
      phone: "+1 234-567-8901",
      totalLeads: 45,
      conversionRate: "28%",
      earnings: "$2,340",
      status: "Active",
      joinDate: "2024-01-15"
    },
    {
      id: 2,
      name: "Mike Brown",
      email: "mike.b@example.com", 
      phone: "+1 234-567-8902",
      totalLeads: 32,
      conversionRate: "25%",
      earnings: "$1,890",
      status: "Active",
      joinDate: "2024-01-16"
    },
    {
      id: 3,
      name: "John Doe",
      email: "john.d@example.com",
      phone: "+1 234-567-8903",
      totalLeads: 28,
      conversionRate: "22%",
      earnings: "$1,450",
      status: "Inactive",
      joinDate: "2024-01-17"
    },
    {
      id: 4,
      name: "Emma Davis",
      email: "emma.d@example.com",
      phone: "+1 234-567-8904",
      totalLeads: 52,
      conversionRate: "31%",
      earnings: "$2,780",
      status: "Active",
      joinDate: "2024-01-18"
    },
    {
      id: 5,
      name: "Alex Johnson",
      email: "alex.j@example.com",
      phone: "+1 234-567-8905",
      totalLeads: 18,
      conversionRate: "20%",
      earnings: "$980",
      status: "Pending",
      joinDate: "2024-01-19"
    }
  ];

  const statsCards = [
    {
      title: "Total Promoters",
      value: "234",
      change: "+12%",
      isPositive: true,
      icon: <Users size={16} className="text-gray-600" />
    },
    {
      title: "Active Promoters",
      value: "186",
      change: "+8%",
      isPositive: true,
      icon: <UserPlus size={16} className="text-gray-600" />
    },
    {
      title: "Average Earnings",
      value: "$1,890",
      change: "+15%",
      isPositive: true,
      icon: <CreditCard size={16} className="text-gray-600" />
    },
    {
      title: "Conversion Rate",
      value: "24%",
      change: "-2%",
      isPositive: false,
      icon: <ChevronUp size={16} className="text-gray-600" />
    }
  ];

  const toggleSelect = (id) => {
    setSelectedPromoters(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'inactive':
        return 'bg-red-100 text-red-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    // <DashboardLayout title="Promoters" setShowTour={setShowTour}>
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {statsCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">{card.title}</span>
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  {card.icon}
                </div>
              </div>
              <div className="text-2xl font-semibold">{card.value}</div>
              <div className={`text-xs mt-1 ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                {card.change} vs last month
              </div>
            </div>
          ))}
        </div>

        {/* Promoters Table */}
        <div className="bg-white rounded-lg border border-gray-200 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {/* Table Header Actions */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search promoters..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64"
                />
                <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              </div>
              <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm">
                <Filter size={16} />
                Filters
              </button>
            </div>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm flex items-center gap-2">
              <UserPlus size={16} />
              Add Promoter
            </button>
          </div>

          {/* Table */}
          <table className="w-full">
            <thead>
              <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                <th className="pl-4 py-3 w-10">
                  <input type="checkbox" className="rounded" />
                </th>
                <th className="py-3">Name</th>
                <th className="py-3">Email</th>
                <th className="py-3">Phone</th>
                <th className="py-3">Total Leads</th>
                <th className="py-3">Conversion Rate</th>
                <th className="py-3">Earnings</th>
                <th className="py-3">Status</th>
                <th className="py-3">Join Date</th>
                <th className="py-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {promoters.map((promoter) => (
                <tr key={promoter.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="pl-4 py-3">
                    <input 
                      type="checkbox" 
                      className="rounded"
                      checked={selectedPromoters.includes(promoter.id)}
                      onChange={() => toggleSelect(promoter.id)}
                    />
                  </td>
                  <td className="py-3">{promoter.name}</td>
                  <td className="py-3">{promoter.email}</td>
                  <td className="py-3">{promoter.phone}</td>
                  <td className="py-3">{promoter.totalLeads}</td>
                  <td className="py-3">{promoter.conversionRate}</td>
                  <td className="py-3">{promoter.earnings}</td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(promoter.status)}`}>
                      {promoter.status}
                    </span>
                  </td>
                  <td className="py-3">{promoter.joinDate}</td>
                  <td className="py-3 pr-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <MessageSquare size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <MoreVertical size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    // </DashboardLayout>
  );
}

function SidebarItem({ icon, label, isActive = false, id, onClick }) {
  return (
    <div
      id={id}
      onClick={onClick}
      className={`px-4 py-3 flex items-center gap-2 text-sm cursor-pointer relative ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
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
        <div className={`text-xs flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
          {change} 
          <span className="ml-1 flex items-center">
            {isPositive ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </span>
          <span className="text-gray-400 ml-1">vs last month</span>
        </div>
      </div>
      <div className="text-sm text-gray-500">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
    </div>
  );
}
