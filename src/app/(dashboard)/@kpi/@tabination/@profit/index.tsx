import { Fragment } from "react";

import { Badge } from "@/components/shadcn/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { data } from "./props";
import { RateBreakDown } from "./components";

export function Profit() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">profit declaration report</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            detailed profit analysis and margin calculations
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card className="@5xl/card:w-2xl">
          <CardContent className="space-y-5">
            {data.map((props, index) => (
              <Fragment key={index}>
                <RateBreakDown {...props} />
              </Fragment>
            ))}
            <RateBreakDown
              title="total average margin"
              total={
                <p className="text-sm font-bold">
                  <span className="capitalize text-green-600">
                    {Number(277_500).toLocaleString("en-NG", {
                      currency: "NGN",
                      style: "currency",
                    })}
                  </span>
                </p>
              }
            />
            <RateBreakDown
              title="realized profit"
              total={
                <p className="text-sm font-bold">
                  <span className="capitalize text-green-600">
                    {Number(249_100).toLocaleString("en-NG", {
                      currency: "NGN",
                      style: "currency",
                    })}
                  </span>
                </p>
              }
            />
            <RateBreakDown
              title="balance status"
              total={
                <Badge
                  variant="secondary"
                  className="text-white bg-green-500 dark:bg-green-600"
                >
                  <span className="capitalize">balanced</span>
                </Badge>
              }
            />
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
