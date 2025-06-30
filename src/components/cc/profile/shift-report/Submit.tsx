import { Fragment } from "react";
import { AlarmClock, CheckCircle, Save, TriangleAlert } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { submits } from "@/examples/cc/profile/shift-report/submits";

import { cn } from "@/lib/utils";

export function Submit() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardContent className="px-3 space-y-5">
        <div className="@container/grid">
          <div className="grid gap-3 grid-cols-12">
            {submits.map((submit, index) => (
              <Fragment key={index}>
                <div className="col-span-12 @md/grid:col-span-6 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
                  <Card className="py-3 gap-0 text-center shadow-none rounded-md">
                    <CardHeader className="px-3">
                      <p className="text-lg font-semibold">
                        <span className={cn("capitalize", submit.color)}>
                          {submit.title}
                        </span>
                      </p>
                    </CardHeader>
                    <CardContent className="px-3">
                      <p className="text-sm">
                        <span className="capitalize text-muted-foreground">
                          {submit.description}
                        </span>
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </Fragment>
            ))}
          </div>
        </div>
        <div className="@container/flex">
          <div className="flex gap-3 flex-col justify-between @lg/flex:flex-row @lg/flex:items-center">
            <div className="flex-none">
              <Button
                disabled
                variant="ghost"
                className="h-auto text-muted-foreground !p-0 disabled:opacity-100"
              >
                <AlarmClock />
                <p className="text-sm font-bold">
                  <span className="capitalize">last saved: 12:20:45</span>
                </p>
              </Button>
            </div>
            <div className="flex-none">
              <div className="flex gap-3 items-center">
                <div className="flex-none">
                  <Button
                    variant="outline"
                    className="py-3 h-auto shadow-none !px-5"
                  >
                    <Save />
                    <p className="text-sm font-semibold">
                      <span className="capitalize">save draft</span>
                    </p>
                  </Button>
                </div>
                <div className="flex-none">
                  <Button
                    variant="default"
                    className="py-3 h-auto shadow-none !px-5"
                  >
                    <CheckCircle />
                    <p className="text-sm font-semibold">
                      <span className="capitalize">submit report</span>
                    </p>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Alert className="border bg-[#FEFCE8] text-[#854D0E]">
          <TriangleAlert />
          <AlertTitle className="text-sm font-semibold">
            <span className="sentence">
              please ensure all required fields are completed before submitting
              the report.
            </span>
          </AlertTitle>
        </Alert>
      </CardContent>
    </Card>
  );
}
