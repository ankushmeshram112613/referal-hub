import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Updated import from react-router-dom instead of react-router
import {
  Card,
  CardContent
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Input
} from '@/components/ui/input';
import {
  Button
} from '@/components/ui/button';
import { 
  Settings, 
  Bot, 
  Layout, 
  MessagesSquare, 
  UserPlus, 
  Users, 
  CreditCard,
  HelpCircle,
  FileText,
  Check,
  X,
  ChevronLeft,
  ChevronRight,
  UploadCloud,  // Add this for the CustomerDataForm
  Plus,         // Add this for the CampaignSetupForm
} from 'lucide-react';
import { useUser } from '../context/UserContext';

export default function PlatformSetup() {
  const { user } = useUser();
  const [activeStep, setActiveStep] = useState('businessProfile');
  const [stepsStatus, setStepsStatus] = useState({
    'businessProfile': 'in-progress',
    'customerData': 'not-started',
    'aiAgentRules': 'not-started',
    'firstCampaign': 'not-started'
  });

  // Tour state
  const [showTour, setShowTour] = useState(false);
  const [tourStep, setTourStep] = useState(0);

  const tourSteps = [
    {
      target: "platform-setup",
      title: "Platform Setup",
      content: "This is where you'll configure your account settings and complete the onboarding process.",
      position: "right"
    },
    {
      target: "ai-agent",
      title: "AI Agent",
      content: "Manage your AI assistant settings and customize how it interacts with your customers.",
      position: "right"
    },
    {
      target: "dashboard",
      title: "Dashboard",
      content: "View analytics, performance metrics, and track your referral campaign success.",
      position: "right"
    },
    {
      target: "campaign",
      title: "Campaign",
      content: "Create and manage your referral campaigns, set rewards, and track progress.",
      position: "right"
    },
    {
      target: "promoters",
      title: "Promoters",
      content: "View and manage users who are promoting your business through referrals.",
      position: "right"
    },
    {
      target: "leads",
      title: "Leads",
      content: "Track potential customers who have been referred to your business.",
      position: "right"
    },
    {
      target: "payouts",
      title: "Payouts",
      content: "Manage rewards and payments to your promoters for successful referrals.",
      position: "right"
    }
  ];

  // Start tour automatically on first load
  useEffect(() => {
    // Always show tour on page load/refresh
    setShowTour(true);
    setTourStep(0);
  }, []);

  const handleNextTourStep = () => {
    if (tourStep < tourSteps.length - 1) {
      setTourStep(tourStep + 1);
    } else {
      setShowTour(false);
    }
  };

  const handlePrevTourStep = () => {
    if (tourStep > 0) {
      setTourStep(tourStep - 1);
    }
  };

  const handleCloseTour = () => {
    setShowTour(false);
  };

  const handleStepClick = (stepId) => {
    if (stepsStatus[stepId] === 'not-started') {
      return; // Can't skip to not started steps
    }

    setActiveStep(stepId);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Get the next step
    const steps = Object.keys(stepsStatus);
    const currentIndex = steps.indexOf(activeStep);
    const nextStep = steps[currentIndex + 1];

    if (nextStep) {
      // Mark current step as completed and next step as in-progress
      setStepsStatus({
        ...stepsStatus,
        [activeStep]: 'completed',
        [nextStep]: 'in-progress'
      });

      // Move to next step
      setActiveStep(nextStep);
    } else {
      // Mark current step as completed (last step)
      setStepsStatus({
        ...stepsStatus,
        [activeStep]: 'completed'
      });
    }
  };

  // Render the appropriate form based on active step
  const renderStepContent = () => {
    switch (activeStep) {
      case 'businessProfile':
        return (
          <BusinessProfileForm onSubmit={handleFormSubmit} />
        );
      case 'customerData':
        return (
          <CustomerDataForm onSubmit={handleFormSubmit} />
        );
      case 'aiAgentRules':
        return (
          <AIAgentRulesForm onSubmit={handleFormSubmit} />
        );
      case 'firstCampaign':
        return (
          <CampaignSetupForm onSubmit={handleFormSubmit} />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex gap-8 p-6">
      {/* Left Side - Onboarding Steps */}
      <div className="w-2/6 bg-[#F8F9FF] p-10 rounded-lg">
        <div className="mb-6">
          <h2 className="text-xl text-sm text-blue-600 mb-1.5">Get Started with ReferralHub</h2>
          <p className="text-slate-600 text-sm">
            To get started with better referrals & rewards, complete your account setup in a few easy steps.
          </p>
        </div>

        <div className="h-px bg-slate-200 my-6"></div>

        <div className="space-y-6 mt-12">
          <OnboardingStep
            title="Set Up Business Profile"
            status={stepsStatus.businessProfile}
            onClick={() => handleStepClick('businessProfile')}
          />
          <OnboardingStep
            title="Sync Your Customer Data"
            status={stepsStatus.customerData}
            onClick={() => handleStepClick('customerData')}
          />
          <OnboardingStep
            title="Set Up AI Agent Rules"
            status={stepsStatus.aiAgentRules}
            onClick={() => handleStepClick('aiAgentRules')}
          />
          <OnboardingStep
            title="Set Up First Campaign"
            status={stepsStatus.firstCampaign}
            onClick={() => handleStepClick('firstCampaign')}
          />
        </div>
      </div>

      {/* Right Side - Dynamic Form Content */}
      <div className="w-full bg-white p-3 rounded-lg shadow-sm">
        {renderStepContent()}
      </div>

      {/* Tour Popup */}
      {showTour && (
        <TourPopup
          step={tourSteps[tourStep]}
          onNext={tourStep < tourSteps.length - 1 ? handleNextTourStep : () => setShowTour(false)}
          onPrev={tourStep > 0 ? handlePrevTourStep : null}
          onClose={handleCloseTour}
        />
      )}
    </div>
  );
}

function SidebarItem({ icon, label, isActive = false, id }) {
  return (
    <div
      id={id}
      className={`px-4 py-3 flex items-center gap-2 text-sm cursor-pointer relative ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
        }`}
    >
      {icon}
      <span>{label}</span>
    </div>
  );
}

function OnboardingStep({ title, status, onClick }) {
  return (
    <div
      className={`flex items-start gap-3 ${status !== 'completed' ? 'cursor-pointer' : ''}`}
      onClick={status !== 'completed' ? onClick : undefined}
    >
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex-shrink-0 mt-1">
        {status === 'in-progress' && <div className='w-5 h-5 rounded-full bg-blue-500 mt-1 ml-1'></div>}
        {status === 'completed' && <Check className='w-8 h-8 text-white bg-green-600 rounded-full p-1' />}
      </div>
      <div>
        <h3 className="text-sm text-slate-800">{title}</h3>
        <p className={`text-sm ${status === 'completed' ? 'text-green-600' : 'text-slate-500'} `}>
          {status === 'completed' ? 'Completed' :
            status === 'in-progress' ? 'In Progress' :
              'Not Started'}
        </p>
      </div>
    </div>
  );
}

// Step form components
function BusinessProfileForm({ onSubmit }) {
  return (
    <>
      <div className="w-10/12">
        <div className="mb-6">
          <h2 className="text-xl text-sm text-center text-slate-800">Build Your Business Identity</h2>
          <p className="text-slate-400 text-sm">
            Help us tailor the referral experience by adding key details about your business
          </p>
        </div>

        <div className="space-y-4">
          {/* First row */}
          <div className="grid gap-4">
            <div className="flex items-center">
              <div className="text-sm text-slate-700 mb-1.5">Business Logo</div>
              <button className="px-4 py-1 mx-3 border border-slate-200 rounded-md text-slate-600 text-sm hover:bg-slate-50">
                Choose Image
              </button>
            </div>
          </div>
          <div>
            <div className="text-sm text-slate-700 mb-1.5 pt-2">Business Description</div>
            <textarea
              className="w-full px-3 py-2 border border-slate-200 rounded-md text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter business description..."
              rows={2}
            />
          </div>

          {/* Second row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Business Name</div>
              <Input placeholder="Enter business name" />
            </div>
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Business Email</div>
              <Input placeholder="e.g., robert.fox@myemail.com" />
            </div>
          </div>

          {/* Third row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Industry</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="tech">Technology</SelectItem>
                  <SelectItem value="retail">Retail</SelectItem>
                  <SelectItem value="finance">Finance</SelectItem>
                  <SelectItem value="healthcare">Healthcare</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="text-sm text-slate-700 mb-1.5">Company Size <span className="text-slate-400 text-sm">(Optional)</span></div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-10">1-10 employees</SelectItem>
                  <SelectItem value="11-50">11-50 employees</SelectItem>
                  <SelectItem value="51-200">51-200 employees</SelectItem>
                  <SelectItem value="201+">201+ employees</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Fourth row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Services</div>
              <Input placeholder="Enter services..." />
            </div>

            <div>
              <div className="text-sm text-slate-700 mb-1.5">Products</div>
              <Input placeholder="Enter products..." />
            </div>
          </div>

          {/* Fifth row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-700 mb-1.5">City</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newyork">New York</SelectItem>
                  <SelectItem value="losangeles">Los Angeles</SelectItem>
                  <SelectItem value="chicago">Chicago</SelectItem>
                  <SelectItem value="sanfrancisco">San Francisco</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <div className="text-sm text-slate-700 mb-1.5">State</div>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ny">New York</SelectItem>
                  <SelectItem value="ca">California</SelectItem>
                  <SelectItem value="il">Illinois</SelectItem>
                  <SelectItem value="tx">Texas</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Sixth row */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Zip Code</div>
              <Input placeholder="Enter zip code" />
            </div>
            <div>
              <div className="text-sm text-slate-700 mb-1.5">Business Phone No.</div>
              <Input placeholder="Enter phone no." />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <Button
              onClick={onSubmit}
              className="w-[65%] text-white font-medium py-2 bg-gradient-to-r mt-2 from-blue-600 to-blue-200 hover:from-blue-600 hover:to-blue-300"
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

function CustomerDataForm({ onSubmit }) {
  const [dragging, setDragging] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = () => {
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    // Handle file drop logic here
  };
  return (
    <>
      <div className="p-10 text-center bg-white">
        <h1 className="text-xl text-gray-800 my-10 text-center">Import Customer Data: Sync with Zapier or Upload CSV</h1>

        {/* Zapier Button */}
        <button className="w-[65%] py-1.5 px-3 border border-blue-600 text-blue-600 font-medium rounded-md">
          Connect with Zapier
        </button>

        {/* Separator */}
        <div className="flex items-center my-8">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="px-4 text-gray-500">or</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        {/* Upload Area */}
        <div
          className={`border-2 border-dashed rounded-md p-10 text-center mb-6 ${dragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'}`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <div className="flex justify-center mb-4">
            <UploadCloud className="text-blue-600" size={48} />
          </div>
          <p className="text-gray-800 mb-4">Drag and drop files here</p>
          <p className="text-gray-500 mb-4">or</p>
          <button className="py-3 px-4 border border-blue-600 text-blue-600 font-medium rounded-md">
            Click to Upload CSV File
          </button>
        </div>

        {/* Next Button */}
        <Button
          onClick={onSubmit}
          className="w-[45%] text-white font-medium py-2 bg-gradient-to-r mt-2 from-blue-600 to-blue-200 hover:from-blue-600 hover:to-blue-300"
        >
          Next
        </Button>
      </div>
    </>
  );
}

function AIAgentRulesForm({ onSubmit }) {
  const [autoOfferHelp, setAutoOfferHelp] = useState(true);
  const [userInitiatedOnly, setUserInitiatedOnly] = useState(false);

  return (
    <>
      <div className="p-10 w-10/12">
        <h1 className="text-2xl font-semibold text-gray-800 mb-12">Set Up AI Agent Rules</h1>

        {/* Tone of Communication */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm mb-2">
            Tone of Communication
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select</option>
              <option value="friendly">Friendly</option>
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Response Style */}
        <div className="mb-8">
          <label className="block text-gray-700 text-sm mb-2">
            Response Style
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-blue-500"
              defaultValue=""
            >
              <option value="" disabled>Select</option>
              <option value="concise">Concise</option>
              <option value="detailed">Detailed</option>
              <option value="conversational">Conversational</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Auto-offer help */}
        <div className="mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">Auto-offer help</h3>
              <p className="text-gray-500 text-sm">
                AI pops up suggestions automatically when user lands on a page.
              </p>
            </div>
            <button
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${autoOfferHelp ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setAutoOfferHelp(!autoOfferHelp)}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${autoOfferHelp ? 'translate-x-6' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* User-initiated only */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-sm font-medium text-gray-700">User-initiated only</h3>
              <p className="text-gray-500 text-sm">
                AI only responds when clicked or messaged.
              </p>
            </div>
            <button
              className={`w-12 h-6 rounded-full p-1 transition-colors duration-300 ease-in-out focus:outline-none ${userInitiatedOnly ? 'bg-blue-500' : 'bg-gray-300'}`}
              onClick={() => setUserInitiatedOnly(!userInitiatedOnly)}
            >
              <span
                className={`block w-4 h-4 bg-white rounded-full transform transition-transform duration-300 ease-in-out ${userInitiatedOnly ? 'translate-x-6' : ''}`}
              />
            </button>
          </div>
        </div>

        <div className='flex justify-center'>
          <Button
            onClick={onSubmit}
            className="w-[45%] text-white mx-auto font-medium py-2 bg-gradient-to-r mt-2 from-blue-600 to-blue-200 hover:from-blue-600 hover:to-blue-300"
          >
            Next
          </Button>
        </div>
      </div>
    </>
  );
}

function CampaignSetupForm({ onSubmit }) {
  const [promoterActionType, setPromoterActionType] = useState('SMS');
  const [leadsActionType, setLeadsActionType] = useState('SMS');
  return (
    <>
      <div className="p-6 max-w-3xl flex flex-col ">
        <h1 className="text-xl font-semibold text-gray-800">Create New Campaign</h1>
        <p className="text-gray-500 text-sm mb-6">Create a new referral campaign in just few steps.</p>

        {/* Campaign Name */}
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Campaign Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="e.g., Summer Referral Special"
          />
        </div>

        {/* Promoter Settings */}
        <div className="mb-8">
          <h2 className="text-gray-700 font-medium mb-4">Promoter Settings</h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-2">
                Reward Type<span className="text-red-500">*</span>
              </label>
              <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-md text-blue-600 text-center">
                Points
                <div className="text-xs text-blue-500">(1:1 is equivalent to 10 points)</div>
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-2">
                Reward Value<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., 200 points"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Promoter Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="e.g., Hey! Share this with your friends and get $20 for each successful signup!"
            ></textarea>
          </div>
        </div>

        {/* Follow-Up Strategy Section for Promoters */}
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium mb-2">
              Follow-Up Strategy<span className="text-red-500">*</span>
            </h3>

            <div className="flex items-center justify-center mb-4">
              <div className="text-center px-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1 border border-green-200">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 2L2 22M22 22L2 2"></path></svg>
                </div>
                <span className="text-xs text-gray-600">SMS</span>
              </div>

              <div className="h-px bg-gray-300 flex-1"></div>

              <div className="text-center px-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1 border border-blue-200">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className="text-xs text-gray-600">Wait 3 days</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Action Type</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="promoterActionType"
                      value="Email"
                      checked={promoterActionType === 'Email'}
                      onChange={() => setPromoterActionType('Email')}
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="promoterActionType"
                      value="SMS"
                      checked={promoterActionType === 'SMS'}
                      onChange={() => setPromoterActionType('SMS')}
                    />
                    <span className="ml-2">SMS</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="promoterActionType"
                      value="Wait Duration"
                      checked={promoterActionType === 'Wait Duration'}
                      onChange={() => setPromoterActionType('Wait Duration')}
                    />
                    <span className="ml-2">Wait Duration</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Phone Number</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                  <option>Select</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Follow-Up Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="2"
                  placeholder="Enter message..."
                ></textarea>
              </div>

              <button className="w-full text-white font-medium py-2 bg-gradient-to-r mt-2 rounded-lg from-blue-600 to-blue-200 flex items-center justify-center gap-1">
                <Plus size={16} />
                <span>Add Action</span>
              </button>
            </div>
          </div>
        </div>

        {/* Leads Settings */}
        <div className="mb-8">
          <h2 className="text-gray-700 font-medium mb-4">Leads Settings</h2>

          <div className="flex gap-4 mb-4">
            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-2">
                Reward Type<span className="text-red-500">*</span>
              </label>
              <div className="bg-blue-50 border border-blue-100 px-3 py-2 rounded-md text-blue-600 text-center">
                Discount
              </div>
            </div>

            <div className="w-1/2">
              <label className="block text-gray-700 text-sm mb-2">
                Reward Value<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                placeholder="e.g., 20%"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2">
              Referred Message<span className="text-red-500">*</span>
            </label>
            <textarea
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              rows="3"
              placeholder="e.g., You've been invited! Sign up now and get 15% off your first order."
            ></textarea>
          </div>

          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <label className="text-gray-700 text-sm">Form Fields</label>
              <svg className="text-gray-400" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
            </div>
            <div className="flex gap-4">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" defaultChecked={true} />
                <span className="ml-2 text-sm">Full Name</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" defaultChecked={true} />
                <span className="ml-2 text-sm">Email Address</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2 text-sm">Phone Number</span>
              </label>
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" defaultChecked={true} />
                <span className="ml-2 text-sm">Agree</span>
              </label>
            </div>
          </div>
        </div>

        {/* Follow-Up Strategy Section for Leads */}
        <div className="bg-blue-50 p-4 rounded-lg mb-8">
          <div className="mb-4">
            <h3 className="text-gray-700 font-medium mb-2">
              Follow-Up Strategy<span className="text-red-500">*</span>
            </h3>

            <div className="flex items-center justify-center mb-4">
              <div className="text-center px-4">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-1 border border-green-200">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-green-500"><path d="M22 2L2 22M22 22L2 2"></path></svg>
                </div>
                <span className="text-xs text-gray-600">SMS</span>
              </div>

              <div className="h-px bg-gray-300 flex-1"></div>

              <div className="text-center px-4">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-1 border border-blue-200">
                  <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-blue-500"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                </div>
                <span className="text-xs text-gray-600">Wait 3 days</span>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Action Type</label>
                <div className="flex gap-4">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="leadsActionType"
                      value="Email"
                      checked={leadsActionType === 'Email'}
                      onChange={() => setLeadsActionType('Email')}
                    />
                    <span className="ml-2">Email</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="leadsActionType"
                      value="SMS"
                      checked={leadsActionType === 'SMS'}
                      onChange={() => setLeadsActionType('SMS')}
                    />
                    <span className="ml-2">SMS</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      className="form-radio"
                      name="leadsActionType"
                      value="Wait Duration"
                      checked={leadsActionType === 'Wait Duration'}
                      onChange={() => setLeadsActionType('Wait Duration')}
                    />
                    <span className="ml-2">Wait Duration</span>
                  </label>
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Phone Number</label>
                <select className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white">
                  <option>Select</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm mb-2">Follow-Up Message</label>
                <textarea
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  rows="2"
                  placeholder="Enter message..."
                ></textarea>
              </div>

              <button className="w-full text-white font-medium  bg-gradient-to-r mt-2 from-blue-600 to-blue-200 rounded-md py-2 flex items-center justify-center gap-1">
                <Plus size={16} />
                <span>Add Action</span>
              </button>
            </div>
          </div>
        </div>

        {/* Launch Button */}
        <button onClick={onSubmit} className=" w-[100%] rounded-lg flex justify-center items-center text-white font-medium py-2 bg-gradient-to-r mt-2 from-blue-600 to-blue-200">
          Launch
        </button>
      </div>
    </>
  );
}

// Add this new component for the tour popup
function TourPopup({ step, onNext, onPrev, onClose }) {
  const { target, title, content, position } = step;
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  useEffect(() => {
    // Find the target element and calculate position
    const targetElement = document.getElementById(target);
    if (targetElement) {
      const rect = targetElement.getBoundingClientRect();
      setPopupPosition({
        top: rect.top,
        left: rect.right + 10 // Position 10px to the right of the menu item
      });
    }
  }, [target]);

  return (
    <div className="fixed inset-0 z-50">
      {/* Semi-transparent gray overlay */}
      <div className="absolute inset-0 bg-gray-500/70"></div>

      {/* Highlight only the active menu item */}
      {target && (
        <div
          className="absolute z-20"
          style={{
            position: 'absolute',
            left: document.getElementById(target)?.getBoundingClientRect().left || 0,
            top: document.getElementById(target)?.getBoundingClientRect().top || 0,
            width: document.getElementById(target)?.offsetWidth || 0,
            height: document.getElementById(target)?.offsetHeight || 0,
            backgroundColor: 'white',
            display: 'flex',
            alignItems: 'center',
            padding: '0 1rem',
            gap: '0.5rem'
          }}
        >
          {/* Clone the content of the target element */}
          {document.getElementById(target)?.innerHTML && (
            <div className='flex gap-3' dangerouslySetInnerHTML={{ __html: document.getElementById(target).innerHTML }} />
          )}
        </div>
      )}

      {/* Tour popup */}
      <div
        className="absolute z-50 bg-white rounded-lg shadow-lg p-4 max-w-xs border border-blue-200"
        style={{
          top: `${popupPosition.top}px`,
          left: `${popupPosition.left}px`,
          transform: 'translateY(-25%)'
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Content */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{content}</p>
          
          {/* Navigation buttons */}
          <div className="flex justify-between items-center">
            {onPrev && (
              <button
                onClick={onPrev}
                className="flex items-center text-gray-600 hover:text-gray-800"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Previous
              </button>
            )}
            <button
              onClick={onNext}
              className="w-[50%] h-[15%] text-white font-medium py-2 bg-gradient-to-r mt-2 from-blue-600 to-blue-200 flex justify-center items-center rounded-lg"

            >
              {onPrev ? 'Next' : 'Got it'}
              {onPrev && <ChevronRight className="h-4 w-4 ml-1" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// If using React-Joyride, add these options to your tour configuration
const tourOptions = {
  overlayColor: 'rgba(0, 0, 0, 0.5)',
  spotlightPadding: 0,
  styles: {
    options: {
      zIndex: 10000,
      overlayColor: 'rgba(0, 0, 0, 0.5)',
      spotlightPadding: 0
    },
    tooltip: {
      zIndex: 10001
    },
    spotlight: {
      zIndex: 10002
    }
  }
};
