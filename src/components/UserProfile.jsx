import { useUser } from '../context/UserContext';

export default function UserProfile() {
  const { user } = useUser();

  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-gray-800 rounded-full overflow-hidden">
        <img 
          src={user.avatar || "/api/placeholder/32/32"} 
          alt="Profile" 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="ml-2">
        <div className="text-sm font-medium">{user.fullName}</div>
        <div className="text-xs text-gray-500">{user.email}</div>
      </div>
    </div>
  );
}