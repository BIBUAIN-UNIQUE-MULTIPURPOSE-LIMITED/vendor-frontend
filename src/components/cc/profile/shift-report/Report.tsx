import { CalendarDays } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

export function Report() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">shift report</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="capitalize">
            2025-06-02 &bull; morning shift (8:00 AM - 4:00 PM)
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">staff name</span>
              </Label>
              <Input
                placeholder="John Smith"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">role</span>
              </Label>
              <Input
                placeholder="Customer Care Report"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">shift date</span>
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="p-3 h-auto w-full shadow-none justify-between !bg-transparent"
                  >
                    <p className="text-sm font-normal">
                      <span className="capitalize">06/02/2025</span>
                    </p>
                    <CalendarDays />
                  </Button>
                </PopoverTrigger>
                <PopoverContent asChild side="bottom" align="end">
                  <Calendar
                    mode="single"
                    captionLayout="dropdown"
                    className="border shadow-none rounded-md !bg-white"
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
