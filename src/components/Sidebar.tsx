"use client";

import Link from "next/link";

import { Fragment, useMemo } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { useSidebar, SidebarGroupContent } from "@/components/ui/sidebar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  SidebarMenu,
  SidebarGroup,
  SidebarFooter,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
} from "@/components/ui/sidebar";

export function SideBar() {
  const sidebar = useSidebar();

  return (
    <Sidebar theme="var(--chart-5)" collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton
          asChild
          title="Bibuain Automation"
          className="py-3 h-auto hover:bg-transparent active:bg-transparent"
        >
          <Link href="/">
            {useMemo(
              function () {
                if (sidebar.open) {
                  return (
                    <div className="flex gap-3 items-center justify-start">
                      <Avatar className="rounded-none">
                        <AvatarFallback>B</AvatarFallback>
                        <AvatarImage
                          alt="Favicon"
                          src="/favicon.ico"
                          className="rounded-none"
                        />
                      </Avatar>
                      <p className="text-lg font-bold text-white">
                        <span className="uppercase">bibuain</span>
                      </p>
                    </div>
                  );
                }

                return (
                  <Avatar>
                    <AvatarFallback>B</AvatarFallback>
                    <AvatarImage
                      alt="Favicon"
                      src="/favicon.ico"
                      className="rounded-none"
                    />
                  </Avatar>
                );
              },
              [sidebar.open],
            )}
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routesGroups["rate-management"].map(
                ({ name, href, iconName }, index) => (
                  <Fragment key={index}>
                    <SidebarMenuItem title={name}>
                      <SidebarMenuButton
                        asChild
                        size={sidebar.open ? "lg" : "default"}
                        // className="text-white hover:bg-transparent active:bg-transparent"
                      >
                        <Link href={href}>
                          <DynamicIcon name={iconName} />
                          <p className="text-sm font-semibold">
                            <span className="capitalize">{name}</span>
                          </p>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  </Fragment>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}

// Sidebar Props

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
      name: "dashboard",
      href: "/dashboard",
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
      name: "dashboard",
      href: "/dashboard",
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
