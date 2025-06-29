import { PayerProfile } from "@/components/payer/profile/profile";
import { CheckCircle, Clock4, Target, X } from "lucide-react";
import { PayerKPIMetrics } from "@/components/payer/profile/kpi-metrics";
import { PayerAttendanceAndHistory } from "@/components/payer/profile/attendance-and-history";
import { PayerSubmitShiftReport } from "@/components/payer/profile/submit-shift-report";

export type Tab = {
  name: string;
  Component: React.FC;
};

export const tabs: Tab[] = [
  {
    name: "profile",
    Component: PayerProfile,
  },
  {
    name: "KPI metrics",
    Component: PayerKPIMetrics,
  },
  {
    name: "attendance & history",
    Component: PayerAttendanceAndHistory,
  },
  {
    name: "shift report",
    Component: PayerSubmitShiftReport,
  },
];

// Extracted dashboard text and UI constants from the provided screenshot
// ------------------------------------------------------------
// Types
export interface Monetary {
  value: number;
  currency: string;
}

export interface PerformanceBox {
  title: string;
  value: number;
  subtitle?: string;
  icon: keyof typeof icons;
}

export interface DailyPerformance {
  day: string; // e.g. "Mon"
  value: number; // percentage value (0‑100)
  label: string; // qualitative label (Good, Bad, etc.)
}

export interface MetricBar {
  title: string;
  value: number; // percentage value (0‑100)
  label?: string;
}

export interface ProfileInfo {
  name: string;
  role: string;
  level: number;
  id: string;
  department: string;
  shift: string;
  bonusEligible: boolean;
  targetScore: {
    value: number;
    max: number;
  };
}

// Profile section
export const profileInfo: ProfileInfo = {
  name: "John Smith",
  role: "Payer",
  level: 3,
  id: "EMP001",
  department: "Trading Operations",
  shift: "Morning (8AM - 4PM)",
  bonusEligible: true,
  targetScore: {
    value: 85,
    max: 100,
  },
};

// KPI / Status cards
export const performanceBoxes: PerformanceBox[] = [
  {
    title: "Attendance",
    value: 42,
    subtitle: "Good Performance",
    icon: "attendance",
  },
  {
    title: "Punctuality",
    value: 45,
    subtitle: "Good Record",
    icon: "clock",
  },
  {
    title: "Discrepancies",
    value: 10,
    subtitle: "11.9% cancel rate",
    icon: "close",
  },
  {
    title: "Assessment in percentage",
    value: 96,
    subtitle: "Excellent Accuracy",
    icon: "check",
  },
];

// Weekly performance table
export const weeklyPerformance: DailyPerformance[] = [
  { day: "Mon", value: 45, label: "Average" },
  { day: "Tue", value: 38, label: "Bad" },
  { day: "Wed", value: 38, label: "Bad" },
  { day: "Thu", value: 51, label: "Good" },
  { day: "Fri", value: 39, label: "Bad" },
  { day: "Sat", value: 28, label: "Bad" },
  { day: "Sun", value: 0, label: "Very bad" },
];

// Progress bars under Performance Metrics
export const performanceMetrics: MetricBar[] = [
  { title: "Accuracy Rate", value: 96 },
  { title: "Target Achievement", value: 85 },
  { title: "Speed Efficiency", value: 78 },
  { title: "Level Promotion Tracker", value: 75, label: "to Level 4" },
];

// Navigation / Tab text
export const navTabs = [
  "Profile",
  "KPI Metrics",
  "Attendance & History",
  "Submit Shift Report",
];

// Page heading & role tag
export const dashboardTitle = "Payer Dashboard";
export const userRoleTag = "Payer";

// Tailwind theme palettes (extend / override as needed)
export const themes = [
  {
    name: "light",
    text: "text-gray-900",
    background: "bg-white",
    accent: "text-yellow-600",
    panel: "bg-gray-50",
    border: "border-gray-200",
  },
  {
    name: "dark",
    text: "text-gray-100",
    background: "bg-gray-900",
    accent: "text-yellow-500",
    panel: "bg-gray-800",
    border: "border-gray-700",
  },
];

export const icons = {
  attendance: Target,
  clock: Clock4,
  close: X,
  check: CheckCircle,
};

// ------------------------------------------------------------
// Feel free to import these constants into your components and bind
// them to your UI for quick prototyping or testing.
