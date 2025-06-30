import { AlarmClock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

export function Punctuality() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <AlarmClock className="size-6" />
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">punctuality</span>
          </CardTitle>
        </Button>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">clock-in time</span>
              </Label>
              <Input
                type="time"
                defaultValue="09:47"
                placeholder="John Smith"
                className="p-3 h-auto shadow-none appearance-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">clock-out time</span>
              </Label>
              <Input
                type="time"
                defaultValue="09:47"
                placeholder="Customer Care Report"
                className="p-3 h-auto shadow-none appearance-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">break times</span>
              </Label>
              <Input
                placeholder="E.g.: 12:00 - 13:00"
                className="p-3 h-auto shadow-none appearance-none !bg-transparent"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
