import { AlarmClock, Save } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export function Confirm() {
  return (
    <Card className="py-3">
      <CardContent className="@container/grid">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex-none">
            <Button
              disabled
              size="lg"
              variant="ghost"
              className="!p-0 !h-auto disabled:opacity-100"
            >
              <AlarmClock />
              <p className="text-sm font-semibold">
                <span className="capitalize">last saved: 12:38:26</span>
              </p>
            </Button>
          </div>
          <div className="flex-none">
            <div className="flex gap-3 items-center md:justify-end">
              <div className="flex-none">
                <Button size="lg" variant="outline">
                  <Save />
                  <p className="text-sm font-semibold">
                    <span className="capitalize">save draft</span>
                  </p>
                </Button>
              </div>
              <div className="flex-none">
                <Button size="lg" variant="default">
                  <p className="text-sm font-semibold">
                    <span className="capitalize">submit report</span>
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
