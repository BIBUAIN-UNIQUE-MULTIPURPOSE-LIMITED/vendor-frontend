import {
  icons,
  performanceBoxes,
  performanceMetrics,
  profileInfo,
  weeklyPerformance,
} from "@/examples/payer/profile/profile";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { Badge } from "../../ui/badge";
import { Award } from "lucide-react";
import { cn } from "@/lib/utils";

import { Progress } from "../../ui/progress";

export const PayerProfile = () => {
  return (
    <div className="flex flex-col gap-4 lg:gap-6">
      <div className="md:p-6 md:py-6 gap-2 py-4 lg:gap-4 md:border rounded-xl flex items-center">
        <div>
          {/* users image placeholder */}
          <div className="aspect-square h-10 bg-red-600 rounded-full" />
        </div>
        <div className="flex flex-1 flex-col gap-2 text-gray-600 text-xs">
          <div className="flex items-start justify-between g">
            <div>
              <h3 className="text-base text-black">{profileInfo.name}</h3>
              <p>
                {profileInfo.role} - Level {profileInfo.level}
              </p>
            </div>
            <div className="flex flex-col items-start gap-1">
              {profileInfo.bonusEligible && (
                <Badge
                  className="flex rounded-full text-[10px]"
                  variant="success"
                >
                  {" "}
                  <Award />
                  Bonus Eligible{" "}
                </Badge>
              )}
              <p>
                Target Score: {profileInfo.targetScore.value}/
                {profileInfo.targetScore.max}
              </p>
            </div>
          </div>
          <div>
            <p>
              ID: {profileInfo.id} • Trading Operations • {profileInfo.shift}
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardTitle className="sm:sr-only text-xl">Summary Metrics</CardTitle>
        {performanceBoxes.map((box, id) => {
          const Icon = icons[box.icon];
          return (
            <Card key={id} className="shadow-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardDescription>{box.title}</CardDescription>
                <Icon className="size-4 text-gray-600" />
              </CardHeader>
              <CardContent>
                <h4
                  className={cn("text-xl font-bold", {
                    "text-red-500": box.value < 40,
                    "": box.value < 70,
                    "text-green-500": box.value >= 70,
                  })}
                >
                  {box.value}%
                </h4>
              </CardContent>
              <CardFooter className="flex items-center gap-2">
                <div
                  className={cn("size-2 rounded-full ", {
                    "bg-red-500": box.value < 40,
                    "bg-blue-500": box.value < 70 && box.value >= 40,
                    "bg-green-500": box.value >= 70,
                  })}
                />
                <p className="text-gray-600">{box.subtitle}</p>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      {/* weekly performance */}
      <Card className="shadow-none">
        <CardHeader>
          <CardHeader className="px-0 md:px-6">
            <CardTitle>Weekly Performance Breakdown</CardTitle>
          </CardHeader>
          <CardContent className="flex w-full p-0 md:px-6 flex-wrap gap-2 justify-between">
            {weeklyPerformance.map((perf, idx) => (
              <div
                key={idx}
                className="flex flex-1 flex-col items-center justify-between px-12 py-4 border"
              >
                <p className="text-sm">{perf.day}</p>
                <h4 className="text-lg">{perf.value}%</h4>
                <p className="text-[10px] text-gray-600">{perf.label}</p>
              </div>
            ))}
          </CardContent>
        </CardHeader>
      </Card>

      {/* performacnce metrics */}
      <Card className="shadow-none">
        <CardHeader>
          <CardTitle>Performance Metrics</CardTitle>
          <CardDescription>Key performacnce indicators</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-4 lg:gap-6">
          {performanceMetrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div className="flex items-center justify-between text-gray-600 text-xs ">
                <p>{metric.title}</p>
                <span>
                  {metric.value}% {metric.label}
                </span>
              </div>
              <Progress value={metric.value} className="w-full h-1" />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
};
