import { IconName } from "lucide-react/dynamic";

type RouteGroups = {
  [key: string]: Array<{
    name: string;
    href: string;
    iconName: IconName;
  }>;
};

export const routesGroups: RouteGroups = {
  "team-lead": [
    {
      name: "admin",
      href: "/admin",
      iconName: "layout-dashboard",
    },
    {
      name: "team lead (rater)",
      href: "/team-lead",
      iconName: "users",
    },
    {
      name: "payer",
      href: "/payer",
      iconName: "credit-card",
    },
    {
      name: "settings",
      href: "/settings",
      iconName: "settings",
    },
  ],
  "rate-management": [
    {
      name: "admin",
      href: "/admin",
      iconName: "layout-dashboard",
    },
    {
      name: "coin exchange",
      href: "/coin-exchange",
      iconName: "coins",
    },
    {
      name: "bank management",
      href: "/bank-management",
      iconName: "landmark",
    },
    {
      name: "rate management",
      href: "/rate-management",
      iconName: "receipt-text",
    },
    {
      name: "inbox",
      href: "/inbox",
      iconName: "inbox",
    },
    {
      name: "settings",
      href: "/settings",
      iconName: "settings",
    },
  ],
};
