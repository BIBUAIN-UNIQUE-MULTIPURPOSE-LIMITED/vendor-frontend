import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";

import { recommends } from "@/examples/cc/profile/kpi-metrics/metric-tabs/dispute/recommends";
import { Fragment } from "react";

export function RWP() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">RWP &amp; recommendation</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <div className="space-y-5">
          <div className="p-3 border bg-[#EFF6FF] rounded-md">
            <p className="text-base font-semibold">
              <span className="capitalize">RWP cases</span>
            </p>
          </div>
          <div className="p-3 border bg-[#F9FAFB] rounded-md">
            <div className="space-y-5">
              <p className="text-base font-semibold">
                <span className="capitalize">latest recommendation:</span>
              </p>
              <ul className="list-disc list-inside space-y-2">
                {recommends.map((recommend, index) => (
                  <Fragment key={index}>
                    <li className="text-sm font-semibold">
                      <span className="sentence">{recommend}</span>
                    </li>
                  </Fragment>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
