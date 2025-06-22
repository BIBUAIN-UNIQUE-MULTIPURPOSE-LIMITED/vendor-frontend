import { SidebarInset } from "@/components/shadcn/ui/sidebar";
import { SidebarProvider } from "@/components/shadcn/ui/sidebar";

import { Header } from "./@header";
import { SideBar } from "./@sidebar";

interface LayoutProps {
  header: React.ReactNode;
  metrics: React.ReactNode;
  profile: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider width="var(--container-xs)">
      <SideBar />
      <SidebarInset>
        <Header />
        <div className="p-3 pb-10">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
