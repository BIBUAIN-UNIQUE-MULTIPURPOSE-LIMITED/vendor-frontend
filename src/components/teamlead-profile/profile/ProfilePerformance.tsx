import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/profile-performance";

export function Performance() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">performance metrics</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">key performance metrics</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card>
          <CardContent className="space-y-5">
            {metrics.map((props, index) => (
              <Fragment key={index}>
                <div className="space-y-2">
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex-none">
                      <Button
                        disabled
                        variant="ghost"
                        className="!p-0 h-auto disabled:opacity-100"
                      >
                        <DynamicIcon
                          name={props.iconName}
                          className={props.color}
                        />
                        <p className="text-sm font-semibold">
                          <span className="capitalize">{props.title}</span>
                        </p>
                      </Button>
                    </div>
                    <div className="flex-none">
                      <p className="text-xs font-semibold">
                        <span className="capitalize text-muted-foreground">
                          {props.progress}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Progress value={Math.floor(Math.random() * 101)} />
                  <p className="text-xs font-normal">
                    <span className="capitalize text-muted-foreground">
                      {props.target}
                    </span>
                  </p>
                </div>
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
