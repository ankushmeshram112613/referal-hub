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
  Bell,
  Coins,
  ClipboardList,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useState, useEffect } from 'react';

const SidebarItem = ({ icon, label, isActive, onClick, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;

  return (
    <div>
      <div
        className={`flex items-center space-x-3 px-4 py-3 cursor-pointer
          ${isActive ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'}
        `}
        onClick={() => {
          if (hasChildren) {
            setIsOpen(!isOpen);
          }
          if (onClick) onClick();
        }}
      >
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center space-x-3">
            {icon}
            <span className="text-sm font-medium">{label}</span>
          </div>
          {hasChildren && (
            <div className="ml-auto">
              {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </div>
          )}
        </div>
      </div>
      {hasChildren && isOpen && (
        <div className="ml-4 border-l border-gray-200">
          {children}
        </div>
      )}
    </div>
  );
};

export default function Sidebar({ setShowTour, setTourStep }) {
  useEffect(() => {
    setShowTour(true);
    setTourStep(0);
  }, []);

  return (
    <div className="w-64 bg-slate-50 border-r border-slate-200 flex flex-col h-full animate-slide-in">
      <div className="p-4 border-b border-slate-200 animate-fade-in">
        <img src="/logo.png" alt="Logo" className="h-8" />
      </div>

      <div className="flex-1 overflow-y-auto">
        <div className="py-2">
          <Link to="/platformSetup" className="animate-fade-in" style={{ animationDelay: '100ms' }}>
            <SidebarItem icon={<Settings className="w-5 h-5" />} label="Platform Setup" />
          </Link>
          <Link to="/aiagent" className="animate-fade-in" style={{ animationDelay: '200ms' }}>
            <SidebarItem icon={<Bot className="w-5 h-5" />} label="AI Agent" />
          </Link>
          <Link to="/dashboard" className="animate-fade-in" style={{ animationDelay: '300ms' }}>
            <SidebarItem icon={<Layout className="w-5 h-5" />} label="Dashboard" />
          </Link>
          
          <SidebarItem icon={<MessagesSquare className="w-5 h-5" />} label="Campaign Management">
            <Link to="/campaign/create">
              <SidebarItem label="Create Campaign" />
            </Link>
            <Link to="/campaign/active">
              <SidebarItem label="Active Campaigns" />
            </Link>
            <Link to="/campaign/archived">
              <SidebarItem label="Archived" />
            </Link>
          </SidebarItem>

          <Link to="/promoters" className="animate-fade-in" style={{ animationDelay: '400ms' }}>
            <SidebarItem icon={<UserPlus className="w-5 h-5" />} label="Promoters" />
          </Link>
          <Link to="/leads" className="animate-fade-in" style={{ animationDelay: '500ms' }}>
            <SidebarItem icon={<Users className="w-5 h-5" />} label="Leads" />
          </Link>
          
          <SidebarItem icon={<CreditCard className="w-5 h-5" />} label="Payouts" isActive={true}>
            <Link to="/payouts/pending">
              <SidebarItem label="Pending Payouts" />
            </Link>
            <Link to="/payouts/processed">
              <SidebarItem label="Processed" />
            </Link>
            <Link to="/payouts/disputes">
              <SidebarItem label="Disputes" />
            </Link>
          </SidebarItem>

          <SidebarItem icon={<Bell className="w-5 h-5" />} label="Notifications">
            <Link to="/notifications/alerts">
              <SidebarItem label="Alerts" />
            </Link>
            <Link to="/notifications/updates">
              <SidebarItem label="Updates" />
            </Link>
          </SidebarItem>

          <SidebarItem icon={<Coins className="w-5 h-5" />} label="Points Management">
            <Link to="/points/allocation">
              <SidebarItem label="Point Allocation" />
            </Link>
            <Link to="/points/history">
              <SidebarItem label="History" />
            </Link>
          </SidebarItem>

          <SidebarItem icon={<ClipboardList className="w-5 h-5" />} label="Reports">
            <Link to="/reports/performance">
              <SidebarItem label="Performance" />
            </Link>
            <Link to="/reports/analytics">
              <SidebarItem label="Analytics" />
            </Link>
          </SidebarItem>
        </div>
      </div>

      <div className="mt-auto border-t border-slate-200 animate-fade-in" style={{ animationDelay: '300ms' }}>
        <Link to="/settings">
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
        </Link>
        <SidebarItem 
          icon={<HelpCircle className="w-5 h-5" />} 
          label="Help" 
          onClick={() => setShowTour(true)} 
        />
      </div>
    </div>
  );
}



