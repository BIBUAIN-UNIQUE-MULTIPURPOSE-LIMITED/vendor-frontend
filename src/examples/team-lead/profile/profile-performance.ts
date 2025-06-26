import { IconName } from "lucide-react/dynamic";

export type PerformanceMetric = {
  color: string;
  title: string;
  target: string;
  progress: string;
  iconName: IconName;
};

export const performanceMetrics: PerformanceMetric[] = [
  {
    progress: "85%",
    target: "target: 100%",
    color: "text-green-600",
    title: "profit declaration",
    iconName: "circle-dollar-sign",
  },
  {
    iconName: "target",
    title: "target trade",
    color: "text-blue-600",
    target: "target: 1500%",
    progress: "1,247 trades",
  },
  {
    iconName: "zap",
    progress: "2.7min",
    target: "target < 3min",
    color: "text-yellow-600",
    title: "speed efficiency",
  },
  {
    title: "rank",
    progress: "78%",
    iconName: "award",
    color: "text-purple-600",
    target: "top 22% of players",
  },
];
