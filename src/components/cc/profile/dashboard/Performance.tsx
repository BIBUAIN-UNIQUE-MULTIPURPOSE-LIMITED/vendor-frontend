import { Fragment } from "react";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { performances } from "@/examples/cc/profile/dashboard/performances";

export function Performance() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">performance metrics</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">key performance indicators</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <div className="space-y-5">
          {performances.map((performance, index) => (
            <Fragment key={index}>
              <div className="space-y-2">
                <Button
                  disabled
                  variant="ghost"
                  className="p-0 h-auto w-full justify-between disabled:opacity-100"
                >
                  <p className="text-sm font-semibold">
                    <span className="capitalize text-muted-foreground">
                      {performance.title}
                    </span>
                  </p>
                  <p className="text-sm font-semibold">
                    <span className="sentence text-muted-foreground">
                      {performance.value}
                    </span>
                  </p>
                </Button>
                <Progress className="w-full" value={performance.progress} />
              </div>
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
