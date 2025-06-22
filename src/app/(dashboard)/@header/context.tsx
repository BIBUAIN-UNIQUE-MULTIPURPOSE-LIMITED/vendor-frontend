"use client";

import { createContext, useContext } from "react";

import { useTimer } from "@/components/custom/hooks/timer";
import { TimerControl, ElapsedTime } from "@/components/custom/hooks/timer";

interface HeaderProviderProps {
  children: React.ReactNode;
}

type UseHeader = [ElapsedTime, TimerControl];

const HeaderContext = createContext<UseHeader>([
  0,
  {
    isRunning: false,

    start: () => {},
    reset: () => {},
    pause: () => {},
    resume: () => {},
  },
]);

export function HeaderProvider({ children }: HeaderProviderProps) {
  const timer = useTimer();

  return (
    <HeaderContext.Provider value={timer}>{children}</HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("`useHeader` must be used within a `HeaderProvider`");
  }

  return context;
}
