import { Link, useLocation } from 'react-router-dom';
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

const SidebarItem = ({ icon, label, isActive, onClick, children, to }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasChildren = children && children.length > 0;
  const location = useLocation();
  
  // Check if this item or any of its children are active
  const isCurrentActive = to === location.pathname || 
    (children?.some(child => child.props.to === location.pathname));

  return (
    <div>
      <div
        className={`flex items-center space-x-3 px-4 py-3 cursor-pointer
          ${isCurrentActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'}
          transition-colors duration-200
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
            {icon && <div className={isCurrentActive ? 'text-blue-600' : 'text-slate-600'}>{icon}</div>}
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
  const location = useLocation();

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
          <Link to="/platformSetup">
            <SidebarItem 
              icon={<Settings className="w-5 h-5" />} 
              label="Platform Setup" 
              to="/platformSetup"
            />
          </Link>
          <Link to="/aiagent">
            <SidebarItem 
              icon={<Bot className="w-5 h-5" />} 
              label="AI Agent" 
              to="/aiagent"
            />
          </Link>
          <Link to="/dashboard">
            <SidebarItem 
              icon={<Layout className="w-5 h-5" />} 
              label="Dashboard" 
              to="/dashboard"
            />
          </Link>
          
          <SidebarItem 
            icon={<MessagesSquare className="w-5 h-5" />} 
            label="Campaign Management"
            to="/campaign"
          >
            <Link to="/campaign/create">
              <SidebarItem label="Create Campaign" to="/campaign/create" />
            </Link>
            <Link to="/campaign/active">
              <SidebarItem label="Active Campaigns" to="/campaign/active" />
            </Link>
            <Link to="/campaign/archived">
              <SidebarItem label="Archived" to="/campaign/archived" />
            </Link>
          </SidebarItem>

          <Link to="/promoters">
            <SidebarItem 
              icon={<UserPlus className="w-5 h-5" />} 
              label="Promoters" 
              to="/promoters"
            />
          </Link>
          <Link to="/leads">
            <SidebarItem 
              icon={<Users className="w-5 h-5" />} 
              label="Leads" 
              to="/leads"
            />
          </Link>
          
          <SidebarItem 
            icon={<CreditCard className="w-5 h-5" />} 
            label="Payouts" 
            to="/payouts"
          >
            <Link to="/payouts/pending">
              <SidebarItem label="Pending Payouts" to="/payouts/pending" />
            </Link>
            <Link to="/payouts/processed">
              <SidebarItem label="Processed" to="/payouts/processed" />
            </Link>
            <Link to="/payouts/disputes">
              <SidebarItem label="Disputes" to="/payouts/disputes" />
            </Link>
          </SidebarItem>

          <SidebarItem 
            icon={<Bell className="w-5 h-5" />} 
            label="Notifications"
            to="/notifications"
          >
            <Link to="/notifications/alerts">
              <SidebarItem label="Alerts" to="/notifications/alerts" />
            </Link>
            <Link to="/notifications/updates">
              <SidebarItem label="Updates" to="/notifications/updates" />
            </Link>
          </SidebarItem>

          <SidebarItem 
            icon={<Coins className="w-5 h-5" />} 
            label="Points Management"
            to="/points"
          >
            <Link to="/points/allocation">
              <SidebarItem label="Point Allocation" to="/points/allocation" />
            </Link>
            <Link to="/points/history">
              <SidebarItem label="History" to="/points/history" />
            </Link>
          </SidebarItem>

          <SidebarItem 
            icon={<ClipboardList className="w-5 h-5" />} 
            label="Reports"
            to="/reports"
          >
            <Link to="/reports/performance">
              <SidebarItem label="Performance" to="/reports/performance" />
            </Link>
            <Link to="/reports/analytics">
              <SidebarItem label="Analytics" to="/reports/analytics" />
            </Link>
          </SidebarItem>
        </div>
      </div>

      <div className="mt-auto border-t border-slate-200">
        <Link to="/settings">
          <SidebarItem 
            icon={<Settings className="w-5 h-5" />} 
            label="Settings" 
            to="/settings"
          />
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




