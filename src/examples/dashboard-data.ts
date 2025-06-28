// KPI Metrics Data
export const kpiMetrics = [
  {
    icon: 'Clock',
    value: '2.4 min',
    label: 'Average Response Time',
    change: '-12%',
    changeType: 'negative' as const,
    iconColor: 'orange'
  },
  {
    icon: 'MessageSquare',
    value: '147',
    label: 'Open Tickets',
    change: '+8%',
    changeType: 'positive' as const,
    iconColor: 'yellow'
  },
  {
    icon: 'CheckCircle',
    value: '892',
    label: 'Resolved Tickets',
    change: '+15%',
    changeType: 'positive' as const,
    iconColor: 'green'
  },
  {
    icon: 'BarChart3',
    value: '92.2%',
    label: 'Resolution Rate',
    change: '+2.1%',
    changeType: 'positive' as const,
    iconColor: 'blue'
  },
  {
    icon: 'Timer',
    value: '4.2 hrs',
    label: 'Average Resolution Time',
    change: '-5%',
    changeType: 'negative' as const,
    iconColor: 'purple'
  },
  {
    icon: 'AlertTriangle',
    value: '23',
    label: 'Escalated Tickets',
    change: '+2.1%',
    changeType: 'positive' as const,
    iconColor: 'red'
  },
  {
    icon: 'ArrowRightLeft',
    value: '12',
    label: 'Reassigned Tickets',
    change: '-18%',
    changeType: 'negative' as const,
    iconColor: 'indigo'
  }
];

// Response Time Trend Data
export const responseTimeData = [
  { day: 'Mon', time: 2.0 },
  { day: 'Tue', time: 1.95 },
  { day: 'Wed', time: 1.9 },
  { day: 'Thu', time: 1.85 },
  { day: 'Fri', time: 1.8 },
  { day: 'Sat', time: 1.75 }
];

// Resolved Tickets by Agent Data
export const resolvedTicketsData = [
  { name: 'Sarah J.', tickets: 45 },
  { name: 'John S.', tickets: 38 },
  { name: 'David W.', tickets: 42 },
  { name: 'Michael L.', tickets: 35 },
  { name: 'Emily C.', tickets: 40 }
];

// Status Distribution Data
export const statusDistributionData = [
  { name: 'Resolved', value: 45, color: '#10B981' }, // Emerald 500
  { name: 'Paid', value: 25, color: '#3B82F6' },     // Blue 500
  { name: 'Escalated', value: 15, color: '#EF4444' }, // Red 500
  { name: 'Warning', value: 10, color: '#F97316' },   // Orange 500
  { name: 'Pending', value: 5, color: '#6B7280' },    // Gray 500
];

// Lifecycle Flow Data
export const lifecycleFlowData = [
  { label: 'New Tickets', value: 100 },
  { label: 'Open', value: 80 },
  { label: 'In Progress', value: 65 },
  { label: 'Escalated', value: 20 },
  { label: 'Resolved', value: 95 },
  { label: 'Reassigned', value: 15 },
  { label: 'Admin Review', value: 5 },
];

// Agents Data
export const agentsData = [
  {
    id: 1,
    name: 'Sarah Johnson',
    ticketsHandled: 45,
    avgResponseTime: '1.8 min',
    resolutionRate: 96.2,
    escalated: 2,
    reassigned: 1,
    performance: 'Good'
  },
  {
    id: 2,
    name: 'John Smith',
    ticketsHandled: 38,
    avgResponseTime: '2.1 min',
    resolutionRate: 94.1,
    escalated: 3,
    reassigned: 2,
    performance: 'Good'
  },
  {
    id: 3,
    name: 'David Wilson',
    ticketsHandled: 42,
    avgResponseTime: '2.4 min',
    resolutionRate: 92.8,
    escalated: 4,
    reassigned: 1,
    performance: 'Average'
  },
  {
    id: 4,
    name: 'Michael Lee',
    ticketsHandled: 35,
    avgResponseTime: '3.2 min',
    resolutionRate: 88.5,
    escalated: 0,
    reassigned: 4,
    performance: 'Poor'
  },
  {
    id: 5,
    name: 'Emily Chen',
    ticketsHandled: 40,
    avgResponseTime: '2.0 min',
    resolutionRate: 95.5,
    escalated: 2,
    reassigned: 0,
    performance: 'Good'
  }
];

// Filter Options
export const filterOptions = {
  timePeriods: ['Last 7 Days', 'Last 30 Days', 'Last 3 Months'],
  agents: ['All Agents', 'Sarah Johnson', 'John Smith', 'David Wilson', 'Michael Lee', 'Emily Chen'],
  status: ['All Status', 'Open', 'In Progress', 'Resolved', 'Escalated'],
  platforms: ['All Platforms', 'Web', 'Mobile', 'Email', 'Chat']
};