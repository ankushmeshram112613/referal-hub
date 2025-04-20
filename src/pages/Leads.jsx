import { useState } from 'react';
// import DashboardLayout from '../components/DashboardLayout';
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
  Filter,
  Eye,
  MessageSquare,
  Search,
  ChevronDown,
  MessageCircle
} from 'lucide-react';

export default function Leads() {
  const [showTour, setShowTour] = useState(false);
  const [selectedLeads, setSelectedLeads] = useState([]);

  const leads = [
    {
      id: 1,
      name: "John Smith",
      email: "john.smith@example.com",
      phone: "+1 234-567-8900",
      source: "Facebook",
      status: "New",
      date: "2024-01-15",
      promoter: "Sarah Wilson"
    },
    {
      id: 2,
      name: "Emma Johnson",
      email: "emma.j@example.com",
      phone: "+1 234-567-8901",
      source: "Twitter",
      status: "Contacted",
      date: "2024-01-16",
      promoter: "Mike Brown"
    },
    {
      id: 3,
      name: "Michael Davis",
      email: "m.davis@example.com",
      phone: "+1 234-567-8902",
      source: "LinkedIn",
      status: "Qualified",
      date: "2024-01-17",
      promoter: "Sarah Wilson"
    },
    {
      id: 4,
      name: "Lisa Anderson",
      email: "l.anderson@example.com",
      phone: "+1 234-567-8903",
      source: "Facebook",
      status: "Converted",
      date: "2024-01-18",
      promoter: "John Doe"
    },
    {
      id: 5,
      name: "David Wilson",
      email: "d.wilson@example.com",
      phone: "+1 234-567-8904",
      source: "Twitter",
      status: "Lost",
      date: "2024-01-19",
      promoter: "Mike Brown"
    }
  ];

  const statsCards = [
    {
      title: "Total Leads",
      value: "1,234",
      change: "+12%",
      isPositive: true
    },
    {
      title: "Conversion Rate",
      value: "25%",
      change: "+5%",
      isPositive: true
    },
    {
      title: "Average Response Time",
      value: "2h 15m",
      change: "-10%",
      isPositive: true
    }
  ];

  const toggleSelect = (id) => {
    setSelectedLeads(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'new':
        return 'bg-blue-100 text-blue-800';
      case 'contacted':
        return 'bg-yellow-100 text-yellow-800';
      case 'qualified':
        return 'bg-purple-100 text-purple-800';
      case 'converted':
        return 'bg-green-100 text-green-800';
      case 'lost':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    // <DashboardLayout title="Leads" setShowTour={setShowTour}>
      <div className="p-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {statsCards.map((card, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-gray-200 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">{card.title}</span>
                <span className={`text-xs ${card.isPositive ? 'text-green-600' : 'text-red-600'}`}>
                  {card.change}
                </span>
              </div>
              <div className="text-2xl font-semibold mt-2">{card.value}</div>
            </div>
          ))}
        </div>

        {/* Leads Table */}
        <div className="bg-white rounded-lg border border-gray-200 animate-slide-up" style={{ animationDelay: "0.2s" }}>
          {/* Table Header Actions */}
          <div className="p-4 border-b border-gray-200 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search leads..."
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
              Add Lead
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
                <th className="py-3">Source</th>
                <th className="py-3">Status</th>
                <th className="py-3">Date</th>
                <th className="py-3">Promoter</th>
                <th className="py-3 pr-4">Actions</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="pl-4 py-3">
                    <input 
                      type="checkbox" 
                      className="rounded"
                      checked={selectedLeads.includes(lead.id)}
                      onChange={() => toggleSelect(lead.id)}
                    />
                  </td>
                  <td className="py-3">{lead.name}</td>
                  <td className="py-3">{lead.email}</td>
                  <td className="py-3">{lead.phone}</td>
                  <td className="py-3">{lead.source}</td>
                  <td className="py-3">
                    <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(lead.status)}`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-3">{lead.date}</td>
                  <td className="py-3">{lead.promoter}</td>
                  <td className="py-3 pr-4">
                    <div className="flex gap-2">
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <Eye size={16} />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-gray-700">
                        <MessageSquare size={16} />
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
