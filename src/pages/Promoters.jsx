import { useState } from 'react';
import { Search, Filter, Eye, MessageSquare, Plus, ChevronUp, ChevronDown, MessageCircle } from 'lucide-react';

export default function PromoterDashboard() {
  const [selectedPromoters, setSelectedPromoters] = useState([1, 2]);

  const toggleSelect = (id) => {
    if (selectedPromoters.includes(id)) {
      setSelectedPromoters(selectedPromoters.filter(promoterId => promoterId !== id));
    } else {
      setSelectedPromoters([...selectedPromoters, id]);
    }
  };

  const promoters = [
    { id: 1, name: "Emery Dokidis", contact: "+979970174715", leads: 12, conversionRate: "50%", lastFollowUp: "28-4-2024", revenue: "$50", status: "Active" },
    { id: 2, name: "Kadin Lipshutz", contact: "+971501948279", leads: 8, conversionRate: "30%", lastFollowUp: "27-5-2024", revenue: "$900", status: "Active" },
    { id: 3, name: "Randy Culhane", contact: "+971501598978", leads: 15, conversionRate: "60%", lastFollowUp: "29-5-2024", revenue: "$1000", status: "Inactive" },
    { id: 4, name: "Jaxson Vaccaro", contact: "+971522503635", leads: 10, conversionRate: "45%", lastFollowUp: "30-6-2024", revenue: "$500", status: "Completed" },
    { id: 5, name: "Jocelyn Levin", contact: "+971554315300", leads: 6, conversionRate: "28%", lastFollowUp: "01-7-2024", revenue: "$1,500", status: "Inactive" },
    { id: 6, name: "Maren Septimus", contact: "+971525620832", leads: 18, conversionRate: "65%", lastFollowUp: "03-7-2024", revenue: "$2,000", status: "Completed" },
    { id: 7, name: "Haylie Saris", contact: "+971503328228", leads: 13, conversionRate: "58%", lastFollowUp: "05-7-2024", revenue: "$300", status: "Active" },
    { id: 8, name: "Randy Herwitz", contact: "+971554231522", leads: 12, conversionRate: "50%", lastFollowUp: "10-7-2024", revenue: "$600", status: "Inactive" }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Active":
        return "bg-blue-100 text-blue-600";
      case "Inactive":
        return "bg-orange-100 text-orange-500";
      case "Completed":
        return "bg-green-100 text-green-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-52 bg-white border-r border-gray-200">
        <div className="p-4">
          <div className="flex items-center gap-2 text-blue-600 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              <MessageCircle size={18} className="text-blue-600" />
            </div>
            <span className="font-medium">AI Agent</span>
          </div>
          
          <nav className="space-y-1">
            <NavItem icon={<div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center"><div className="w-3 h-2 border-t-2 border-gray-400"></div></div>} label="Dashboard" />
            <NavItem icon={<MessageSquare size={18} />} label="Campaign" />
            <NavItem icon={<div className="w-5 h-5 flex"><div className="w-2 h-5 border-r border-gray-400"></div><div className="w-3 h-5 flex items-center justify-center"><div className="w-2 h-2 rounded-full border border-gray-400"></div></div></div>} label="Promoters" active />
            <NavItem icon={<div className="w-5 h-5"><div className="w-3 h-3 border-t border-l border-gray-400 rounded-tl-sm mt-1"></div></div>} label="Leads" />
            <NavItem icon={<div className="w-5 h-5 border border-gray-400 rounded flex items-center justify-center"><div className="w-3 h-2 border-t-2 border-gray-400"></div></div>} label="Payouts" />
          </nav>
        </div>
        
        <div className="mt-auto p-4">
          <NavItem icon={<div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center"><div className="w-3 h-3 flex items-center justify-center"><div className="w-1 h-1 bg-gray-400 rounded-full"></div></div></div>} label="Settings" />
          <NavItem icon={<div className="w-5 h-5 border border-gray-400 rounded-full flex items-center justify-center"><div className="w-1 h-1 bg-gray-400 rounded-full"></div></div>} label="Help" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-medium text-gray-800">Manage and monitor your promoter referral activities</h1>
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
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
          {/* Action Buttons */}
          <div className="flex gap-4 mb-6">
            <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              <Plus size={18} />
              <span>New Promoter</span>
            </button>
            <button className="flex items-center gap-2 bg-white border border-blue-500 text-blue-500 px-4 py-2 rounded">
              <span>Ask Past Customers For Referrals</span>
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <StatCard 
              icon={<div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center"><div className="w-4 h-4 border-2 border-gray-400 rounded-full"></div></div>}
              title="Total Customers"
              value="8"
              change="+12%"
              isPositive={true}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center"><div className="w-4 h-4 border-2 border-orange-300 rounded-full"></div></div>}
              title="New Customers"
              value="94"
              change="+8%"
              isPositive={true}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">%</div>}
              title="Average Conversion rate"
              value="64%"
              change="-3%"
              isPositive={false}
            />
            <StatCard 
              icon={<div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">$</div>}
              title="Total Revenue Generated"
              value="$23,900"
              change="+15%"
              isPositive={true}
            />
          </div>

          {/* Promoters Table */}
          <div className="bg-white rounded shadow">
            <div className="flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="text-lg font-medium">Promoters</h2>
              <div className="flex gap-2">
                <div className="relative">
                  <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 border border-gray-200 rounded bg-gray-50 text-sm"
                  />
                </div>
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2 rounded">
                  <Filter size={16} />
                  <span>Filter</span>
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-gray-500 text-sm border-b border-gray-200">
                    <th className="pl-4 py-3 w-10">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="py-3">Promoter Name</th>
                    <th className="py-3">Contact No.</th>
                    <th className="py-3">Leads</th>
                    <th className="py-3">Conversion Rate</th>
                    <th className="py-3">Last Follow-Up</th>
                    <th className="py-3">Revenue Generated</th>
                    <th className="py-3">Referrer Status</th>
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
                      <td className="py-3">{promoter.contact}</td>
                      <td className="py-3">{promoter.leads}</td>
                      <td className="py-3">{promoter.conversionRate}</td>
                      <td className="py-3">{promoter.lastFollowUp}</td>
                      <td className="py-3">{promoter.revenue}</td>
                      <td className="py-3">
                        <span className={`px-3 py-1 rounded-full text-xs ${getStatusColor(promoter.status)}`}>
                          {promoter.status}
                        </span>
                      </td>
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
        </main>
      </div>
      
      {/* Chat Button */}
      <div className="fixed bottom-4 right-4">
        <button className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
          <MessageCircle size={24} className="text-white" />
        </button>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded ${active ? 'bg-blue-50 text-blue-600' : 'text-gray-600 hover:bg-gray-100'}`}>
      <div className="text-gray-400">{icon}</div>
      <span className={`text-sm ${active ? 'font-medium' : ''}`}>{label}</span>
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