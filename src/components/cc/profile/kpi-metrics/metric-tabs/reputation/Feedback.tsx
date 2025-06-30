import { Fragment } from "react";
import { ThumbsDown, ThumbsUp } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { CardFooter, CardHeader } from "@/components/ui/card";

import { feedbacks } from "@/examples/cc/profile/kpi-metrics/metric-tabs/reputation/feedbacks";

export function Feedback() {
  return (
    <div className="@container/grid">
      <div className="grid gap-3 grid-cols-12">
        {feedbacks.map((feedback, index) => (
          <Fragment key={index}>
            <div className="col-span-12 @lg/grid:col-span-6">
              <Card className="py-3 gap-3 shadow-none rounded-md">
                <CardHeader className="px-3">
                  <Button
                    disabled
                    variant="ghost"
                    className="gap-3 w-full h-auto justify-start !p-0 disabled:opacity-100"
                  >
                    {feedback.type === "positive" ? (
                      <ThumbsUp className="text-green-600" />
                    ) : (
                      <ThumbsDown className="text-red-600" />
                    )}
                    <p className="text-base font-semibold">
                      <span className="capitalize">
                        {feedback.type} feedbacks
                      </span>
                    </p>
                  </Button>
                </CardHeader>
                <CardContent className="px-3">
                  <h5 className="text-xl font-bold">
                    <span
                      className={cn(
                        "capitalize",
                        feedback.type === "positive"
                          ? "text-green-600"
                          : "text-red-600",
                      )}
                    >
                      {feedback.value}
                    </span>
                  </h5>
                  <p className="text-xs font-semibold">
                    <span className="capitalize text-muted-foreground">
                      {feedback.title}
                    </span>
                  </p>
                </CardContent>
                <CardFooter className="px-3 block space-y-1">
                  <Progress value={feedback.progress} />
                  <p className="text-xs font-semibold">
                    <span className="sentence text-muted-foreground">
                      {feedback.description}
                    </span>
                  </p>
                </CardFooter>
              </Card>
            </div>
          </Fragment>
        ))}
      </div>
    </div>
  );
}
