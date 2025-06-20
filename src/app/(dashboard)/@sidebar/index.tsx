"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Button } from "@/components/shadcn/ui/button";
import {
  SidebarGroupContent,
  useSidebar,
} from "@/components/shadcn/ui/sidebar";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/shadcn/ui/avatar";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenuButton,
} from "@/components/shadcn/ui/sidebar";

import { routesGroups } from "./props";

export function SideBar() {
  const sidebar = useSidebar();
  const pathname = usePathname();

  const root = pathname.split("/")[1];
  const routes = routesGroups[root];

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenuButton asChild className="py-3 h-auto">
          <Button variant="ghost" className="justify-start">
            <Avatar className="rounded-none">
              <AvatarFallback>B</AvatarFallback>
              <AvatarImage
                alt="Favicon"
                src="/favicon.ico"
                className="rounded-none"
              />
            </Avatar>
            <p className="text-sm font-bold">
              <span className="uppercase">bibuain</span>
            </p>
          </Button>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {routes.map(({ name, href, iconName }, index) => (
                <Fragment key={index}>
                  <SidebarMenuItem title={name}>
                    <SidebarMenuButton
                      asChild
                      size={sidebar.open ? "lg" : "default"}
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
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter></SidebarFooter>
    </Sidebar>
  );
}
