import { TrendingUp } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

export function Profit() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <TrendingUp className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              profit declaration report
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total declaration</span>
              </Label>
              <Input
                placeholder="Enter total declaration"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">amount purchase</span>
              </Label>
              <Input
                placeholder="Enter amount purchase"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">margin</span>
              </Label>
              <Input
                placeholder="Enter margin"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">realized profit</span>
              </Label>
              <Input
                placeholder="Enter realized profit"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  balance / not balance indicator
                </span>
              </Label>
              <Input
                placeholder="Enter average exchange"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
