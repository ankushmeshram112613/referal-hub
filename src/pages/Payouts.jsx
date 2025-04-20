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
  Bell,
  Coins,
  ClipboardList
} from 'lucide-react';

export default function PayoutsDashboard() {
  const [activeTab, setActiveTab] = useState('All Payouts');
  const tabs = ['All Payouts', 'Disputes', 'Payout Settings'];
  
  const payouts = [
    { id: '#P-1048', promoter: 'Emery Dokidis', points: '500 pts', date: '28-4-2024', program: 'Spring Boost', status: 'Paid' },
    { id: '#P-1047', promoter: 'Kadin Lipshutz', points: '250 pts', date: '27-5-2024', program: 'Summer Referral Program', status: 'Paid' },
    { id: '#P-1046', promoter: 'Randy Culhane', points: '300 pts', date: '29-5-2024', program: 'Early Bird Special', status: 'Disputed' },
    { id: '#P-1045', promoter: 'Jaxson Vaccaro', points: '100 pts', date: '30-6-2024', program: 'Early Bird Special', status: 'Paid' },
    { id: '#P-1044', promoter: 'Jocelyn Levin', points: '200 pts', date: '01-7-2024', program: 'Summer Referral Program', status: 'Disputed' },
    { id: '#P-1043', promoter: 'Maren Septimus', points: '300 pts', date: '03-7-2024', program: 'Summer Referral Program', status: 'Paid' },
    { id: '#P-1042', promoter: 'Haylie Saris', points: '220 pts', date: '05-7-2024', program: 'Spring Boost', status: 'Paid' },
    { id: '#P-1041', promoter: 'Randy Herwitz', points: '400 pts', date: '10-7-2024', program: 'Spring Boost', status: 'Disputed' }
  ];

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
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600">
            <User className="w-5 h-5" />
            <span>Leads</span>
          </div>
          
          <div className="px-4 py-2 flex items-center space-x-3 text-blue-600 bg-blue-50">
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
          <h1 className="text-xl font-semibold">Manage and monitor your payouts</h1>
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
        
        {/* Stats */}
        <div className="p-6 grid grid-cols-3 gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-gray-600" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Total Points Given</div>
              <div className="text-2xl font-semibold">12,500</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
              <Coins className="w-6 h-6 text-red-400" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Current Point Balance</div>
              <div className="text-2xl font-semibold">1,250</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
              <ClipboardList className="w-6 h-6 text-pink-400" />
            </div>
            <div>
              <div className="text-sm text-gray-500">Last Points Transfer</div>
              <div className="text-2xl font-semibold">April 9, 2025</div>
            </div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="px-6">
          <div className="flex border-b border-gray-200 bg-gray-100 rounded-t-lg">
            {tabs.map(tab => (
              <button
                key={tab}
                className={`px-8 py-3 text-sm font-medium ${
                  activeTab === tab 
                    ? 'text-blue-600 border-b-2 border-blue-600 bg-white rounded-t-lg' 
                    : 'text-gray-500'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          
          {/* Table Header */}
          <div className="mt-6 flex justify-between items-center">
            <h2 className="text-lg font-medium">All Payouts</h2>
            <button className="px-4 py-2 border border-gray-300 rounded-md flex items-center space-x-2 bg-white">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
          
          {/* Table */}
          <div className="mt-4 bg-white rounded-md border border-gray-200 overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payout ID
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Promoter Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Points
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward Date
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Reward Earned For
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {payouts.map((payout) => (
                  <tr key={payout.id}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payout.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {payout.promoter}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payout.points}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payout.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {payout.program}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        payout.status === 'Paid' 
                          ? 'bg-green-100 text-green-500' 
                          : 'bg-orange-100 text-orange-500'
                      }`}>
                        {payout.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-600 flex items-center space-x-2">
                      <button className="p-1 bg-gray-200 rounded-md">
                        <Eye className="w-4 h-4" />
                      </button>
                      <span className="text-blue-600">
                        {payout.status === 'Disputed' ? 'Track Dispute' : 'Request Dispute'}
                      </span>
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