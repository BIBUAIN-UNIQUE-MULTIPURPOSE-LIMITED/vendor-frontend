"use client";

import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";

import { HeaderProvider } from "./context";
import { Break, Timer, ClockOut, MiniProfile } from "./components";

export function Header() {
  return (
    <HeaderProvider>
      <header className="z-5 top-0 left-0 sticky border-b backdrop-blur bg-background/50 @container/header">
        <div className="py-2 px-3">
          <div className="flex gap-5 items-center justify-between">
            <div className="flex-none">
              <div className="flex gap-3 items-center">
                <div className="flex-none">
                  <SidebarTrigger
                    variant="outline"
                    className="p-2 h-auto w-auto"
                  />
                </div>
              </div>
            </div>
            <div className="flex-none">
              <div className="flex gap-3 items-center">
                <div className="flex-none hidden @2xl/header:block">
                  <Timer variant="outline" />
                </div>
                <div className="flex-none hidden @2xl/header:block">
                  <Break variant="outline" />
                </div>
                <div className="flex-none hidden @2xl/header:block">
                  <ClockOut variant="destructive" />
                </div>
                <div className="flex-none">
                  <MiniProfile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </HeaderProvider>
  );
}
