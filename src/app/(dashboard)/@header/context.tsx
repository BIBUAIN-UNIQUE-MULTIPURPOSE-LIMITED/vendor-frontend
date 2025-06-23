"use client";

import { useContext, createContext, ReactNode } from "react";

import { useTimer, UseTimer } from "@/hooks/timer";

const HeaderContext = createContext<UseTimer>([
  0,
  {
    running: false,
    clockedIn: false,
  },
  {
    start: () => {
      throw new Error("`start` called outside of `HeaderProvider`");
    },
    reset: () => {
      throw new Error("`reset` called outside of `HeaderProvider`");
    },
    pause: () => {
      throw new Error("`pause` called outside of `HeaderProvider`");
    },
    resume: () => {
      throw new Error("`resume` called outside of `HeaderProvider`");
    },
  },
]);

interface HeaderProviderProps {
  children: ReactNode;
}

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
