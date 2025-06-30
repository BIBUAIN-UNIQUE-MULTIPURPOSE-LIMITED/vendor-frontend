import { Fragment } from "react";
import { Circle } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardFooter, CardHeader } from "@/components/ui/card";

import { summaries } from "@/examples/cc/profile/dashboard/summaries";

export function Summary() {
  return (
    <div className="@container/grid">
      <div className="grid gap-3 grid-cols-12">
        {summaries.map((summary, index) => (
          <Fragment key={index}>
            <div className="col-span-12 @lg/grid:col-span-6 @2xl/grid:col-span-4 @4xl/grid:col-span-3">
              <Card className="py-3 gap-3 shadow-none rounded-md">
                <CardHeader className="px-3">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-none">
                      <p className="text-sm font-semibold">
                        <span className="capitalize text-muted-foreground">
                          {summary.name}
                        </span>
                      </p>
                    </div>
                    <div className="flex-none">
                      <DynamicIcon size={18} name={summary.iconName} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3">
                  <h5 className="text-xl font-bold">
                    <span className="capitalize">{summary.value}</span>
                  </h5>
                </CardContent>
                <CardFooter className="px-3">
                  <Button
                    disabled
                    variant="ghost"
                    className="h-auto !p-0 disabled:opacity-100"
                  >
                    <Circle
                      className="size-3.5 stroke-none"
                      style={{ fill: summary.tag.color }}
                    />
                    <p className="text-sm font-semibold">
                      <span className="capitalize text-muted-foreground">
                        {summary.tag.value}
                      </span>
                    </p>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
