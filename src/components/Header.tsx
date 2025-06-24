"use client";

import { useEffect } from "react";

import { SidebarTrigger } from "@/components/ui/sidebar";

import { HeaderContext, HeaderProvider } from "./HeaderContext";
import { Break, Timer, ClockOut, MiniProfile } from "./HeaderComponents";

export function Header() {
  useEffect(function () {
    const onBeforeUnload = (event: BeforeUnloadEvent) => event.preventDefault();

    window.addEventListener("beforeunload", onBeforeUnload);

    return function () {
      window.removeEventListener("beforeunload", onBeforeUnload);
    };
  }, []);

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
                <HeaderContext.Consumer>
                  {([, states]) => {
                    if (states.clockedIn) {
                      return (
                        <div className="flex-none hidden @2xl/header:block">
                          <Break variant="outline" />
                        </div>
                      );
                    }

                    return;
                  }}
                </HeaderContext.Consumer>
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
