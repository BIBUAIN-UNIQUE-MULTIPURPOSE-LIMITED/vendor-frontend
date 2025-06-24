import { CircleDollarSign } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Charges() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <CircleDollarSign className="!size-6" />
            <span className="text-xl capitalize font-semibold">charges</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  sendout count - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter sendout count"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  sendout amount - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter sendout amount"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  exchange charges - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter exchange charges"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total coins exchanged</span>
              </Label>
              <Input
                placeholder="Enter total coins exchanged"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  average exchange rate (across all platforms)
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
