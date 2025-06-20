import { SidebarTrigger } from "@/components/shadcn/ui/sidebar";

import { Break, Timer, ClockOut, MiniProfile } from "./components";

export function Header() {
  return (
    <header className="z-5 top-0 left-0 sticky border-b backdrop-blur bg-background/50">
      <div className="p-3">
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
              <div className="flex-none">
                <Timer />
              </div>
              <div className="flex-none">
                <Break />
              </div>
              <div className="flex-none">
                <ClockOut />
              </div>
              <div className="flex-none">
                <MiniProfile />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
