import { Fragment } from "react";

import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/history-attendance-notes";

export function Notes() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">flags & notes</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">
            view important flags and notes related to your attendance records.
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <div>
          <div className="space-y-3">
            {metrics.map((props, index) => (
              <Fragment key={index}>
                <div
                  className="p-3 space-y-2 rounded-lg"
                  style={{
                    background: props.color,
                  }}
                >
                  <p className="text-base">
                    <span className="sentence font-semibold">
                      {props.date}:&nbsp;
                    </span>
                    <span className="sentence text-muted-foreground">
                      {props.description}
                    </span>
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
