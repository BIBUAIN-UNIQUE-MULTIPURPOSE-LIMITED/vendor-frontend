import { MessageSquareMore } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

export function Dispute() {
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
            <span className="capitalize">dispute report</span>
          </CardTitle>
        </Button>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">total open dispute</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">lost / won disputed</span>
              </Label>
              <Input
                placeholder="E.g.: 2/5"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">cancelled trades</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">expired</span>
              </Label>
              <Input
                placeholder="E.g.: 2.5mins"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">warning</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-4">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">RWP (release without pay)</span>
              </Label>
              <Input
                placeholder="E.gg.: 15min"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
