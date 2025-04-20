import { useState } from 'react';
import { 
  Settings, 
  User, 
  Volume2, 
  Users, 
  FileText, 
  CreditCard, 
  HelpCircle, 
  Filter, 
  Eye,
  MessageSquare,
  Search,
  ChevronDown
} from 'lucide-react';

export default function LeadsDashboard() {
  const [selectedLeads, setSelectedLeads] = useState(['Emery Dokidis', 'Kadin Lipshutz']);
  
  const leads = [
    { id: 1, name: 'Emery Dokidis', email: 'emerydoki@gmail.com', phone: '+979970174715', coupon: 'SAVE10NOW', status: 'Pending' },
    { id: 2, name: 'Kadin Lipshutz', email: 'kadinlipshutz@gmail.com', phone: '+971501948279', coupon: 'WELCOME15', status: 'Pending' },
    { id: 3, name: 'Randy Culhane', email: 'randyculhane@gmail.com', phone: '+971501598978', coupon: 'EXCLUSIVE20', status: 'Pending' },
    { id: 4, name: 'Jaxson Vaccaro', email: 'jaxonvaccaro@gmail.com', phone: '+971522503635', coupon: 'GETDEAL25', status: 'Completed' },
    { id: 5, name: 'Jocelyn Levin', email: 'jocelynlevin@gmail.com', phone: '+971554315300', coupon: 'FIRSTORDER10', status: 'Pending' },
    { id: 6, name: 'Maren Septimus', email: 'marenseptimus@gmail.com', phone: '+971525620832', coupon: 'SPECIALSAVE15', status: 'Completed' },
    { id: 7, name: 'Haylie Saris', email: 'hayluesaris@gmail.com', phone: '+971503328228', coupon: 'LIMITED20', status: 'Completed' },
    { id: 8, name: 'Randy Herwitz', email: 'randyherwitz@gmail.com', phone: '+971554231522', coupon: 'TRYUS10', status: 'Pending' }
  ];

  const toggleSelectLead = (name) => {
    if (selectedLeads.includes(name)) {
      setSelectedLeads(selectedLeads.filter(lead => lead !== name));
    } else {
      setSelectedLeads([...selectedLeads, name]);
    }
  };

  const isSelected = (name) => {
    return selectedLeads.includes(name);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-56 bg-white border-r border-gray-200">
        <div className="p-4 flex items-center space-x-2 text-blue-600">
          <User className="w-5 h-5" />
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
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600 bg-blue-50">
            <User className="w-5 h-5" />
            <span>Leads</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <CreditCard className="w-5 h-5" />
            <span>Payouts</span>
          </div>
        </nav>
        
        <div className="mt-auto absolute bottom-0 w-56 border-t border-gray-200">
          <div className="px-4 py-3 flex items-center space-x-3 text-blue-600">
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
          <h1 className="text-xl font-semibold">Manage and monitor your leads</h1>
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
        
        {/* Main content */}
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-medium">Leads</h2>
            <div className="flex space-x-3">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-64 focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button className="px-4 py-2 border border-gray-300 bg-white rounded-md flex items-center justify-between w-40">
                <span>Change Status</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              <button className="px-4 py-2 border border-gray-300 bg-white rounded-md flex items-center space-x-2">
                <Filter className="w-4 h-4" />
                <span>Filter</span>
              </button>
            </div>
          </div>
          
          {/* Table */}
          <div className="bg-white rounded-md border border-gray-200 overflow-hidden">
            <table className="min-w-full">
              <thead className="bg-white">
                <tr>
                  <th className="w-10 px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-blue-600 rounded"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Lead Name
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Email ID
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Contact No.
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Coupon Code
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-medium text-gray-600">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leads.map((lead) => (
                  <tr key={lead.id}>
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        className="w-4 h-4 text-blue-600 rounded"
                        checked={isSelected(lead.name)}
                        onChange={() => toggleSelectLead(lead.name)}
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-800">
                      {lead.name}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {lead.email}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {lead.phone}
                    </td>
                    <td className="px-4 py-3 text-sm text-gray-600">
                      {lead.coupon}
                    </td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        lead.status === 'Completed' 
                          ? 'bg-green-100 text-green-600' 
                          : 'bg-orange-100 text-orange-500'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 flex space-x-1">
                      <button className="p-1 text-gray-500 hover:text-blue-600">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-1 text-gray-500 hover:text-blue-600">
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      {lead.name === 'Kadin Lipshutz' && (
                        <div className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">
                          Send follow-up message
                        </div>
                      )}
                      {lead.name === 'Emery Dokidis' && (
                        <div className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded ml-2">
                          View Profile
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}