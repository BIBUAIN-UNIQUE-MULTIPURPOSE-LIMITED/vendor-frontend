import { Fragment } from "react";
import { AlarmClock, Calendar, Loader } from "lucide-react";

import { Badge } from "@/components/shadcn/ui/badge";
import { Button } from "@/components/shadcn/ui/button";
import { CardFooter, CardHeader, CardTitle } from "@/components/shadcn/ui/card";
import {
  Card,
  CardContent,
  CardDescription,
} from "@/components/shadcn/ui/card";

import { metrics } from "./props";

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
        <Card className="@5xl/card:w-2xl">
          <CardContent className="space-y-5">
            {metrics.map((props, index) => (
              <Fragment key={index}>
                <div className="p-3 border space-y-2 rounded-lg">
                  <div className="flex gap-3 items-center justify-between">
                    <div className="flex-none">
                      <Button
                        disabled
                        variant="secondary"
                        className="disabled:opacity-100"
                      >
                        <Calendar />
                        <p className="text-xs">{props.date}</p>
                      </Button>
                    </div>
                    <div className="flex-none">
                      <Button
                        disabled
                        variant="secondary"
                        className="disabled:opacity-100"
                      >
                        <AlarmClock />
                        <p className="text-xs">
                          {props.timeIn} - {props.timeOut}
                        </p>
                      </Button>
                    </div>
                  </div>
                  <Badge className={`text-xs font-semibold ${props.tag.color}`}>
                    <span className="sentence">{props.tag.name}</span>
                  </Badge>
                </div>
              </Fragment>
            ))}
          </CardContent>
          <CardFooter className="block text-center">
            <Button size="lg" variant="outline" className="rounded-full">
              <Loader className="animated animate-spin" />
              <p className="text-sm font-semibold">
                <span className="capitalize">load more</span>
              </p>
            </Button>
          </CardFooter>
        </Card>
      </CardContent>
    </Card>
  );
}
