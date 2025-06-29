'use client';

import React, { useState } from 'react';

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
  X,
  MoreHorizontal
} from 'lucide-react';

import {
  kpiMetrics,
  responseTimeData,
  resolvedTicketsData,
  statusDistributionData,
  agentsData,

} from '../../../examples/dashboard-data'

// Data


// Icon mapping
const iconMap = {
  Clock: ClockIcon, MessageSquare: MessageSquareIcon, CheckCircle: CheckCircleIcon,
  BarChart3: BarChart3Icon, Timer: TimerIcon, AlertTriangle: AlertTriangleIcon, ArrowRightLeft: ArrowRightLeftIcon
};

// UI Components
const Card = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`bg-white rounded-lg border border-gray-200 shadow-sm ${className}`}>{children}</div>
);

const CardHeader = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 ${className}`}>{children}</div>
);

const CardContent = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`p-6 pt-0 ${className}`}>{children}</div>
);

const CardTitle = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);



const Select = ({ children, className = '', defaultValue }: { children: React.ReactNode; className?: string; defaultValue?: string }) => (
  <div className={`relative ${className}`}>
    <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 appearance-none pr-10" defaultValue={defaultValue}>
      {children}
    </select>
    <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 opacity-50 pointer-events-none" />
  </div>
);

const Input = ({ className = '', ...props }: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) => (
  <input className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 ${className}`} {...props} />
);

