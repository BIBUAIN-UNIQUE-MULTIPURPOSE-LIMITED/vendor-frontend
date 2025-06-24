import { Fragment } from "react";

import { Tabs, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent, TabsList } from "@/components/ui/tabs";

import { tabs } from "@/examples/team-lead/shift/shift";

export function Shift() {
  return (
    <Tabs defaultValue={tabs[0].name}>
      <TabsList className="p-0 h-auto w-full border rounded-lg overflow-hidden">
        {tabs.map(({ name }, index) => (
          <Fragment key={index}>
            <TabsTrigger
              asChild
              value={name}
              className="py-2 border-none rounded-none bg-red-600"
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

// Shift Flow

import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ShiftFlow() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">shift evaluation & submission</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">review and submit your shift report</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <div>
          <div className="space-y-5">
            <div className="p-3 border bg-muted rounded-lg">
              <div className="space-y-2">
                <h5 className="text-base font-medium">
                  <span className="capitalize">report status</span>
                </h5>
                <div className="flex gap-3 items-center">
                  <div className="flex-none">
                    <Badge variant="outline">
                      <span className="capitalize">draft</span>
                    </Badge>
                  </div>
                  <div className="flex-none">
                    <p className="text-sm">
                      <span className="sentence">
                        last saved: 2 minutes ago
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <details open className="space-y-2">
              <summary className="text-base font-medium cursor-pointer">
                <span className="capitalize">pre-submission checklist</span>
              </summary>
              <div className="space-y-0">
                <Button
                  disabled
                  size="lg"
                  variant="ghost"
                  className="flex disabled:opacity-100"
                >
                  <CheckCircle className="text-chart-2" />
                  <p className="text-base text-muted-foreground">
                    <span className="sentence">financial data verified</span>
                  </p>
                </Button>
                <Button
                  disabled
                  size="lg"
                  variant="ghost"
                  className="flex disabled:opacity-100"
                >
                  <CheckCircle className="text-chart-2" />
                  <p className="text-base text-muted-foreground">
                    <span className="sentence">trade counts confirmed</span>
                  </p>
                </Button>
                <Button
                  disabled
                  size="lg"
                  variant="ghost"
                  className="flex disabled:opacity-100"
                >
                  <CheckCircle className="text-chart-2" />
                  <p className="text-base text-muted-foreground">
                    <span className="sentence">exceptions documented</span>
                  </p>
                </Button>
                <Button
                  disabled
                  size="lg"
                  variant="ghost"
                  className="flex disabled:opacity-100"
                >
                  <CheckCircle className="text-chart-2" />
                  <p className="text-base text-muted-foreground">
                    <span className="sentence">team performance reviewed</span>
                  </p>
                </Button>
              </div>
            </details>
            <div className="p-3 rounded-lg bg-orange-500/20">
              <p className="text-base">
                <span className="font-bold sentence">note:&nbsp;</span>
                <span className="sentence text-muted-foreground">
                  once submitted, this report will be locked and cannot be
                  edited until admin review is complete
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-3 justify-end">
        <div className="flex-none">
          <Button size="lg" variant="outline">
            <span className="capitalize">save & continue later</span>
          </Button>
        </div>
        <div className="flex-none">
          <Button size="lg" variant="default">
            <span className="capitalize">submit report</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}

// Shift Report

// import { ShiftReportRate } from "@/components/teamlead-profile/shift/ShiftReportRate";
// import { ShiftReportShift } from "@/components/teamlead-profile/shift/ShiftReportShift";
// import { ShiftReportProfit } from "@/components/teamlead-profile/shift/ShiftReportProfit";
// import { ShiftReportCharges } from "@/components/teamlead-profile/shift/ShiftReportCharges";
// import { ShiftReportConfirm } from "@/components/teamlead-profile/shift/ShiftReportConfirm";
// import { ShiftReportSummary } from "@/components/teamlead-profile/shift/ShiftReportSummary";
// import { ShiftReportComments } from "@/components/teamlead-profile/shift/ShiftReportComments";
// import { ShiftReportPunctuality } from "@/components/teamlead-profile/shift/ShiftReportPunctuality";

export function ShiftReport() {
  return (
    <section className="space-y-5">
      <ShiftReportShift />
      <ShiftReportPunctuality />
      <ShiftReportRate />
      <ShiftReportCharges />
      <ShiftReportProfit />
      <ShiftReportCharges />
      <ShiftReportComments />
      <ShiftReportSummary />
      <ShiftReportConfirm />
    </section>
  );
}

// Shift Report Charges

import { CircleDollarSign } from "lucide-react";

import { Input } from "@/components/ui/input";

export function ShiftReportCharges() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <CircleDollarSign className="!size-6" />
            <span className="text-xl capitalize font-semibold">charges</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  sendout count - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter sendout count"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  sendout amount - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter sendout amount"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  exchange charges - all platforms
                </span>
              </Label>
              <Input
                placeholder="Enter exchange charges"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total coins exchanged</span>
              </Label>
              <Input
                placeholder="Enter total coins exchanged"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  average exchange rate (across all platforms)
                </span>
              </Label>
              <Input
                placeholder="Enter average exchange"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Comments

import { MessageSquareMore } from "lucide-react";

import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export function ShiftReportComments() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <MessageSquareMore className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              comments & recommendation
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">general comments</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Enter any general comments about the shift..."
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">issues encountered</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Describe any issues, problems, or challenges faced during the shift..."
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">recommendations</span>
              </Label>
              <Textarea
                className="p-3 h-36 w-full no-apperance"
                placeholder="Suggest improvements or recommendations for future shifts..."
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Confirm

import { AlarmClock, Save } from "lucide-react";

export function ShiftReportConfirm() {
  return (
    <Card className="py-3">
      <CardContent className="@container/grid">
        <div className="flex gap-3 items-center justify-between">
          <div className="flex-none">
            <Button
              disabled
              size="lg"
              variant="ghost"
              className="!p-0 !h-auto disabled:opacity-100"
            >
              <AlarmClock />
              <p className="text-sm font-semibold">
                <span className="capitalize">last saved: 12:38:26</span>
              </p>
            </Button>
          </div>
          <div className="flex-none">
            <div className="flex gap-3 items-center md:justify-end">
              <div className="flex-none">
                <Button size="lg" variant="outline">
                  <Save />
                  <p className="text-sm font-semibold">
                    <span className="capitalize">save draft</span>
                  </p>
                </Button>
              </div>
              <div className="flex-none">
                <Button size="lg" variant="default">
                  <p className="text-sm font-semibold">
                    <span className="capitalize">submit report</span>
                  </p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Profit

import { TrendingUp } from "lucide-react";

export function ShiftReportProfit() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <TrendingUp className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              profit declaration report
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total declaration</span>
              </Label>
              <Input
                placeholder="Enter total declaration"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">amount purchase</span>
              </Label>
              <Input
                placeholder="Enter amount purchase"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">margin</span>
              </Label>
              <Input
                placeholder="Enter margin"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">realized profit</span>
              </Label>
              <Input
                placeholder="Enter realized profit"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">
                  balance / not balance indicator
                </span>
              </Label>
              <Input
                placeholder="Enter average exchange"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Puncutality

export function ShiftReportPunctuality() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <AlarmClock className="!size-6" />
            <span className="text-xl capitalize font-semibold">
              punctuality
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">clock-in time</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">clock-out time</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">break times</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Eg.: 13:00 - 14:00"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Rate

export function ShiftReportRate() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <TrendingUp className="!size-6" />
            <span className="text-xl capitalize font-semibold">rate</span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-5 @container/grid">
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-12">
            <p className="text-lg font-semibold">
              <span className="capitalize text-muted-foreground">
                average cost price
              </span>
            </p>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
        <div className="grid gap-5 grid-cols-12">
          <div className="col-span-12">
            <p className="text-lg font-semibold">
              <span className="capitalize text-muted-foreground">
                average selling price
              </span>
            </p>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">BTC/USDT (all platforms)</span>
              </Label>
              <Input
                placeholder="Enter average cost price"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
          <div className="col-span-12">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">average markup rate (%)</span>
              </Label>
              <Input
                placeholder="Enter markup rate"
                className="p-3 w-full h-auto no-apperance"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Shift

import { Select, SelectContent } from "@/components/ui/select";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import {
  SelectLabel,
  SelectValue,
  SelectTrigger,
} from "@/components/ui/select";

export function ShiftReportShift() {
  return (
    <Card>
      <CardHeader className="flex gap-0 items-center justify-between">
        <div className="flex-1">
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">shift report</span>
          </CardTitle>
          <CardDescription className="text-base">
            <span className="sentence">
              25-06-10 | Morning Shift (08:00 AM - 04:00 PM)
            </span>
          </CardDescription>
        </div>
        <div className="flex-none">
          <div className="text-right">
            <Badge variant="secondary" className="text-xs">
              <span className="capitalize">draft</span>
            </Badge>
            <p className="text-sm">
              <span className="capitalize text-muted-foreground">
                team lead
              </span>
            </p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">staff name</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Type staff name here..."
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">team lead</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full !h-auto">
                  <SelectValue placeholder="Select team lead" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-sm font-semibold">
                      <span className="capitalize">team leads</span>
                    </SelectLabel>
                    <SelectItem value="project-manager">
                      <span className="capitalize">project manager</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">shift date</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Type staff name here..."
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Report Summary

export function ShiftReportSummary() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle>
          <Button
            disabled
            variant="ghost"
            className="!p-0 h-auto disabled:opacity-100"
          >
            <span className="text-xl capitalize font-semibold">
              shift summary
            </span>
          </Button>
        </CardTitle>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">punctuality status</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full !h-auto">
                  <SelectValue placeholder="Select punctuality status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-sm font-semibold">
                      <span className="capitalize">status</span>
                    </SelectLabel>
                    <SelectItem value="project-manager">
                      <span className="capitalize">punctual</span>
                    </SelectItem>
                    <SelectItem value="project-manager">
                      <span className="capitalize">non-punctual</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">total coin purchased</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">average cost rate</span>
              </Label>
              <Input
                step="1"
                type="time"
                defaultValue="10:30:00"
                className="p-3 w-full h-auto bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="text-base">
                <span className="capitalize">average markup rate (%)</span>
              </Label>
              <Input
                className="p-3 w-full h-auto no-apperance"
                placeholder="Auto-calculated from rate section"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Statistics

export function ShiftStatistics() {
  return (
    <section className="space-y-5">
      <ShiftStatisticsSummary />
      <ShiftStatisticsUsage />
    </section>
  );
}

// Shift Statistics Summary

import { DynamicIcon } from "lucide-react/dynamic";

import { summaryMetrics } from "@/examples/team-lead/shift/shift-statistics-summary";

export function ShiftStatisticsSummary() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">team summary</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            overview of team shift for the current month.
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/grid">
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
                    <h3 className="text-xl font-semibold">
                      <span className="capitalize">{props.amount}</span>
                    </h3>
                    <p className="text-sm font-semibold">
                      <span className="sentence text-muted-foreground">
                        {props.subtitle}
                      </span>
                    </p>
                  </CardContent>
                </Card>
              </div>
            </Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

// Shift Statistics Usage

import { usageMetrics } from "@/examples/team-lead/shift/shift-statistics-usage";

export function ShiftStatisticsUsage() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">bank usage summary</span>
        </CardTitle>
        <CardDescription className="text-sm">
          <span className="sentence">banks used during shift</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <div>
          <div className="space-y-3">
            {usageMetrics.map((props, index) => (
              <Fragment key={index}>
                <div className="p-3 border space-y-2 rounded-lg">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-1">
                      <h5 className="text-base font-semibold">
                        <span className="capitalize">{props.bank}</span>
                      </h5>
                      <p className="text-sm font-semibold">
                        <span className="capitalize text-muted-foreground">
                          {props.description}
                        </span>
                      </p>
                    </div>
                    <div className="flex-none">
                      <Badge variant="outline">{props.percentage}</Badge>
                    </div>
                  </div>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
