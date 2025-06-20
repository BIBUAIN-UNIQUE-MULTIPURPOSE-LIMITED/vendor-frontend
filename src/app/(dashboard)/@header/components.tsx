"use client";

import { User, AlarmClock, CirclePause, AlarmClockOff } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { AvatarFallback } from "@/components/shadcn/ui/avatar";
import { Avatar, AvatarImage } from "@/components/shadcn/ui/avatar";

export function Timer() {
  const time = 3661;

  const secs = time % 60;
  const hours = Math.floor(time / 3600);
  const mins = Math.floor((time % 3600) / 60);

  return (
    <Button variant="outline">
      <AlarmClock />
      <p className="text-xs font-semibold">
        <span>
          {hours}h {mins}m {secs}s
        </span>
      </p>
    </Button>
  );
}

export function Break() {
  return (
    <Button variant="outline">
      <CirclePause />
      <p className="text-xs font-semibold">
        <span className="capitalize">take break</span>
      </p>
    </Button>
  );
}

export function ClockOut() {
  return (
    <Button variant="destructive">
      <AlarmClockOff />
      <p className="text-xs font-semibold">
        <span className="capitalize">clock out</span>
      </p>
    </Button>
  );
}

export function MiniProfile() {
  return (
    <div className="max-w-sm">
      <div className="flex gap-3 items-center">
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
        <div className="flex-none">
          <h5 className="text-sm font-semibold">
            <span className="capitalize">jane smith doe</span>
          </h5>
          <p className="text-xs text-muted-foreground">
            <span className="capitalize">team lead</span>
          </p>
        </div>
      </div>
    </div>
  );
}
