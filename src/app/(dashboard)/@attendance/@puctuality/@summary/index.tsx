import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { metrics } from "./props";
import { Button } from "@/components/shadcn/ui/button";
import { Circle } from "lucide-react";

export function Summary() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">punctuality summary</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            overview of punctuality metrics and statistics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-5 grid-cols-12">
          {metrics.map((props, index) => (
            <Fragment key={index}>
              <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
                <Card className="py-3">
                  <CardHeader className="px-3 block">
                    <div className="flex gap-3 items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          <span className="one-line capitalize">
                            {props.title}
                          </span>
                        </p>
                      </div>
                      <div className="flex-none">
                        <DynamicIcon size={18} name={props.iconName} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 block">
                    <h3 className="mb-1 text-xl font-semibold">
                      <span className="capitalize">{props.amount}</span>
                    </h3>
                    <Button
                      disabled
                      variant="ghost"
                      className="!p-0 h-auto bg-transparent disabled:opacity-100"
                    >
                      <Circle
                        className={`stroke-none fill-[var(${props.colorVar})]`}
                      />
                      <h3 className="text-sm font-semibold">
                        <span className="sentence text-muted-foreground">
                          {props.subtitle}
                        </span>
                      </h3>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
