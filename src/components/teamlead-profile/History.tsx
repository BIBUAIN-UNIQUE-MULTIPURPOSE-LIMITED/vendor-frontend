import { Fragment } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent, TabsList } from "@/components/ui/tabs";

import { tabs } from "@/examples/team-lead/history/history";

export function History() {
  return (
    <Tabs defaultValue={tabs[0].name}>
      <TabsList className="p-0 h-auto w-full border rounded-lg overflow-hidden">
        {tabs.map(({ name }, index) => (
          <Fragment key={index}>
            <TabsTrigger
              asChild
              value={name}
              className="py-2 flex-1 border-none rounded-none"
            >
              <Button size="lg" variant="secondary">
                <p className="text-sm font-semibold">
                  <span className="one-line capitalize">{name}</span>
                </p>
              </Button>
            </TabsTrigger>
          </Fragment>
        ))}
      </TabsList>
      {tabs.map(({ name, Component }, index) => (
        <Fragment key={index}>
          <TabsContent value={name}>
            <Component />
          </TabsContent>
        </Fragment>
      ))}
    </Tabs>
  );
}

// History Attendance

export function HistoryAttendance() {
  return (
    <section className="space-y-5">
      <HistorySummary />
      <HistoryNotes />
    </section>
  );
}

// History Attendance Notes

import { CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { noteMetrics } from "@/examples/team-lead/history/history-attendance-notes";

export function HistoryNotes() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">flags & notes</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/card">
        <div>
          <div className="space-y-3">
            {noteMetrics.map((props, index) => (
              <Fragment key={index}>
                <div
                  className="p-3 space-y-2 rounded-lg"
                  style={{
                    background: props.color,
                  }}
                >
                  <p className="text-base">
                    <span className="sentence font-semibold">
                      {props.date}:&nbsp;
                    </span>
                    <span className="sentence text-muted-foreground">
                      {props.description}
                    </span>
                  </p>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// History Attendance Summary

import { Circle } from "lucide-react";
import { DynamicIcon } from "lucide-react/dynamic";

import { summaryMetrics } from "@/examples/team-lead/history/history-attendance-summary";

export function HistorySummary() {
  return (
    <div className="space-y-3">
      <div className="text-xl font-semibold">
        <span className="capitalize">monthly summary</span>
      </div>
      <div className="@container/grid">
        <div className="grid gap-5 grid-cols-12">
          {summaryMetrics.map((props, index) => (
            <Fragment key={index}>
              <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
                <Card className="py-3">
                  <CardHeader className="px-3 block">
                    <div className="flex gap-3 items-center justify-between">
                      <div className="flex-1">
                        <p className="text-sm font-semibold">
                          <span className="one-line capitalize">
                            {props.title}
                          </span>
                        </p>
                      </div>
                      <div className="flex-none">
                        <DynamicIcon size={18} name={props.iconName} />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="px-3 block">
                    <h3 className="mb-1 text-xl font-semibold">
                      <span className="capitalize">{props.amount}</span>
                    </h3>
                    <Button
                      disabled
                      variant="ghost"
                      className="!p-0 h-auto bg-transparent disabled:opacity-100"
                    >
                      <Circle
                        className="stroke-none"
                        style={{
                          fill: props.colorVar,
                        }}
                      />
                      <h3 className="text-sm font-semibold">
                        <span className="sentence text-muted-foreground">
                          {props.subtitle}
                        </span>
                      </h3>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

//History Punctuality

export function HistoryPunctuality() {
  return (
    <section className="space-y-5">
      <HistoryPunctualitySummary />
      <HistoryPunctualityHistory />
    </section>
  );
}

// History Punctiality Summary

import { punctualMetrics } from "@/examples/team-lead/history/history-punctuality-summary";

export function HistoryPunctualitySummary() {
  return (
    <div className="@container/grid mt-5">
      <div className="grid gap-5 grid-cols-12 @6xl/grid:grid-cols-10">
        {punctualMetrics.map((props, index) => (
          <Fragment key={index}>
            <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3 @6xl/grid:col-span-2">
              <Card className="py-3">
                <CardHeader className="px-3 block">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-1">
                      <p className="text-sm font-semibold">
                        <span className="one-line capitalize">
                          {props.title}
                        </span>
                      </p>
                    </div>
                    <div className="flex-none">
                      <DynamicIcon size={18} name={props.iconName} />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="px-3 block">
                  <h3 className="mb-1 text-xl font-semibold">
                    <span className="capitalize">{props.amount}</span>
                  </h3>
                  <Button
                    disabled
                    variant="ghost"
                    className="!p-0 h-auto bg-transparent disabled:opacity-100"
                  >
                    <Circle
                      className="stroke-none"
                      style={{
                        fill: props.colorVar,
                      }}
                    />
                    <h3 className="text-sm font-semibold">
                      <span className="sentence text-muted-foreground">
                        {props.subtitle}
                      </span>
                    </h3>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// History Punctuality History

import { AlarmClock, Calendar, Loader } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { CardFooter } from "@/components/ui/card";

import { hphMetrics } from "@/examples/team-lead/history/history-punctuality-history";

export function HistoryPunctualityHistory() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">clock-in history</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">recent attendance records</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card className="p-0 border-none shadow-none">
          <CardContent className="px-0 space-y-5">
            {hphMetrics.map((props, index) => (
              <Fragment key={index}>
                <div className="p-3 border rounded-lg">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-none">
                      <Button
                        disabled
                        variant="ghost"
                        className="!p-0 h-auto !bg-transparent disabled:opacity-100"
                      >
                        <Calendar />
                        <p className="text-xs">{props.date}</p>
                      </Button>
                    </div>
                    <div className="flex-none">
                      <div className="flex items-center gap-3">
                        <div className="flex-none">
                          <Button
                            disabled
                            variant="ghost"
                            className="!p-0 h-auto !bg-transparent disabled:opacity-100"
                          >
                            <AlarmClock />
                            <p className="text-xs">
                              {props.timeIn} - {props.timeOut}
                            </p>
                          </Button>
                        </div>
                        <div className="flex-none">
                          <Badge
                            className={`text-xs font-semibold ${props.tag.color}`}
                          >
                            <span className={`sentence ${props.tag.text}`}>
                              {props.tag.name}
                            </span>
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </CardContent>
          <CardFooter className="block text-center">
            <Button size="lg" variant="link" className="rounded-full">
              <Loader className="hidden animated animate-spin" />
              <p className="text-sm font-semibold">
                <span className="capitalize">load more records</span>
              </p>
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}
