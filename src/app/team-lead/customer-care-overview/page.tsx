'use client';

import React, { useState } from 'react';
import {
  kpiMetrics,
  responseTimeData,
  resolvedTicketsData,
  statusDistributionData,
  lifecycleFlowData,
  agentsData,
} from '../../../examples/dashboard-data'

// Lucide Icons
import {
  Clock as ClockIcon,
  MessageSquare as MessageSquareIcon,
  CheckCircle as CheckCircleIcon,
  BarChart3 as BarChart3Icon,
  Timer as TimerIcon,
  AlertTriangle as AlertTriangleIcon,
  ArrowRightLeft as ArrowRightLeftIcon,
  ChevronDown,
  Search,
  Filter,
  X
} from 'lucide-react';

// Icon mapping
const iconMap = {
  Clock: ClockIcon,
  MessageSquare: MessageSquareIcon,
  CheckCircle: CheckCircleIcon,
  BarChart3: BarChart3Icon,
  Timer: TimerIcon,
  AlertTriangle: AlertTriangleIcon,
  ArrowRightLeft: ArrowRightLeftIcon
};

// Basic UI Components
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>
    {children}
  </div>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`}>
    {children}
  </h3>
);

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'default' | 'ghost' | 'outline';
  size?: 'default' | 'sm' | 'lg';
  className?: string;
}

const Button = ({ children, variant = 'default', size = 'default', className = '', ...props }: ButtonProps) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
  const variants = {
    default: 'bg-yellow-500 text-white hover:bg-yellow-600',
    ghost: 'hover:bg-gray-100 hover:text-gray-900 text-gray-600',
    outline: 'border border-gray-300 hover:bg-gray-50 hover:text-gray-900'
  };
  const sizes = {
    default: 'h-10 py-2 px-4',
    sm: 'h-9 px-3 text-sm',
    lg: 'h-11 px-8'
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

interface SelectProps {
  children: React.ReactNode;
  className?: string;
  defaultValue?: string;
}

const Select = ({ children, className = '', defaultValue }: SelectProps) => (
  <div className={`relative ${className}`}>
    <select 
      className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 appearance-none pr-10"
      defaultValue={defaultValue}
    >
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
  </div>
);

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className = '', ...props }: InputProps) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-500 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: string; className?: string }) => {
  const variants = {
    default: 'bg-primary text-primary-foreground',
    good: 'bg-green-100 text-green-800',
    average: 'bg-yellow-100 text-yellow-800',
    poor: 'bg-red-100 text-red-800'
  };
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant as keyof typeof variants]} ${className}`}>
      {children}
    </span>
  );
};

// KPI Card Component
interface KpiCardProps {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
  change: string;
  changeType: 'positive' | 'negative';
  iconColor: string;
}

