"use client";

import { cn } from "@/lib/utils";
import { CardContent } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

import { breakdowns } from "@/examples/cc/profile/kpi-metrics/metric-tabs/reputation/breakdowns";

export function Breakdown() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">feedback breakdown</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3">
        <DataTable
          data={breakdowns}
          columns={[
            {
              header: "Category",
              accessorKey: "Category",
              cell: function ({ row }) {
                return (
                  <p className="text-sm font-semibold">
                    <span className="capitalize">
                      {row.getValue("Category")}
                    </span>
                  </p>
                );
              },
            },
            {
              header: "Positive",
              accessorKey: "Positive",
              cell: function ({ row }) {
                const type = row.original.Type;

                return (
                  <p className="text-sm font-semibold">
                    <span
                      className={cn(
                        "capitalize",
                        type === "positive" && "text-green-600",
                      )}
                    >
                      {row.getValue("Positive")}
                    </span>
                  </p>
                );
              },
            },
            {
              header: "Negative",
              accessorKey: "Negative",
              cell: function ({ row }) {
                const type = row.original.Type;

                return (
                  <p className="text-sm font-semibold">
                    <span
                      className={cn(
                        "capitalize",
                        type === "positive" && "text-red-600",
                      )}
                    >
                      {row.getValue("Negative")}
                    </span>
                  </p>
                );
              },
            },
            {
              header: "Net Score",
              accessorKey: "NetScore",
              cell: function ({ row }) {
                const type = row.original.Type;

                return (
                  <p className="text-xs font-semibold">
                    <span className="capitalize">
                      {type === "positive" ? "+" : "-"}
                      {row.getValue("NetScore")}
                    </span>
                  </p>
                );
              },
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
