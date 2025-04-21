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
  Save
} from 'lucide-react';
import { useUser } from '../context/UserContext';
import api from '../services/api';
import UserProfile from '../components/UserProfile';
// import DashboardLayout from '../components/DashboardLayout';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState('User Profile');
  const [showTour, setShowTour] = useState(false);
  const tabs = ['User Profile', 'Business Profile', 'AI Settings', 'Email & Phone Setup', 'Subscription & Usage'];
  const { user } = useUser();
  
  return (
    // <DashboardLayout title="Settings" setShowTour={setShowTour}>
      <div className="flex-1">
        {/* Header with profile */}
        {/* <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Settings</h1>
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">
              {user?.fullName?.split(' ').map(name => name[0]).join('')}
            </div>
            <div className="text-sm">
              <div className="font-medium">{user?.fullName}</div>
              <div className="text-slate-500 text-xs">{user?.email}</div>
            </div>
          </div>
        </header> */}
        <div className="p-8">
          {/* Settings Navigation */}
          <div className="flex space-x-1 mb-6 bg-slate-100 p-1 rounded-lg w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`px-4 py-2 text-sm font-medium rounded-md ${
                  activeTab === tab
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-slate-600 hover:text-slate-800'
                }`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Settings Content */}
          <div className="bg-white rounded-lg border border-slate-200">
            <div className="p-6">
              {activeTab === 'User Profile' && (
                <UserProfileSettings />
              )}
              {activeTab === 'Business Profile' && (
                <BusinessProfileSettings />
              )}
              {activeTab === 'AI Settings' && (
                <AISettings />
              )}
              {activeTab === 'Email & Phone Setup' && (
                <CommunicationSettings />
              )}
              {activeTab === 'Subscription & Usage' && (
                <SubscriptionSettings />
              )}
            </div>
          </div>
        </div>
      </div>
    // </DashboardLayout>
  );
}

const SidebarItem = ({ icon, label, isActive = false, id, onClick }) => {
  return (
    <div
      id={id}
      className={`px-4 py-3 flex items-center gap-2 text-sm cursor-pointer relative ${
        isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
      }`}
      onClick={onClick}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
};

function UserProfileSettings() {
  const { user, updateUser } = useUser();
  const [userData, setUserData] = useState({
    fullName: '',
    email: '',
    phone: '',
    timeZone: '',
    avatar: '',
    role: '',
    department: '',
    location: ''
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setUserData({
        fullName: user.fullName || '',
        email: user.email || '',
        phone: user.phone || '',
        timeZone: user.timeZone || '',
        avatar: user.avatar || '',
        role: user.role || '',
        department: user.department || '',
        location: user.location || ''
      });
      setIsLoading(false);
    }
  }, [user]);

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  // Profile photo display component
  const ProfilePhoto = ({ src, name, size = 'w-20 h-20' }) => {
    if (src && src.length > 0) {
      return (
        <div className={`${size} rounded-full overflow-hidden bg-gray-100`}>
          <img 
            src={src}
            alt={name || 'Profile'} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite loop
              e.target.src = ''; // Clear the src
              e.target.parentElement.innerHTML = getInitials(name); // Show initials instead
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-blue-600', 'text-white', 'text-xl', 'font-medium');
            }}
          />
        </div>
      );
    }

    return (
      <div className={`${size} rounded-full bg-blue-600 flex items-center justify-center text-white text-xl font-medium`}>
        {getInitials(name)}
      </div>
    );
  };

  const handlePhotoClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Validate file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('File size should be less than 5MB');
      return;
    }

    try {
      setIsSaving(true);
      const formData = new FormData();
      formData.append('avatar', file);

      const result = await api.uploadProfilePhoto(formData);
      if (result.success) {
        const updatedUserData = {
          ...userData,
          avatar: result.avatarUrl
        };
        setUserData(updatedUserData);
        updateUser({ ...user, avatar: result.avatarUrl });
      } else {
        alert('Failed to upload photo');
      }
    } catch (error) {
      console.error('Error uploading photo:', error);
      alert('Failed to upload photo');
    } finally {
      setIsSaving(false);
    }
  };

  const handleRemovePhoto = async () => {
    try {
      setIsSaving(true);
      const result = await api.removeProfilePhoto();
      if (result.success) {
        const updatedUserData = {
          ...userData,
          avatar: ''
        };
        setUserData(updatedUserData);
        updateUser({ ...user, avatar: '' });
      } else {
        alert('Failed to remove photo');
      }
    } catch (error) {
      console.error('Error removing photo:', error);
      alert('Failed to remove photo');
    } finally {
      setIsSaving(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      const result = await api.updateUserProfile(userData);
      if (result.success) {
        updateUser(result.user);
        alert('Profile updated successfully!');
      } else {
        alert(result.message || 'Failed to update profile');
      }
    } catch (error) {
      alert('Failed to update profile');
      console.error('Error updating profile:', error);
    } finally {
      setIsSaving(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-lg font-medium">User Profile Settings</h2>
      
      {/* Profile Picture Section */}
      <div className="flex items-center space-x-4">
        <div 
          className="relative group cursor-pointer"
          onClick={handlePhotoClick}
        >
          <ProfilePhoto 
            src={userData.avatar} 
            name={userData.fullName} 
            size="w-20 h-20"
          />
          
          {/* Hover overlay */}
          <div className="absolute inset-0 rounded-full bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="text-white text-xs">Change Photo</span>
          </div>
        </div>

        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleFileChange}
        />

        <div className="space-y-2">
          <button 
            type="button"
            onClick={handlePhotoClick}
            disabled={isSaving}
            className="px-4 py-2 text-sm border border-gray-300 rounded-md hover:bg-gray-50 w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSaving ? 'Uploading...' : 'Upload New Photo'}
          </button>
          
          {userData.avatar && (
            <button 
              type="button"
              onClick={handleRemovePhoto}
              disabled={isSaving}
              className="px-4 py-2 text-sm border border-red-300 text-red-600 rounded-md hover:bg-red-50 w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSaving ? 'Removing...' : 'Remove Photo'}
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={userData.fullName}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Time Zone
          </label>
          <select 
            name="timeZone"
            value={userData.timeZone}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="UTC-5">UTC-5 (Eastern Time)</option>
            <option value="UTC-4">UTC-4 (Atlantic Time)</option>
            <option value="UTC-6">UTC-6 (Central Time)</option>
            <option value="UTC-7">UTC-7 (Mountain Time)</option>
            <option value="UTC-8">UTC-8 (Pacific Time)</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Role
          </label>
          <input
            type="text"
            name="role"
            value={userData.role}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Department
          </label>
          <input
            type="text"
            name="department"
            value={userData.department}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="submit"
          disabled={isSaving}
          className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:bg-blue-400"
        >
          <Save size={16} className="mr-2" />
          {isSaving ? 'Saving...' : 'Save Changes'}
        </button>
      </div>
    </form>
  );
}

function BusinessProfileSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Business Profile Settings</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            defaultValue="Acme Corp"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Type
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>E-commerce</option>
            <option>SaaS</option>
            <option>Retail</option>
          </select>
        </div>
        <div className="col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Business Address
          </label>
          <textarea
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            rows="3"
            defaultValue="123 Business Street, Suite 100, New York, NY 10001"
          />
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Save size={16} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function AISettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">AI Configuration</h2>
      <div className="space-y-4">
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span className="text-sm">Enable AI-powered lead scoring</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" defaultChecked />
            <span className="text-sm">Automated follow-up messages</span>
          </label>
        </div>
        <div>
          <label className="flex items-center space-x-2">
            <input type="checkbox" className="rounded" />
            <span className="text-sm">Smart campaign optimization</span>
          </label>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Save size={16} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function CommunicationSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Communication Settings</h2>
      <div className="grid grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Service Provider
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>SendGrid</option>
            <option>Mailgun</option>
            <option>AWS SES</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            SMS Provider
          </label>
          <select className="w-full px-3 py-2 border border-gray-300 rounded-md">
            <option>Twilio</option>
            <option>MessageBird</option>
            <option>Nexmo</option>
          </select>
        </div>
      </div>
      <div className="flex justify-end mt-6">
        <button className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Save size={16} className="mr-2" />
          Save Changes
        </button>
      </div>
    </div>
  );
}

function SubscriptionSettings() {
  return (
    <div className="space-y-6">
      <h2 className="text-lg font-medium">Subscription & Usage</h2>
      <div className="bg-blue-50 p-4 rounded-lg">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Current Plan: Professional</h3>
            <p className="text-sm text-gray-600">$49/month</p>
          </div>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            Upgrade Plan
          </button>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="font-medium">Usage Statistics</h3>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Active Promoters</div>
            <div className="text-xl font-medium">45/50</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">Monthly Leads</div>
            <div className="text-xl font-medium">892/1000</div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="text-sm text-gray-600">API Calls</div>
            <div className="text-xl font-medium">8,892/10,000</div>
          </div>
        </div>
      </div>
    </div>
  );
}
