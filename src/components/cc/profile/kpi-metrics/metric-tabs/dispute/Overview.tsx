"use client";

import { Badge } from "@/components/ui/badge";
import { DataTable } from "@/components/ui/data-table";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { overviews } from "@/examples/cc/profile/kpi-metrics/metric-tabs/dispute/overviews";

export function Overview() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">dispute metrics overview</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">
            dispute handling and resolution metrics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-3">
        <DataTable
          data={overviews}
          columns={[
            {
              header: "Dispute Type",
              accessorKey: "DisputeType",
              cell: function ({ row }) {
                return (
                  <p className="text-sm font-semibold">
                    <span className="capitalize">
                      {row.getValue("DisputeType")}
                    </span>
                  </p>
                );
              },
            },
            {
              header: "Total Open",
              accessorKey: "TotalOpen",
            },
            {
              header: "Won",
              accessorKey: "Won",
            },
            {
              header: "Lost",
              accessorKey: "Lost",
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
