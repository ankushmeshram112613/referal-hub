import { useState } from 'react';
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
  HelpCircle,
  Layout,
  Users,
  UserPlus,
  FileText,
  CreditCard,
  MessagesSquare,
  Bot
} from 'lucide-react';

export default function platformSetup() {
  const [selectedTab, setSelectedTab] = useState('platformSetup');

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Sidebar */}
      <div className="w-48 bg-slate-50 border-r border-slate-200 flex flex-col">
        {/* <div className="p-4 font-medium text-blue-600 flex items-center gap-2 border-b border-slate-200">
          <Settings className="w-5 h-5" />
          <span>Platform Setup</span>
        </div> */}

        <div className="flex-1">
          <SidebarItem icon={<Settings  className="w-5 h-5" />} label="Platform Setup" isActive={true} />
          <SidebarItem icon={<Bot className="w-5 h-5" />} label="AI Agent" />
          <SidebarItem icon={<Layout className="w-5 h-5" />} label="Dashboard" />
          <SidebarItem icon={<MessagesSquare className="w-5 h-5" />} label="Campaign" />
          <SidebarItem icon={<UserPlus className="w-5 h-5" />} label="Promoters" />
          <SidebarItem icon={<Users className="w-5 h-5" />} label="Leads" />
          <SidebarItem icon={<CreditCard className="w-5 h-5" />} label="Payouts" />
        </div>

        <div className="mt-auto border-t border-slate-200">
          <SidebarItem icon={<Settings className="w-5 h-5" />} label="Settings" />
          <SidebarItem icon={<HelpCircle className="w-5 h-5" />} label="Help" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <h1 className="text-xl font-semibold text-slate-800">Platform Setup</h1>
          <div className="flex items-center gap-3">
            <button className="text-blue-600">
              <FileText className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-slate-800 flex items-center justify-center text-white text-xs">KS</div>
              <div className="text-sm">
                <div className="font-medium">Kadin Stanton</div>
                <div className="text-slate-500 text-xs">kadinstanton@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex gap-8">
            {/* Left Side - Onboarding Steps */}
            <div className="w-1/3">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-blue-600 mb-2">Get Started with ReferralHub</h2>
                <p className="text-slate-600 text-sm">
                  To get started with better referrals & rewards, complete your account setup in a few easy steps.
                </p>
              </div>

              <div className="h-px bg-slate-200 my-6"></div>

              <div className="space-y-6">
                <OnboardingStep
                  title="Set Up Business Profile"
                  status="Not Started"
                />
                <OnboardingStep
                  title="Sync Your Customer Data"
                  status="Not Started"
                />
                <OnboardingStep
                  title="Set Up AI Agent Rules"
                  status="Not Started"
                />
                <OnboardingStep
                  title="Set Up First Campaign"
                  status="Not Started"
                />
              </div>
            </div>

            {/* Right Side - Business Info Form */}
            <div className="w-2/3">
              <div className="mb-6">
                <h2 className="text-xl font-medium text-slate-800">Build Your Business Identity</h2>
                <p className="text-slate-600 text-sm">
                  Help us tailor the referral experience by adding key details about your business
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Business Logo</div>
                  <div className="w-2/3">
                    <button className="px-4 py-2 border border-slate-200 rounded-md text-slate-600 text-sm hover:bg-slate-50">
                      Choose Image
                    </button>
                  </div>
                </div>

                <div className="flex items-start justify-between">
                  <div className="w-1/3 font-medium text-slate-700 pt-3">Business Description</div>
                  <div className="w-2/3">
                    <textarea
                      className="w-full px-3 py-2 border border-slate-200 rounded-md text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter business description..."
                      rows={4}
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Business Name</div>
                  <div className="w-2/3">
                    <Input placeholder="Enter business name" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Business Email</div>
                  <div className="w-2/3">
                    <Input placeholder="e.g., robert.fox@myemail.com" />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Business Phone No.</div>
                  <div className="w-2/3">
                    <Input placeholder="Enter phone no." />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Industry</div>
                  <div className="w-2/3">
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
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Services</div>
                  <div className="w-2/3">
                    <Input placeholder="Enter services..." />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Products</div>
                  <div className="w-2/3">
                    <Input placeholder="Enter products..." />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Company Size <span className="text-slate-400 text-sm">(Optional)</span></div>
                  <div className="w-2/3">
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

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">City</div>
                  <div className="w-2/3">
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
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">State</div>
                  <div className="w-2/3">
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

                <div className="flex items-center justify-between">
                  <div className="w-1/3 font-medium text-slate-700">Zip Code</div>
                  <div className="w-2/3">
                    <Input placeholder="Enter zip code" />
                  </div>
                </div>

                <div className="flex justify-end mt-6">
                  <Button className="bg-blue-500 hover:bg-blue-600 text-white px-10">
                    Next
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function SidebarItem({ icon, label, isActive = false }) {
  return (
    <div className={`px-4 py-3 flex items-center gap-2 text-sm font-medium cursor-pointer ${isActive ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-100'
      }`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function OnboardingStep({ title, status }) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full border-2 border-slate-200 flex-shrink-0 mt-1"></div>
      <div>
        <h3 className="font-medium text-slate-800">{title}</h3>
        <p className="text-sm text-slate-500">{status}</p>
      </div>
    </div>
  );
}