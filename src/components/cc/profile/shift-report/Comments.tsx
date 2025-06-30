import { ThumbsUp } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

export function Comments() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <ThumbsUp className="size-6" />
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">reputation report</span>
          </CardTitle>
        </Button>
      </CardHeader>
      <CardContent className="px-3 space-y-3">
        <div className="space-y-0.5">
          <Label className="text-sm font-semibold">
            <span className="capitalize">general comments</span>
          </Label>
          <Textarea
            className="p-3 h-36 shadow-none !bg-transparent"
            placeholder="Enter any general comments about the shift..."
          />
        </div>
        <div className="space-y-0.5">
          <Label className="text-sm font-semibold">
            <span className="capitalize">issues encountered</span>
          </Label>
          <Textarea
            className="p-3 h-36 shadow-none !bg-transparent"
            placeholder="Describe any issues, problems or challenges faced during the shift..."
          />
        </div>
      </CardContent>
    </Card>
  );
}
