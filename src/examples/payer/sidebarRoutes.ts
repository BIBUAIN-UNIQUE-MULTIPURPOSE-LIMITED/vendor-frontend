import { IconName } from "lucide-react/dynamic";

export type SidebarRoute = {
  name: string;
  href: string;
  iconName: IconName;
};

export const sidebarRoutes: SidebarRoute[] = [
  {
    name: "dashboard",
    href: "/payer",
    iconName: "layout-dashboard",
  },
  {
    name: "trade assignment",
    href: "/payer/trade-assignment",
    iconName: "file-text",
  },
  {
    name: "transactions",
    href: "/payer/transactions",
    iconName: "receipt",
  },
  {
    name: "bank management",
    href: "/payer/bank-management",
    iconName: "landmark",
  },
  {
    name: "inbox",
    href: "/payer/inbox",
    iconName: "inbox",
  },
];
