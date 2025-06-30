"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { histories } from "@/examples/cc/profile/kpi-metrics/metric-tabs/complaints/histories";

export function History() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">ticket history - complaint report</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">history data for complaint tickets</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <DataTable
          data={histories}
          columns={[
            {
              header: "Metric",
              accessorKey: "metric",
              cell: function ({ row }) {
                return (
                  <p className="text-sm font-semibold">
                    <span className="capitalize">{row.getValue("metric")}</span>
                  </p>
                );
              },
            },
            {
              header: "Count",
              accessorKey: "count",
            },
            {
              header: "Percentage",
              accessorKey: "percentage",
            },
            {
              header: "Status",
              accessorKey: "status",
              cell: function ({ row }) {
                return (
                  <Badge
                    className={`text-xs font-semibold rounded-full ${row.original.badge}`}
                  >
                    <span className="capitalize">{row.getValue("status")}</span>
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
