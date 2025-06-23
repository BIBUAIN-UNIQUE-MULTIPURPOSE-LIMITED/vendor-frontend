import { AlarmClock, Save } from "lucide-react";

import { Button } from "@/components/shadcn/ui/button";
import { Card, CardContent } from "@/components/shadcn/ui/card";

export function Confirm() {
  return (
    <Card>
      <CardContent className="@container/grid">
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-12 md:col-span-6">
            <Button size="lg" variant="outline">
              <AlarmClock />
              <p className="text-sm font-semibold">
                <span className="capitalize">last saved: 12:38:26</span>
              </p>
            </Button>
          </div>
          <div className="col-span-12 md:col-span-6">
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
