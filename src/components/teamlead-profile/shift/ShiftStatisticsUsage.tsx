import { Fragment } from "react";

import { Badge } from "@/components/ui/badge";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/shift-statistics-usage";

export function Usages() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">bank usage summary</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">banks used during shift</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <div>
          <div className="space-y-3">
            {metrics.map((props, index) => (
              <Fragment key={index}>
                <div className="p-3 border space-y-2 rounded-lg">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-1">
                      <h5 className="text-base font-semibold">
                        <span className="capitalize">{props.bank}</span>
                      </h5>
                      <p className="text-sm font-semibold">
                        <span className="capitalize text-muted-foreground">
                          {props.description}
                        </span>
                      </p>
                    </div>
                    <div className="flex-none">
                      <Badge variant="outline">{props.percentage}</Badge>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
