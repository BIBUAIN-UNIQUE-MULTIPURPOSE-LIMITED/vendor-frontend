import "@/css/globals.css";

import { SidebarInset } from "@/components/ui/sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

import { Header } from "@/components/Header";
import { SideBar } from "@/components/Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body>
        <SidebarProvider width="var(--container-xs)">
          <SideBar />
          <SidebarInset>
            <Header />
            <div className="bg-gray-100">{children}</div>
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

export const metadata = {
  title: "Bibuain Automation",
  description: "Design and automate your workflows with Bibuain.",
};
