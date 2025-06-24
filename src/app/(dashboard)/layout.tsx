import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Header } from "@/components/Header";
import { SideBar } from "@/components/Sidebar";

interface LayoutProps {
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
