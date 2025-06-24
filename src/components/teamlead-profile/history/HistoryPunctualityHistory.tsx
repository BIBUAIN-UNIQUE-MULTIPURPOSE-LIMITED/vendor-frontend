import { Fragment } from "react";
import { AlarmClock, Calendar, Loader } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Card, CardContent, CardDescription } from "@/components/ui/card";

import { metrics } from "@/examples/team-lead/history/history-punctuality-history";

export function History() {
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
        <Card>
          <CardContent className="space-y-5">
            {metrics.map((props, index) => (
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
                            <span className="sentence text-gray-400">
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
            <Button size="lg" variant="outline" className="rounded-full">
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
