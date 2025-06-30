import { IconName } from "lucide-react/dynamic";

type BonusMetric = {
  header: {
    title: string;
    iconColor: string;
    iconName: IconName;
  };
  content: {
    value: string;
    badge: {
      name: string;
      theme: string;
    };
  };
  footer: {
    value: string;
    theme?: string;
  };
};

export const bonusMetrics: BonusMetric[] = [
  {
    header: {
      title: "Your Speed Today (Avg)",
      iconName: "hourglass",
      iconColor: "text-green-600",
    },
    content: {
      value: "3m 22s",
      badge: {
        name: "Good",
        theme: "--badge-green",
      },
    },
    footer: {
      value: "5% faster than yesterday",
    },
  },
  {
    header: {
      title: "Best Speed This Shift",
      iconName: "zap",
      iconColor: "text-green-600",
    },
    content: {
      value: "1m 40s",
      badge: {
        name: "Personal Best",
        theme: "--badge-green",
      },
    },
    footer: {
      value: "Transaction #TRX-12345",
    },
  },
  {
    header: {
      title: "Your Top Speed Record",
      iconName: "triangle-alert",
      iconColor: "text-yellow-600",
    },
    content: {
      value: "58s",
      badge: {
        name: "Fastest Payer",
        theme: "--badge-yellow",
      },
    },
    footer: {
      value: "Set on May 18, 2025",
    },
  },
  {
    header: {
      title: "Clocked In At",
      iconName: "circle-dollar-sign",
      iconColor: "text-green-600",
    },
    content: {
      value: "8:45 AM",
      badge: {
        name: "Early Bird",
        theme: "--badge-blue",
      },
    },
    footer: {
      value: "Today, May 22, 2025",
    },
  },
  {
    header: {
      title: "Total Amount Paid Today",
      iconName: "circle-dollar-sign",
      iconColor: "text-green-600",
    },
    content: {
      value: "₦8,230,000",
      badge: {
        name: "28 Transaction",
        theme: "--badge-green",
      },
    },
    footer: {
      value: "Daily target : ₦10,000,000",
    },
  },
  {
    header: {
      title: "Current Payer Rank",
      iconName: "award",
      iconColor: "text-yellow-600",
    },
    content: {
      value: "2nd Place",
      badge: {
        name: "Today",
        theme: "--badge-yellow",
      },
    },
    footer: {
      value: "+1 position since morning",
      theme: "--badge-green",
    },
  },
  {
    header: {
      title: "Overpayment Count Today",
      iconName: "triangle-alert",
      iconColor: "text-green-600",
    },
    content: {
      value: "0",
      badge: {
        name: "Clean",
        theme: "--badge-green",
      },
    },
    footer: {
      value: "5 days streak without overpayments",
    },
  },
  {
    header: {
      title: "Mistake-Free Bonus Status",
      iconName: "circle-check",
      iconColor: "text-green-600",
    },
    content: {
      value: "On Track",
      badge: {
        name: "Eligible",
        theme: "--badge-green",
      },
    },
    footer: {
      value: "Bonus: ₦25,000 at end of week",
    },
  },
];
