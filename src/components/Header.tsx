"use client";

import { useContext, createContext, ReactNode } from "react";

import { useTimer, UseTimer } from "@/hooks/timer";
import { SidebarTrigger } from "@/components/ui/sidebar";

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

function HeaderProvider({ children }: HeaderProviderProps) {
  const timer = useTimer();

  return (
    <HeaderContext.Provider value={timer}>{children}</HeaderContext.Provider>
  );
}

function useHeader() {
  const context = useContext(HeaderContext);

  if (!context) {
    throw new Error("`useHeader` must be used within a `HeaderProvider`");
  }

  return context;
}

export function Header() {
  return (
    <HeaderProvider>
      <header className="z-5 top-0 left-0 sticky border-b backdrop-blur bg-background @container/header">
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
    </HeaderProvider>
  );
}

// Header Components
import Link from "next/link";

import { useMemo } from "react";
import { CircleUser, CirclePause, AlarmClockOff } from "lucide-react";
import { User, Settings, AlarmClock, LogOut, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { AvatarFallback } from "@/components/ui/avatar";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuItem,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu";
import {
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export function Timer(props: React.ComponentProps<typeof Button>) {
  const [time, states] = useHeader();

  const secs = time % 60;
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);

  return (
    <Button
      {...props}
      className={useMemo(
        function () {
          if (states.running || states.running === null) {
            return "";
          }

          return "animated animate-pulse animation-duration-[1s]";
        },
        [states.running],
      )}
    >
      <AlarmClock />
      <p className="text-xs font-semibold">
        <span>
          {hours}h {mins}m {secs}s
        </span>
      </p>
    </Button>
  );
}

export function Break(props: React.ComponentProps<typeof Button>) {
  const [, states, control] = useHeader();

  const disabled = useMemo(() => {
    if (states.clockedIn === null) {
      return !states.running;
    }

    return !states.clockedIn;
  }, [states.clockedIn, states.running]);

  function takeBreak(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (states.running) {
      control.pause();
    } else {
      control.resume();
    }
  }

  return (
    <Button {...props} disabled={disabled} onClick={takeBreak}>
      <CirclePause />
      <p className="text-xs font-semibold">
        <span className="capitalize">
          {states.running ? "take break" : "end break"}
        </span>
      </p>
    </Button>
  );
}

export function ClockOut(props: React.ComponentProps<typeof Button>) {
  const [, states, control] = useHeader();

  function clockOut() {
    if (states.clockedIn) {
      control.reset();
    } else {
      control.start();
    }
  }

  if (!states.clockedIn) {
    return (
      <Button {...props} variant="default" onClick={clockOut}>
        <AlarmClock />
        <p className="text-xs font-semibold">
          <span className="capitalize">clock in</span>
        </p>
      </Button>
    );
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button {...props} variant="destructive" className="text-white">
          <AlarmClockOff />
          <p className="text-xs font-semibold">
            <span className="capitalize">clock out</span>
          </p>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className="font-bold">
            <span className="capitalize">confirm clock out</span>
          </AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to clock out and generate shift report?
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={clockOut}>
            Yes, Clock Out
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export function MiniProfile() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild type="button">
        <Button
          size="sm"
          variant="outline"
          className="py-1 h-auto text-left max-w-52 whitespace-normal"
        >
          <div className="flex-none">
            <Avatar>
              <AvatarImage
                alt="User Avatar"
                src="https://avatars.githubusercontent.com/u/100626?v=4"
              />
              <AvatarFallback>
                <User size={15} />
              </AvatarFallback>
            </Avatar>
          </div>
          <div className="flex-1">
            <h5 className="text-sm font-semibold">
              <span className="one-line capitalize">john smith doe</span>
            </h5>
            <p className="text-xs text-muted-foreground">
              <span className="one-line capitalize">team lead</span>
            </p>
          </div>
          <div className="flex-none">
            <ChevronDown size={20} />
          </div>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" side="bottom" className="w-64">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Avatar>
              <AvatarImage
                alt="User Avatar"
                src="https://avatars.githubusercontent.com/u/100626?v=4"
              />
              <AvatarFallback>
                <User size={15} />
              </AvatarFallback>
            </Avatar>
            <div className="text-left">
              <h5 className="text-sm font-semibold">
                <span className="one-line capitalize">john smith doe</span>
              </h5>
              <p className="text-xs text-muted-foreground">
                <span className="one-line capitalize">team lead</span>
              </p>
            </div>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem asChild>
            <Link href="/team-lead/profile">
              <CircleUser />
              <p className="text-sm font-semibold">
                <span className="one-line capitalize">profile</span>
              </p>
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings />
            <p className="text-sm font-semibold">
              <span className="one-line capitalize">settings</span>
            </p>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem variant="destructive">
            <LogOut />
            <p className="text-sm font-semibold">
              <span className="one-line capitalize">log out</span>
            </p>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
