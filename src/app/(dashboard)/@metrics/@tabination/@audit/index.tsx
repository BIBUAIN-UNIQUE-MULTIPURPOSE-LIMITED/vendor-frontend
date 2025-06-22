import { Fragment } from "react";

import { Badge } from "@/components/shadcn/ui/badge";
import { Card, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import { CardContent, CardDescription } from "@/components/shadcn/ui/card";

import { data, profits } from "./props";
import { ProfitTable, RateBreakDown } from "./components";

export function Audit() {
  return (
    <section className="space-y-5">
      <Card>
        <CardHeader className="gap-0">
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">internal audit</span>
          </CardTitle>
          <CardDescription>
            <span className="sentence">
              formula: Amount spent (Naira) - Amount spent (Trade) = Charges -
              Balance Status
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
      <ProfitTable data={profits} />
    </section>
  );
}
