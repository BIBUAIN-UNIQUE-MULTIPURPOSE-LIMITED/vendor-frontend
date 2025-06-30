import { MessageSquareMore } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

export function Complaint() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <MessageSquareMore className="size-6" />
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">complaint report</span>
          </CardTitle>
        </Button>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">open tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">resolved tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
              <Label className="text-xs">
                <span className="sentence text-green-600">auto generated</span>
              </Label>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">unresolved tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">average response time</span>
              </Label>
              <Input
                placeholder="E.g.: 2.5mins"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
              <Label className="text-xs text-muted-foreground">
                <span className="sentence">
                  auto generated from system data
                </span>
              </Label>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">resolution rate (%)</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">unresolved tickets</span>
              </Label>
              <Input
                placeholder="E.gg.: 15min"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">escalated tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">total complaints</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">reassigned tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
