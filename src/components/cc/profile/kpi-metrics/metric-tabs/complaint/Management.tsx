"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { managements } from "@/examples/cc/profile/kpi-metrics/metric-tabs/complaints/managements";

export function Management() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">complaint management overview</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">
            comprehensive complaint handling metrics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <DataTable
          data={managements}
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
              header: "Complaint",
              accessorKey: "complaint",
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
                    className={`text-xs ${row.original.badge} rounded-full font-semibold`}
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
