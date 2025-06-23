import { TrendingUp } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Rate() {
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
            <span className="text-xl capitalize font-semibold">rate</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 @container/grid">
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-12">
            <p className="text-lg font-semibold">
              <span className="capitalize text-muted-foreground">
                average cost price
              </span>
            </p>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-12">
            <p className="text-lg font-semibold">
              <span className="capitalize text-muted-foreground">
                average selling price
              </span>
            </p>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">average markup rate (%)</span>
              </Label>
              <Input
                placeholder="Enter markup rate"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
