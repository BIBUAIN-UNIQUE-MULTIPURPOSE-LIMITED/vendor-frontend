import { AlarmClock } from "lucide-react";

import { Card, CardContent } from "@/components/shadcn/ui/card";
import { CardHeader, CardTitle } from "@/components/shadcn/ui/card";

import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";

export function Punctality() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <AlarmClock className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              punctuality
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">clock-in time</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">clock-out time</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">break times</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Eg.: 13:00 - 14:00"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
