"use client";

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

import { useHeader } from "./HeaderContext";

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

  function clockOut(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (states.clockedIn) {
      control.reset();
    } else {
      control.start();
    }
  }

  return (
    <Button
      {...props}
      variant={states.clockedIn ? "destructive" : "default"}
      onClick={clockOut}
    >
      <AlarmClockOff />
      <p className="text-xs font-semibold">
        <span className="capitalize">
          clock {states.clockedIn ? "out" : "in"}
        </span>
      </p>
    </Button>
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
            <Link href="/profile/team-lead">
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
