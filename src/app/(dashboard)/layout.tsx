import { SidebarInset } from "@/components/shadcn/ui/sidebar";
import { SidebarProvider } from "@/components/shadcn/ui/sidebar";

import { Header } from "./@header";
import { SideBar } from "./@sidebar";

interface LayoutProps {
  header: React.ReactNode;
  sidebar: React.ReactNode;
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <SidebarProvider width="var(--container-xs)">
      <SideBar />
      <SidebarInset>
        <Header />
        <div className="p-3">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}
