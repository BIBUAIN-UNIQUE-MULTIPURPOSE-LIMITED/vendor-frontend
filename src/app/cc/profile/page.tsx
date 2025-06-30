"use client";

import { Fragment } from "react";

import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent, TabsList } from "@/components/ui/tabs";

import { cn } from "@/lib/utils";

import { tabbs } from "@/examples/cc/profile";

export default function Page() {
  const defaultTab = tabbs[0].value;

  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardContent className="px-3">
        <Tabs defaultValue={defaultTab} className="space-y-3">
          <TabsList className="p-0 h-10 w-full bg-transparent">
            {tabbs.map((tabb, index) => (
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
          {tabbs.map((tabb, index) => (
            <Fragment key={index}>
              <TabsContent value={tabb.value}>
                <tabb.Component />
              </TabsContent>
            </Fragment>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
}
