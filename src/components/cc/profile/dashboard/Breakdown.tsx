import { Fragment } from "react";

import { CardContent, CardFooter } from "@/components/ui/card";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { breakdowns } from "@/examples/cc/profile/dashboard/breakdowns";

export function Breakdown() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">weekly performance breakdown</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12 @2xl:grid-cols-10 @3xl:grid-cols-12 @5xl:grid-cols-14">
          {breakdowns.map((breakdown, index) => (
            <Fragment key={index}>
              <div className="col-span-12 @3xs/grid:col-span-6 @sm/grid:col-span-4 @lg/grid:col-span-3 @2xl/grid:col-span-2 @5xl/grid:col-span-2">
                <Card className="py-3 gap-1 text-center shadow-none rounded-md">
                  <CardHeader className="px-3">
                    <p className="text-sm font-semibold">
                      <span className="capitalize">{breakdown.day}</span>
                    </p>
                  </CardHeader>
                  <CardContent className="px-3">
                    <h5 className="text-base font-bold">
                      <span className="capitalize">{breakdown.percent}</span>
                    </h5>
                  </CardContent>
                  <CardFooter className="px-3">
                    <p className="w-full text-sm font-semibold">
                      <span className="capitalize text-muted-foreground">
                        {breakdown.description}
                      </span>
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
