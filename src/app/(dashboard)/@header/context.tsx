"use client";

import { createContext, useContext, useState } from "react";

import { useTimer } from "@/components/custom/hooks/timer";
import { TimerControl, ElapsedTime } from "@/components/custom/hooks/timer";

interface HeaderProviderProps {
  children: React.ReactNode;
}

type UseHeader = [
  ElapsedTime,
  TimerControl & {
    clockedOut: boolean;
    toggleClockedOut: () => void;
  },
];

const HeaderContext = createContext<UseHeader>([
  0,
  {
    isRunning: false,
    clockedOut: false,

    start: () => {},
    reset: () => {},
    pause: () => {},
    resume: () => {},
    toggleClockedOut: () => {},
  },
]);

export function HeaderProvider({ children }: HeaderProviderProps) {
  const [time, control] = useTimer();

  const [clockedOut, setClockedOut] = useState<boolean>(false);

  return (
    <HeaderContext.Provider
      value={[
        time,
        {
          ...control,
          clockedOut,
          toggleClockedOut: function () {
            setClockedOut((clockedOut) => !clockedOut);
          },
        },
      ]}
    >
      {children}
    </HeaderContext.Provider>
  );
}

export function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("`useHeader` must be used within a `HeaderProvider`");
  }

  return context;
}
