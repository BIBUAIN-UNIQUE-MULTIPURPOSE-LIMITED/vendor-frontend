import { Fragment } from "react";

import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent, TabsList } from "@/components/ui/tabs";

import { metricTabs } from "@/examples/cc/profile/kpi-metrics/metric-tabs";
import { cn } from "@/lib/utils";

export function MetricTabs() {
  const defaultTab = metricTabs[0].value;

  return (
    <Tabs defaultValue={defaultTab} className="space-y-3">
      <TabsList className="p-0 h-10 w-full bg-transparent">
        {metricTabs.map((tabb, index) => (
          <Fragment key={index}>
            <TabsTrigger
              asChild
              value={tabb.value}
              className={cn(
                "flex-1 border-none cursor-pointer !shadow-none !bg-transparent",
                "data-[state=active]:!text-white data-[state=active]:!bg-chart-4",
              )}
            >
              <p className="text-sm font-semibold">
                <span className="capitalize">{tabb.name}</span>
              </p>
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {metricTabs.map((metricTab, index) => (
        <Fragment key={index}>
          <TabsContent value={metricTab.value}>
            <metricTab.Component />
          </TabsContent>
        </Fragment>
      ))}
    </Tabs>
  );
}
