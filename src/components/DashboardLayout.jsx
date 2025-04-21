import { Link, Outlet } from 'react-router-dom';
import { Settings, Bot, Layout, MessagesSquare, UserPlus, Users, CreditCard, HelpCircle, FileText } from 'lucide-react';
import { useUser } from '../context/UserContext';
import UserProfile from './UserProfile';

export default function DashboardLayout({ children }) {
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Left Sidebar */}
      <div className="w-64 bg-slate-50 border-r border-slate-200 fixed h-screen">
        {/* Logo/Brand Section */}
        <div className="h-[88px] flex items-center justify-center border-b border-slate-200">
          {/* Add your logo here */}
        </div>
        
        <div className="flex flex-col h-[calc(100vh-88px)]">
          <div className="flex-1">
            <Link to="/platformSetup">
              <SidebarItem id="platform-setup" icon={<Settings className="w-5 h-5" />} label="Platform Setup" />
            </Link>
            <Link to="/aiagent">
              <SidebarItem id="ai-agent" icon={<Bot className="w-5 h-5" />} label="AI Agent" />
            </Link>
            <Link to="/dashboard">
              <SidebarItem id="dashboard" icon={<Layout className="w-5 h-5" />} label="Dashboard" />
            </Link>
            <Link to="/campaign">
              <SidebarItem id="campaign" icon={<MessagesSquare className="w-5 h-5" />} label="Campaign" />
            </Link>
            <Link to="/promoters">
              <SidebarItem id="promoters" icon={<UserPlus className="w-5 h-5" />} label="Promoters" />
            </Link>
            <Link to="/leads">
              <SidebarItem id="leads" icon={<Users className="w-5 h-5" />} label="Leads" />
            </Link>
            <Link to="/payouts">
              <SidebarItem id="payouts" icon={<CreditCard className="w-5 h-5" />} label="Payouts" />
            </Link>
          </div>

          <div className="mt-auto border-t border-slate-200">
            <Link to="/settings">
              <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
            </Link>
            <SidebarItem icon={<HelpCircle className="w-5 h-5" />} label="Help" />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 ml-64">
        {/* Header */}
        <div className="h-[88px] border-b border-slate-200 bg-white fixed right-0 left-64 z-10">
          <div className="flex justify-between items-center px-6 h-full">
            <h1 className="text-xl font-semibold text-slate-800">
              {/* Dynamic title based on route */}
            </h1>
            <div className="flex items-center gap-3">
              <button className="text-blue-600">
                {/* <FileText className="w-5 h-5" /> */}
              </button>
              <UserProfile />
            </div>
          </div>
        </div>

        {/* Content Area with proper spacing */}
        <div className="pt-[88px]">
          <Outlet />
          {children}
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isActive = false, id }) {
  return (
    <div
      id={id}
      className={`px-4 py-3 flex items-center gap-2 text-sm cursor-pointer relative ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}




