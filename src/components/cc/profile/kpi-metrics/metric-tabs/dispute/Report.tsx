"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { reports } from "@/examples/cc/profile/kpi-metrics/metric-tabs/dispute/reports";

export function Report() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">ticket history - dispute report</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">
            historical data for complaint tickets
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <DataTable
          data={reports}
          columns={[
            {
              header: "Metric",
              accessorKey: "Metric",
              cell: function ({ row }) {
                return (
                  <p className="text-sm font-semibold">
                    <span className="capitalize">{row.getValue("Metric")}</span>
                  </p>
                );
              },
            },
            {
              header: "Count",
              accessorKey: "Count",
            },
            {
              header: "Percentage",
              accessorKey: "Percentage",
            },
            {
              header: "Status",
              accessorKey: "Status",
              cell: function ({ row }) {
                return (
                  <Badge
                    className={`text-xs font-semibold rounded-full ${row.original.Badge}`}
                  >
                    <span className="capitalize">{row.getValue("Status")}</span>
                  </Badge>
                );
              },
            },
          ]}
        />
      </CardContent>
    </Card>
  );
}
