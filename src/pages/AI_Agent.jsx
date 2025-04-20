import { useState } from 'react';
import {
  ArrowRight,
  Send,
  Plus,
  Share2,
  Eye,
  Link,
  MessageCircle,
  Bot,
  User
} from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function AI_Agent() {
  const { user } = useUser();
  const [showTour, setShowTour] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: "Hello! I'm your AI assistant. How can I help you today?",
      timestamp: '10:00 AM'
    },
    {
      type: 'user',
      content: 'I need help creating a new referral campaign',
      timestamp: '10:01 AM'
    },
    {
      type: 'bot',
      content: 'I can help you with that! Would you like to create a campaign for existing promoters or start fresh with new promoters?',
      timestamp: '10:01 AM'
    },
    {
      type: 'user',
      content: 'I want to start with new promoters',
      timestamp: '10:02 AM'
    },
    {
      type: 'bot',
      content: "Great choice! Let me guide you through the process. First, you'll need to:\n\n1. Set your campaign goals\n2. Define reward structure\n3. Create promotional materials\n\nWhich aspect would you like to discuss first?",
      timestamp: '10:02 AM'
    }
  ]);

  const getInitials = (name) => {
    if (!name) return '';
    return name
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase();
  };

  const ProfilePhoto = ({ src, name, size = 'w-8 h-8' }) => {
    if (src && src.length > 0) {
      return (
        <div className={`${size} rounded-full overflow-hidden bg-gray-100`}>
          <img
            src={src}
            alt={name || 'Profile'}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
              e.target.parentElement.innerHTML = getInitials(name);
              e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-slate-800', 'text-white', 'text-xs', 'font-medium');
            }}
          />
        </div>
      );
    }

    return (
      <div className={`${size} rounded-full bg-slate-800 flex items-center justify-center text-white text-xs font-medium`}>
        {getInitials(name)}
      </div>
    );
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      const newMessage = {
        type: 'user',
        content: inputValue,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages([...messages, newMessage]);
      setInputValue('');

      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          type: 'bot',
          content: "I understand you're interested in that. Could you provide more details about your specific requirements?",
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  return (
    <div className="flex h-screen bg-white">
      <div className="flex-1 flex flex-col">
        {/* Chat Area */}
        <div className="flex-1 scroll-smooth-container p-6">
          <div className="max-w-4xl mx-auto space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start gap-2.5 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse' : ''}`}>
                  {message.type === 'bot' ? (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <Bot size={16} className="text-blue-600" />
                    </div>
                  ) : (
                    <ProfilePhoto
                      src={user?.avatar}
                      name={user?.fullName}
                      size="w-8 h-8"
                    />
                  )}
                  <div className={`flex flex-col gap-1 ${message.type === 'user' ? 'items-end' : ''}`}>
                    <div className={`rounded-lg p-4 ${message.type === 'bot'
                        ? 'bg-gray-100 text-gray-900'
                        : 'bg-blue-600 text-white'
                      }`}>
                      <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                    </div>
                    <span className="text-xs text-gray-500">{message.timestamp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-sm font-medium mb-3">Quick Links</p>
            <div className="flex flex-wrap gap-2">
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center hover:bg-gray-50">
                <Link size={16} className="mr-2" />
                SEND REFERRAL
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center hover:bg-gray-50">
                <Plus size={16} className="mr-2" />
                CREATE CAMPAIGN
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center hover:bg-gray-50">
                <Share2 size={16} className="mr-2" />
                FOLLOW-UP
              </button>
              <button className="px-4 py-2 border border-gray-300 rounded-md text-sm flex items-center hover:bg-gray-50">
                <Eye size={16} className="mr-2" />
                VIEW REFERRAL
              </button>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="bg-white border-t border-gray-200 p-4">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                className="w-full px-4 py-3 border border-gray-300 rounded-full pr-12"
                placeholder="Ask me anything..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    handleSubmit();
                  }
                }}
              />
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100"
                onClick={handleSubmit}
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
