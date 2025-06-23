"use client";

import { User, Settings, AlarmClock, LogOut } from "lucide-react";
import { CircleUser, CirclePause, AlarmClockOff } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { AvatarFallback } from "@/components/shadcn/ui/avatar";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
} from "@/components/shadcn/ui/dropdown-menu";
import {
  DropdownMenuGroup,
  DropdownMenuItem,
} from "@/components/shadcn/ui/dropdown-menu";
import {
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";

import { useHeader } from "./context";
import React, { useEffect } from "react";

export function Timer(props: React.ComponentProps<typeof Button>) {
  const [time, control] = useHeader();

  const secs = time % 60;
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);

  return (
    <Button
      {...props}
      className={
        !control.isRunning
          ? "animated animate-pulse animation-duration-[1s]"
          : ""
      }
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
  const [, control] = useHeader();

  function takeBreak(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    if (control.isRunning) {
      control.pause();
    } else {
      control.resume();
    }
  }

  if (control.clockedOut) {
    return;
  }

  return (
    <Button {...props} onClick={takeBreak}>
      <CirclePause />
      <p className="text-xs font-semibold">
        <span className="capitalize">
          {control.isRunning ? "take break" : "end break"}
        </span>
      </p>
    </Button>
  );
}

export function ClockOut(props: React.ComponentProps<typeof Button>) {
  const [, control] = useHeader();

  function clockOut(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();

    control.toggleClockedOut();
  }

  useEffect(() => {
    if (control.clockedOut) {
      control.reset();
    } else {
      control.start();
    }
  }, [control]);

  return (
    <Button {...props} onClick={clockOut}>
      <AlarmClockOff />
      <p className="text-xs font-semibold">
        <span className="capitalize">
          clock {control.clockedOut ? "in" : "out"}
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
          <DropdownMenuItem>
            <CircleUser />
            <p className="text-sm font-semibold">
              <span className="one-line capitalize">team lead</span>
            </p>
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
