export function Profile() {
  return (
    <section className="space-y-5">
      <ProfileSummary />
      <ProfilePerformance />
    </section>
  );
}

// Profile Summary

import { Fragment } from "react";
import { DynamicIcon } from "lucide-react/dynamic";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/profile/profile-summary";

export function ProfileSummary() {
  return (
    <div className="@container/grid mt-5">
      <div className="grid gap-5 grid-cols-12">
        {metrics.map((props, index) => (
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
                  <h3 className="text-sm font-semibold">
                    <span className="sentence text-muted-foreground">
                      {props.subtitle}
                    </span>
                  </h3>
                </CardContent>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}

// Profile Summary

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

import { performanceMetrics } from "@/examples/team-lead/profile/profile-performance";

export function ProfilePerformance() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">performance metrics</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">key performance metrics</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/card">
        <Card>
          <CardContent className="space-y-5">
            {performanceMetrics.map((props, index) => (
              <Fragment key={index}>
                <div className="space-y-2">
                  <div className="flex gap-5 items-center justify-between">
                    <div className="flex-none">
                      <Button
                        disabled
                        variant="ghost"
                        className="!p-0 h-auto disabled:opacity-100"
                      >
                        <DynamicIcon
                          name={props.iconName}
                          className={`size-5 ${props.color}`}
                        />
                        <p className="text-sm font-semibold">
                          <span className="capitalize">{props.title}</span>
                        </p>
                      </Button>
                    </div>
                    <div className="flex-none">
                      <p className="text-xs font-semibold">
                        <span className="capitalize text-muted-foreground">
                          {props.progress}
                        </span>
                      </p>
                    </div>
                  </div>
                  <Progress value={Math.floor(Math.random() * 101)} />
                  <p className="text-xs font-normal">
                    <span className="capitalize text-muted-foreground">
                      {props.target}
                    </span>
                  </p>
                </div>
              </Fragment>
            ))}
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
}
