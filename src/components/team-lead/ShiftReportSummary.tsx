import { LayoutList } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent } from "@/components/ui/select";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import {
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

export function Summary() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <LayoutList className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              shift summary
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">punctuality status</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full !h-auto">
                  <SelectValue placeholder="Select punctuality status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-sm font-semibold">
                      <span className="capitalize">status</span>
                    </SelectLabel>
                    <SelectItem value="project-manager">
                      <span className="capitalize">punctual</span>
                    </SelectItem>
                    <SelectItem value="project-manager">
                      <span className="capitalize">non-punctual</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total coin purchased</span>
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
                <span className="capitalize">average cost rate</span>
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
                <span className="capitalize">average markup rate (%)</span>
              </Label>
              <Input
                className="p-3 w-full h-auto no-apperance"
                placeholder="Auto-calculated from rate section"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
