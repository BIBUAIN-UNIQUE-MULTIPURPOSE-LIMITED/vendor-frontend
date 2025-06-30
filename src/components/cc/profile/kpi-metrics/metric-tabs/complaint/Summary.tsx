import { Fragment } from "react";

import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CardFooter, CardHeader } from "@/components/ui/card";

import { summaries } from "@/examples/cc/profile/kpi-metrics/metric-tabs/complaints/summaries";

export function Summary() {
  return (
    <div className="@container/grid">
      <div className="grid gap-3 grid-cols-12">
        {summaries.map((summary, index) => (
          <Fragment key={index}>
            <div className="col-span-12 @sm/grid:col-span-6 @xl/grid:col-span-4">
              <Card className="py-3 gap-3 shadow-none rounded-md">
                <CardHeader className="px-3">
                  <p className="text-sm font-semibold">
                    <span className="one-line capitalize text-muted-foreground">
                      {summary.title}
                    </span>
                  </p>
                </CardHeader>
                <CardContent className="px-3">
                  <h5 className="text-xl font-bold">
                    <span className="capitalize">{summary.value}</span>
                  </h5>
                </CardContent>
                <CardFooter className="px-3">
                  <Progress value={summary.progress} />
                </CardFooter>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
