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
  Search,
  Eye,
  Download,
  MessageSquare
} from 'lucide-react';
import { useState } from 'react';
import DashboardLayout from '../components/DashboardLayout';

// Define statsCards array at the top level
const statsCards = [
  {
    title: "Total Payouts",
    value: "$12,345",
    change: "+12%",
    isPositive: true
  },
  {
    title: "Pending Payouts",
    value: "$3,456",
    change: "+8%",
    isPositive: true
  },
  {
    title: "Processed Payouts",
    value: "$8,889",
    change: "-3%",
    isPositive: false
  }
];

export default function Payouts() {
  const [showTour, setShowTour] = useState(false);
  const [selectedPayouts, setSelectedPayouts] = useState([]);

  const payouts = [
    { 
      id: 1, 
      promoter: "Emery Dokidis", 
      amount: "$500", 
      leads: 12, 
      paymentMethod: "Bank Transfer",
      status: "Pending",
      date: "28-4-2024" 
    },
    { 
      id: 2, 
      promoter: "Kadin Lipshutz", 
      amount: "$900", 
      leads: 8, 
      paymentMethod: "PayPal",
      status: "Processed",
      date: "27-5-2024" 
    },
    { 
      id: 3, 
      promoter: "Randy Culhane", 
      amount: "$1000", 
      leads: 15, 
      paymentMethod: "Bank Transfer",
      status: "Pending",
      date: "29-5-2024" 
    },
    { 
      id: 4, 
      promoter: "Jaxson Vaccaro", 
      amount: "$500", 
      leads: 10, 
      paymentMethod: "PayPal",
      status: "Processed",
      date: "30-6-2024" 
    },
    { 
      id: 5, 
      promoter: "Jocelyn Levin", 
      amount: "$1,500", 
      leads: 6, 
      paymentMethod: "Bank Transfer",
      status: "Disputed",
      date: "01-7-2024" 
    }
  ];

  const toggleSelect = (id) => {
    setSelectedPayouts(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'processed':
        return 'bg-green-100 text-green-800';
      case 'disputed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Payouts</h1>
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
            Process Payouts
          </button>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {statsCards.map((card, index) => (
          <div 
            key={index}
            className="animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <StatsCard {...card} />
          </div>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg border border-gray-200 animate-slide-up" style={{ animationDelay: "0.2s" }}>
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
              <th className="pl-4 py-3 w-10">
                <input type="checkbox" className="rounded" />
              </th>
              <th className="py-3">Promoter</th>
              <th className="py-3">Amount</th>
              <th className="py-3">Leads</th>
              <th className="py-3">Payment Method</th>
              <th className="py-3">Status</th>
              <th className="py-3">Date</th>
              <th className="py-3 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {payouts.map((payout) => (
              <tr key={payout.id} className="border-b border-gray-200 hover:bg-gray-50">
                <td className="pl-4 py-3">
                  <input 
                    type="checkbox" 
                    className="rounded"
                    checked={selectedPayouts.includes(payout.id)}
                    onChange={() => toggleSelect(payout.id)}
                  />
                </td>
                <td className="py-3">{payout.promoter}</td>
                <td className="py-3">{payout.amount}</td>
                <td className="py-3">{payout.leads}</td>
                <td className="py-3">{payout.paymentMethod}</td>
                <td className="py-3">
                  <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(payout.status)}`}>
                    {payout.status}
                  </span>
                </td>
                <td className="py-3">{payout.date}</td>
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
  );
}

function StatsCard({ title, value, change, isPositive }) {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-sm font-medium text-gray-500 mb-2">{title}</h3>
      <div className="flex items-baseline">
        <span className="text-2xl font-semibold text-gray-900">{value}</span>
        <span className={`ml-2 text-sm ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </span>
      </div>
    </div>
  );
}