const KpiCard = ({ icon: Icon, value, label, change, changeType, iconColor }: KpiCardProps) => {
  const iconColorClasses = {
    orange: 'text-orange-500 bg-orange-50',
    yellow: 'text-yellow-500 bg-yellow-50',
    green: 'text-green-500 bg-green-50',
    blue: 'text-blue-500 bg-blue-50',
    purple: 'text-purple-500 bg-purple-50',
    red: 'text-red-500 bg-red-50',
    indigo: 'text-indigo-500 bg-indigo-50'
  };

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${iconColorClasses[iconColor as keyof typeof iconColorClasses]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className={`text-xs font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
          {change}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
      </div>
    </Card>
  );
};

// Simple Line Chart Component (Average Response Time Trend)
const SimpleLineChart = () => {
  const points = responseTimeData.map((item, index) => ({
    x: 40 + (index * 60),
    y: 200 - ((item.time / 2.6) * 160)
  }));

  const pathData = points.map((point, index) => 
    index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`
  ).join(' ');

  return (
    <div className="h-64 relative">
      <svg width="100%" height="100%" className="absolute inset-0">
        {/* Grid lines */}
        {[0, 0.65, 1.3, 1.95, 2.6].map((value, index) => (
          <line
            key={index}
            x1="40"
            y1={200 - ((value / 2.6) * 160)}
            x2="400"
            y2={200 - ((value / 2.6) * 160)}
            stroke="#f3f4f6"
            strokeWidth="1"
          />
        ))}
        
        {/* Line chart */}
        <path
          d={pathData}
          fill="none"
          stroke="#f97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Data points */}
        {points.map((point, index) => (
          <circle
            key={index}
            cx={point.x}
            cy={point.y}
            r="4"
            fill="#f97316"
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
      
      {/* Y-axis labels */}
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
        <span>2.6</span>
        <span>1.95</span>
        <span>1.3</span>
        <span>0.65</span>
        <span>0</span>
      </div>
      
      {/* X-axis labels */}
      <div className="absolute bottom-0 w-full flex justify-between px-10 text-xs text-gray-600">
        {responseTimeData.map((item, index) => (
          <span key={index}>{item.day}</span>
        ))}
      </div>
    </div>
  );
};

// Simple Bar Chart Component (Resolved Tickets by Agent)
const SimpleBarChart = () => (
  <div className="h-64 relative">
    <div className="flex items-end justify-between h-full px-10 pb-8">
      {resolvedTicketsData.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          <div className="relative h-40 w-16 flex items-end">
            <div 
              className="w-full bg-yellow-500 rounded-t-sm"
              style={{ height: `${(item.tickets / 50) * 100}%` }}
            />
          </div>
          <span className="text-xs text-gray-600 mt-2">{item.name}</span>
        </div>
      ))}
    </div>
    
    {/* Y-axis labels */}
    <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
      <span>50</span>
      <span>40</span>
      <span>30</span>
      <span>20</span>
      <span>10</span>
      <span>0</span>
    </div>
  </div>
);

// Simple Pie Chart Component
const SimplePieChart = () => (
  <div className="h-64 flex items-center justify-center">
    <div className="w-48 h-48 rounded-full relative bg-gradient-to-r from-green-500 via-blue-500 via-yellow-500 via-yellow-500 to-red-500">
      <div className="w-24 h-24 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  </div>
);

// Ticket Lifecycle Flow Component
const TicketLifecycleFlow = () => {
  return (
    <Card className="shadow-sm border border-gray-200 bg-white">
      <CardHeader className="pb-4">
        <CardTitle className="text-lg font-semibold text-gray-900">Ticket Lifecycle Flow</CardTitle>
        <p className="text-sm text-gray-600">From Open → Resolved or Escalated</p>
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between">
          {lifecycleFlowData.map((step, index) => (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center text-center min-w-0 flex-1">
                <div className="text-xs text-gray-600 mb-1 leading-tight">{step.label}</div>
                <div className="text-2xl font-bold text-gray-900">{step.value}</div>
              </div>
              {index < lifecycleFlowData.length - 1 && (
                <div className="flex items-center justify-center px-2">
                  <div className="w-6 h-0.5 bg-gray-300"></div>
                  <div className="w-0 h-0 border-l-4 border-l-gray-300 border-t-2 border-t-transparent border-b-2 border-b-transparent ml-1"></div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="mt-6 text-center">
          <p className="text-xs text-gray-500">Ticket Lifecycle Flow (Last 7 Days)</p>
        </div>
      </CardContent>
    </Card>
  );
};

// Agent Performance Table Component
const AgentPerformanceTable = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredAgents = agentsData.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getPerformanceBadge = (performance: string) => {
    const variant = performance.toLowerCase() as 'good' | 'average' | 'poor';
    return <Badge variant={variant}>{performance}</Badge>;
  };

  return (
    <Card className="shadow-sm border border-gray-200 bg-white">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-semibold text-gray-900">Agent Performance</CardTitle>
          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search agents..."
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-2 text-sm font-medium text-gray-600">Agent</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Tickets Handled</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Avg Response Time</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Resolution Rate</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Escalated</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Reassigned</th>
                <th className="text-left py-2 text-sm font-medium text-gray-600">Performance</th>
              </tr>
            </thead>
            <tbody>
              {filteredAgents.map((agent) => (
                <tr key={agent.id} className="border-b border-gray-100">
                  <td className="py-3 text-sm font-medium text-gray-900">{agent.name}</td>
                  <td className="py-3 text-sm text-gray-600">{agent.ticketsHandled}</td>
                  <td className="py-3 text-sm text-gray-600">{agent.avgResponseTime}</td>
                  <td className="py-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>{agent.resolutionRate}%</span>
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-green-500 rounded-full"
                          style={{ width: `${agent.resolutionRate}%` }}
                        />
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-sm text-gray-600">{agent.escalated}</td>
                  <td className="py-3 text-sm text-gray-600">{agent.reassigned}</td>
                  <td className="py-3">{getPerformanceBadge(agent.performance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

// Inbox Component
const InboxContent = () => (
  <div className="p-6">
    <div className="text-center py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">Inbox</h2>
      <p className="text-gray-600">Your inbox content would appear here</p>
    </div>
  </div>
);

// Customer Care Overview Component  
const CustomerCareContent = () => (
  <div className="p-6">
    {/* Page Title */}
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-gray-900">Customer Care Overview</h1>
      <p className="text-gray-600 mt-1">Real-time operational insights into support activities and performance</p>
    </div>

    {/* KPI Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-7 gap-4 mb-8">
      {kpiMetrics.map((kpi, index) => (
        <KpiCard
          key={index}
          icon={iconMap[kpi.icon as keyof typeof iconMap]}
          value={kpi.value}
          label={kpi.label}
          change={kpi.change}
          changeType={kpi.changeType}
          iconColor={kpi.iconColor}
        />
      ))}
    </div>

    {/* Filters */}
    <div className="flex flex-wrap items-center gap-4 mb-8">
      <div className="flex items-center gap-2">
        <Filter className="h-4 w-4 text-gray-500" />
        <span className="text-sm font-medium text-gray-700">Filters:</span>
      </div>
      <Select>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>Last 3 Months</option>
      </Select>
      <Select>
        <option>All Agents</option>
        {agentsData.map(agent => (
          <option key={agent.id}>{agent.name}</option>
        ))}
      </Select>
      <Select>
        <option>All Status</option>
        <option>Open</option>
        <option>In Progress</option>
        <option>Resolved</option>
        <option>Escalated</option>
      </Select>
      <Select>
        <option>All Platforms</option>
        <option>Web</option>
        <option>Mobile</option>
        <option>Email</option>
        <option>Chat</option>
      </Select>
      <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700">
        <X className="h-4 w-4 mr-2" />
        Clear Filters
      </Button>
    </div>

    {/* Charts Section - First Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Average Response Time Trend */}
      <Card className="shadow-sm border border-gray-200 bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Average Response Time Trend</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-xs text-gray-500">📊</span>
            <Select>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 3 Months</option>
            </Select>
          </div>
        </CardHeader>
        <CardContent>
          <SimpleLineChart />
        </CardContent>
      </Card>

      {/* Resolved Ticket by Agent */}
      <Card className="shadow-sm border border-gray-200 bg-white">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Resolved Ticket by Agent</CardTitle>
          <div className="flex items-center gap-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"

              />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-yellow-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-yellow-500" />
            </label>
            <span className="text-sm font-medium text-gray-900">Switch to Platform</span>
          </div>


        </CardHeader>
        <CardContent>
          <SimpleBarChart />
        </CardContent>
      </Card>
    </div>

    {/* Charts Section - Second Row */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
      {/* Ticket Status Distribution */}
      <Card className="shadow-sm border border-gray-200 bg-white">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-gray-900">Ticket Status Distribution</CardTitle>
        </CardHeader>
        <CardContent>
          <SimplePieChart />
          <div className="mt-4 space-y-2">
            {statusDistributionData.map((status, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: status.color }}></div>
                  <span className="text-sm text-gray-700">{status.name}: {status.value}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ticket Lifecycle Flow */}
      <TicketLifecycleFlow />
    </div>

    {/* Agent Performance Table */}
    <AgentPerformanceTable />
  </div>
);

// Main Component
export default function CustomerCareOverview() {
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="min-h-screen bg-gray-50">
  {/* Header with Tab Navigation */}
  <header className="bg-white border-b border-gray-200 px-6 py-4">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-center">
        <div className="flex w-full max-w-5xl rounded-lg overflow-hidden shadow-sm">
          {/* Inbox Tab */}
          <button
            onClick={() => setActiveTab('inbox')}
            className={`w-1/2 px-6 py-4 text-center font-medium text-sm transition-colors ${
              activeTab === 'inbox'
                ? 'bg-white text-gray-900'
                : 'bg-gray-100 text-gray-500 hover:text-gray-800'
            }`}
          >
            Inbox
          </button>

          {/* Customer Care Overview Tab */}
          <button
            onClick={() => setActiveTab('overview')}
            className={`w-1/2 px-6 py-4 text-center font-medium text-sm transition-colors ${
              activeTab === 'overview'
                ? 'bg-yellow-500 text-white'
                : 'bg-gray-100 text-gray-500 hover:text-gray-800'
            }`}
          >
            Customer Care Overview
          </button>
        </div>
      </div>
    </div>
  </header>

      
      {/* Content */}
      <main>
        {activeTab === 'inbox' && <InboxContent />}
        {activeTab === 'overview' && <CustomerCareContent />}
      </main>
    </div>
  );
}