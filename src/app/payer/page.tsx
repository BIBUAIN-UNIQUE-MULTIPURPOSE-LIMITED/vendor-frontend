import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { CardFooter, CardHeader } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { bonusMetrics } from "@/examples/payer/bonusMetrics";

export default function Page() {
  return (
    <Card className="py-0 border-none shadow-none bg-transparent">
      <CardHeader className="px-0 gap-0">
        <CardTitle className="text-xl font-bold">
          <span className="capitalize">payer report</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="capitalize">
            shift performance &amp; bonus metrics
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-0">
        <div className="grid gap-3 grid-cols-12 @container/bonus-grid">
          {bonusMetrics.map((bonusMetric, index) => (
            <Fragment key={index}>
              <div className="col-span-12 @lg/bonus-grid:col-span-6 @4xl/bonus-grid:col-span-4 @5xl/bonus-grid:col-span-3">
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
      </CardContent>
    </Card>
  );
}
