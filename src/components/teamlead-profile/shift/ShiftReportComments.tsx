import { MessageSquareMore } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function Comments() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <MessageSquareMore className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              comments & recommendation
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">general comments</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Enter any general comments about the shift..."
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">issues encountered</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Describe any issues, problems, or challenges faced during the shift..."
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">recommendations</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Suggest improvements or recommendations for future shifts..."
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