const Badge = ({ children, variant = 'default', className = '' }: { children: React.ReactNode; variant?: string; className?: string }) => {
  const variants = {
    default: 'bg-primary text-primary-foreground', 
    good: 'bg-green-100 text-green-800',
    average: 'bg-yellow-100 text-yellow-800', 
    poor: 'bg-red-100 text-red-800'
  };
  return <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant as keyof typeof variants]} ${className}`}>{children}</span>;
};

// KPI Card Component
const KpiCard = ({ icon: Icon, value, label, change, changeType, iconColor }: {
  icon: React.ComponentType<{ className?: string }>; value: string; label: string; change: string;
  changeType: 'positive' | 'negative'; iconColor: string;
}) => {
  const iconColors = {
    orange: 'text-orange-500 bg-orange-50', yellow: 'text-yellow-500 bg-yellow-50', green: 'text-green-500 bg-green-50',
    blue: 'text-blue-500 bg-blue-50', purple: 'text-purple-500 bg-purple-50', red: 'text-red-500 bg-red-50', indigo: 'text-indigo-500 bg-indigo-50'
  };

  return (
    <Card className="p-4">
      <div className="flex items-start justify-between">
        <div className={`p-2 rounded-lg ${iconColors[iconColor as keyof typeof iconColors]}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div className={`text-xs font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{change}</div>
      </div>
      <div className="mt-4">
        <div className="text-2xl font-bold text-gray-900">{value}</div>
        <div className="text-sm text-gray-600 mt-1">{label}</div>
      </div>
    </Card>
  );
};

// Line Chart Component
const LineChart = () => {
  const points = responseTimeData.map((item, index) => ({ x: 40 + (index * 60), y: 200 - ((item.time / 2.6) * 160) }));
  const pathData = points.map((point, index) => index === 0 ? `M ${point.x} ${point.y}` : `L ${point.x} ${point.y}`).join(' ');

  return (
    <div className="h-64 relative">
      <svg width="100%" height="100%" className="absolute inset-0">
        {[0, 0.65, 1.3, 1.95, 2.6].map((value, index) => (
          <line key={index} x1="40" y1={200 - ((value / 2.6) * 160)} x2="400" y2={200 - ((value / 2.6) * 160)} stroke="#f3f4f6" strokeWidth="1" />
        ))}
        <path d={pathData} fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        {points.map((point, index) => (
          <circle key={index} cx={point.x} cy={point.y} r="4" fill="#f97316" stroke="white" strokeWidth="2" />
        ))}
      </svg>
      <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4">
        <span>2.6</span><span>1.95</span><span>1.3</span><span>0.65</span><span>0</span>
      </div>
      <div className="absolute bottom-0 w-full flex justify-between px-10 text-xs text-gray-600">
        {responseTimeData.map((item, index) => <span key={index}>{item.day}</span>)}
      </div>
    </div>
  );
};

// Bar Chart Component
const BarChart = () => {
  return (
    <div className="w-full overflow-x-auto">
      <div className="relative h-64 min-w-[600px]">
        <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500 py-4 pl-2">
          <span>50</span><span>40</span><span>30</span><span>20</span><span>10</span><span>0</span>
        </div>

        <div className="flex items-end justify-around h-full pl-10 pr-6 pb-8 ml-6">
          {resolvedTicketsData.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative h-40 w-10 flex items-end">
                <div
                  className="w-full bg-yellow-500 rounded-t-sm"
                  style={{ height: `${(item.tickets / 50) * 100}%` }}
                />
              </div>
              <span className="text-xs text-gray-600 mt-2 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


// Updated Ticket Status Chart Component - EXACT MATCH TO REFERENCE
const TicketStatusChart = () => {
  const total = statusDistributionData.reduce((sum, item) => sum + item.value, 0);
  let currentAngle = 0;
  
  const segments = statusDistributionData.map((item) => {
    const percentage = (item.value / total) * 100;
    const angle = (item.value / total) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    
    return {
      ...item,
      percentage,
      startAngle,
      angle
    };
  });

  const centerX = 120;
  const centerY = 120;
  const radius = 80;

  const createPath = (startAngle: number, endAngle: number) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", centerX, centerY,
      "L", start.x, start.y,
      "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y,
      "Z"
    ].join(" ");
  };

  function polarToCartesian(centerX: number, centerY: number, radius: number, angleInDegrees: number) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  return (
    <div className="h-64 relative flex items-center justify-center">
      <svg width="240" height="240" className="absolute">
        {segments.map((segment, index) => (
          <path
            key={index}
            d={createPath(segment.startAngle, segment.startAngle + segment.angle)}
            fill={segment.color}
            stroke="white"
            strokeWidth="2"
          />
        ))}
      </svg>
      
      {/* Labels positioned exactly like reference */}
      <div className="absolute" style={{ left: '30px', top: '20px' }}>
        <span className="text-sm font-medium text-green-600">Resolved: 45%</span>
      </div>
      <div className="absolute" style={{ right: '30px', top: '60px' }}>
        <span className="text-sm font-medium text-blue-600">Paid: 25%</span>
      </div>
      <div className="absolute" style={{ right: '30px', bottom: '60px' }}>
        <span className="text-sm font-medium text-red-600">Escalated: 15%</span>
      </div>
      <div className="absolute" style={{ left: '30px', bottom: '20px' }}>
        <span className="text-sm font-medium text-yellow-600">Warning: 10%</span>
      </div>
      <div className="absolute" style={{ left: '90px', bottom: '5px' }}>
        <span className="text-sm font-medium text-gray-600">Pending: 5%</span>
      </div>
    </div>
  );
};

// New Ticket Lifecycle Flow Component - EXACT MATCH TO REFERENCE
const TicketLifecycleFlow = () => {
  const stages = [
    { label: 'New', sub: 'Tickets', count: 100 },
    { label: 'Open', count: 80 },
    { label: 'In', sub: 'Progress', count: 65 },
    { label: 'Escala', sub: 'ted', count: 20 },
    { label: 'Resolved', count: 55 },
    { label: 'Reassig', sub: 'ned', count: 15 },
    { label: 'Admin', sub: 'Review', count: 5 },
  ];

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <div className="overflow-x-auto">
        <div className="flex items-center justify-start space-x-6 min-w-[600px] sm:min-w-full">
          {stages.map((stage, i) => (
            <div key={i} className="flex items-center space-x-4">
              <div className="flex flex-col items-center text-center min-w-[60px]">
                <div className="bg-gray-100 rounded-lg px-3 py-2">
                  <div className="text-xs text-gray-600">{stage.label}</div>
                  {stage.sub && <div className="text-xs text-gray-600">{stage.sub}</div>}
                </div>
                <div className="text-sm font-semibold mt-2">{stage.count}</div>
              </div>
              {i !== stages.length - 1 && (
                <div className="h-px bg-gray-300 flex-1 hidden sm:block w-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>

      <p className="text-xs text-gray-500 text-center mt-6">Ticket Lifecycle Flow (Last 7 Days)</p>
    </div>
  );
};


// Updated Agent Performance Component - EXACT MATCH TO REFERENCE
const AgentPerformance = () => {
  const [searchTerm, ] = useState('');
  
  const filteredAgents = agentsData.filter(agent =>
    agent.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getResolutionRateColor = (rate: number) => {
    if (rate >= 95) return 'bg-green-500';
    if (rate >= 90) return 'bg-yellow-500';
    return 'bg-red-500';
  };

  const getPerformanceBadge = (performance: string) => {
    const variants = {
      'Good': 'good',
      'Average': 'average',
      'Poor': 'poor'
    };
    return variants[performance as keyof typeof variants] || 'default';
  };

  const getEscalatedColor = (escalated: number) => {
    return escalated >= 5 ? 'text-red-600' : 'text-gray-900';
  };

  const getReassignedColor = (reassigned: number) => {
    return reassigned >= 4 ? 'text-red-600' : 'text-gray-900';
  };

  return (
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Agent</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Tickets Handled</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Avg Response Time</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Resolution Rate</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Escalated</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Reassigned</th>
            <th className="text-left py-3 px-4 text-sm font-medium text-gray-700">Performance</th>
            <th className="text-right py-3 px-4 text-sm font-medium text-gray-700"></th>
          </tr>
        </thead>
        <tbody>
          {filteredAgents.map((agent, index) => (
            <tr key={agent.id} className={index !== filteredAgents.length - 1 ? "border-b border-gray-100" : ""}>
              <td className="py-4 px-4 text-sm text-gray-900">{agent.name}</td>
              <td className="py-4 px-4 text-sm text-gray-900">{agent.ticketsHandled}</td>
              <td className="py-4 px-4 text-sm text-gray-900">{agent.avgResponseTime}</td>
              <td className="py-4 px-4">
                <span className="text-sm text-gray-900">{agent.resolutionRate}%</span>
                <span className={`inline-block w-2 h-2 rounded-full ml-2 ${getResolutionRateColor(agent.resolutionRate)}`}></span>
              </td>
              <td className={`py-4 px-4 text-sm ${getEscalatedColor(agent.escalated)}`}>{agent.escalated}</td>
              <td className={`py-4 px-4 text-sm ${getReassignedColor(agent.reassigned)}`}>{agent.reassigned}</td>
              <td className="py-4 px-4">
                <Badge variant={getPerformanceBadge(agent.performance)}>{agent.performance}</Badge>
              </td>
              <td className="py-4 px-4 text-right">
                <button className="text-gray-400 hover:text-gray-600">
                  <MoreHorizontal className="h-4 w-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Main Dashboard Component
export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
   const [activeTab, setActiveTab] = useState<'inbox' | 'overview'>('overview');


  return (
<div className="bg-white border-b border-gray-200 px-6 py-4">
  <div className="flex justify-center">
    <div className="flex w-full max-w-7xl">
      <button
        onClick={() => setActiveTab('inbox')}
        className={`flex-1 py-3 text-center text-sm font-medium rounded-none ${
          activeTab === 'inbox'
            ? 'bg-yellow-500 text-white'
            : 'text-gray-500 hover:text-gray-700 bg-gray-100'
        }`}
      >
        Inbox
      </button>
      <button
        onClick={() => setActiveTab('overview')}
        className={`flex-1 py-3 text-center text-sm font-medium rounded-none ${
          activeTab === 'overview'
            ? 'bg-yellow-500 text-white'
            : 'text-gray-500 hover:text-gray-700 bg-gray-100'
        }`}
      >
        Customer Care Overview
      </button>
    </div>
  </div>


      {/* Conditional Tab Content */}
      <div className="p-6 max-w-7xl mx-auto">
        {activeTab === 'inbox' && (
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">Inbox</h1>
            <p className="text-gray-600">Your inbox content will be shown here.</p>
          </div>
        )}

        {activeTab === 'overview' && (
          <div>
            {/* Title */}
            <div className="mb-8">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">Customer Care Overview</h1>
              <p className="text-gray-600">
                Real-time operational insights into support activities and performance
              </p>
            </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-7 gap-6 mb-8">
          {kpiMetrics.map((metric, index) => {
            const Icon = iconMap[metric.icon as keyof typeof iconMap];
            return (
              <KpiCard
                key={index}
                icon={Icon}
                value={metric.value}
                label={metric.label}
                change={metric.change}
                changeType={metric.changeType}
                iconColor={metric.iconColor}
              />
            );
          })}
        </div>

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Filters:</span>
            </div>
            <Select defaultValue="Last 7 Days">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 90 Days</option>
            </Select>
            <Select defaultValue="All Agents">
              <option>All Agents</option>
              <option>Top Performers</option>
              <option>Needs Improvement</option>
            </Select>
            <Select defaultValue="All Status">
              <option>All Status</option>
              <option>Open</option>
              <option>Resolved</option>
            </Select>
            <Select defaultValue="All Platforms">
              <option>All Platforms</option>
              <option>Email</option>
              <option>Chat</option>
            </Select>
          </div>
          <button className="text-gray-500 hover:text-gray-700 flex items-center space-x-1">
            <X className="h-4 w-4" />
            <span className="text-sm">Clear Filters</span>
          </button>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Average Response Time Trend */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle>Average Response Time Trend</CardTitle>
                <Select defaultValue="Last 7 Days">
                  <option>Last 7 Days</option>
                </Select>
              </div>
            </CardHeader>
            <CardContent>
              <LineChart />
            </CardContent>
          </Card>

          {/* Resolved Tickets by Agent */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between mb-4">
                <CardTitle>Resolved Tickets by Agent</CardTitle>
                <button className="text-sm text-gray-500 hover:text-gray-700">Switch to Platform</button>
              </div>
            </CardHeader>
            <CardContent>
              <BarChart />
            </CardContent>
          </Card>
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Ticket Status Distribution */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Status Distribution</CardTitle>
            </CardHeader>
            <CardContent>
              <TicketStatusChart />
            </CardContent>
          </Card>

          {/* Ticket Lifecycle Flow */}
          <Card>
            <CardHeader>
              <CardTitle>Ticket Lifecycle Flow</CardTitle>
              <p className="text-sm text-gray-500">From Open - Resolved or Escalated</p>
            </CardHeader>
            <CardContent>
              <TicketLifecycleFlow />
            </CardContent>
          </Card>
        </div>

        {/* Agent Performance */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-6">
              <CardTitle>Agent Performance</CardTitle>
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search agents..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-64"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <AgentPerformance />
          </CardContent>
        </Card>
          </div>
        )}
      </div>
    </div>
  );
}
