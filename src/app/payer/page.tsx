import { Fragment } from "react";
import { RefreshCcw } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { CardFooter, CardHeader } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { PlatformInsight } from "@/components/payer/PlatformInsight";
import { TradePerformance } from "@/components/payer/TradePerformance";
import { TransactionInsight } from "@/components/payer/TransactionInsight";

import { bonusMetrics } from "@/examples/payer/bonusMetrics";

export default function Page() {
  return (
    <Card className="py-0 border-none shadow-none bg-transparent">
      <CardHeader className="px-0 gap-0">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex-none">
            <CardTitle className="text-xl font-bold">
              <span className="capitalize">payer report</span>
            </CardTitle>
            <CardDescription className="text-base">
              <span className="capitalize">
                shift performance &amp; bonus metrics
              </span>
            </CardDescription>
          </div>
          <div className="flex-none">
            <Button size="icon" variant="ghost" className="border">
              <RefreshCcw />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-0 space-y-6">
        <div className="grid gap-3 grid-cols-12 @container/shift-perf">
          {bonusMetrics.map((bonusMetric, index) => (
            <Fragment key={index}>
              <div className="col-span-12 @lg/shift-perf:col-span-6 @4xl/shift-perf:col-span-4 @5xl/shift-perf:col-span-3">
                <Card className="py-3 gap-4 shadow-none rounded-md">
                  <CardHeader className="px-4">
                    <Button
                      disabled
                      variant="ghost"
                      className="!p-0 h-auto justify-between disabled:opacity-100"
                    >
                      <p className="text-sm">
                        <span className="capitalize">
                          {bonusMetric.header.title}
                        </span>
                      </p>
                      <DynamicIcon
                        name={bonusMetric.header.iconName}
                        className={bonusMetric.header.iconColor}
                      />
                    </Button>
                  </CardHeader>
                  <CardContent className="px-4">
                    <Button
                      disabled
                      variant="ghost"
                      className="!p-0 h-auto w-full justify-between disabled:opacity-100"
                    >
                      <p className="text-2xl font-semibold">
                        <span className="capitalize">
                          {bonusMetric.content.value}
                        </span>
                      </p>
                      <Badge
                        className="border"
                        style={{
                          background: `rgba(var(${bonusMetric.content.badge.theme}-bg), .5)`,
                          borderColor: `rgba(var(${bonusMetric.content.badge.theme}-text), .3)`,
                        }}
                      >
                        <span
                          className="capitalize"
                          style={{
                            color: `rgb(var(${bonusMetric.content.badge.theme}-text))`,
                          }}
                        >
                          {bonusMetric.content.badge.name}
                        </span>
                      </Badge>
                    </Button>
                  </CardContent>
                  <CardFooter className="px-4">
                    <p className="text-sm text-muted-foreground">
                      <span
                        className="sentence"
                        style={{
                          color: `rgb(var(${bonusMetric.footer.theme}-text))`,
                        }}
                      >
                        {bonusMetric.footer.value}
                      </span>
                    </p>
                  </CardFooter>
                </Card>
              </div>
            </Fragment>
          ))}
        </div>
        <div className="grid gap-3 grid-cols-12 @container/bonus-grid">
          <div className="col-span-4">
            <TradePerformance />
          </div>
          <div className="col-span-4">
            <PlatformInsight />
          </div>
          <div className="col-span-4">
            <TransactionInsight />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
