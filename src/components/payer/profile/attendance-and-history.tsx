import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  attendanceMetrics,
  clockInHistory,
  flags,
  punctualityMetrics,
} from "@/examples/payer/history/history";
import { cn } from "@/lib/utils";
import { Clock4Icon, NotepadText } from "lucide-react";

export const PayerAttendanceAndHistory = () => {
  return (
    <div>
      <Tabs defaultValue="punctuality">
        <TabsList className="w-full flex ">
          <TabsTrigger
            value="punctuality"
            className="data-[state=active]:bg-primary capitalize data-[state=active]:text-white flex-1"
          >
            Punctuality
          </TabsTrigger>
          <TabsTrigger
            value="attendance"
            className="data-[state=active]:bg-primary capitalize data-[state=active]:text-white flex-1"
          >
            Attendance
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="punctuality"
          className="space-y-6 md:space-y-8 pt-4 md:pt-6"
        >
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {punctualityMetrics.map((metric, idx) => (
              <Card key={idx} className="shadow-none">
                <CardHeader className="flex-row justify-between items-center">
                  <CardDescription>{metric.title}</CardDescription>
                  <Clock4Icon className="text-gray-600 size-4" />
                </CardHeader>
                <CardContent>
                  <h4 className="font-bold text-lg">{metric.value}</h4>
                </CardContent>
                <CardFooter className="space-x-2 text-xs text-gray-600">
                  <span
                    className={cn("bg-blue-500 size-2 rounded-full", {
                      "bg-red-500": metric.subtitle.includes("Bad"),
                    })}
                  />
                  <span>{metric.subtitle}</span>
                </CardFooter>
              </Card>
            ))}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>Clock-in History</CardTitle>
              <CardDescription>Recent attendance records</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 lg:gap-6">
              {clockInHistory.map((date, idx) => (
                <div
                  key={idx}
                  className="border flex-1 p-4 flex items-center justify-between  w-full rounded"
                >
                  <div className="flex gap-4 items-center">
                    <NotepadText className="size-3.5" />
                    <p>{date.date}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock4Icon className="size-4 text-gray-500" />
                    <p>{date.time}</p>
                    <Badge
                      className={cn("text-[10px] px-4 text-white", {
                        "bg-red-500 ": date.punctuality === 0,
                        "bg-black ": date.punctuality === 1,
                        "text-black bg-gray-300": date.punctuality === 2,
                      })}
                    >
                      {date.label}
                    </Badge>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent
          value="attendance"
          className="space-y-6 md:space-y-8 pt-4 md:pt-6"
        >
          <div>
            <CardTitle className="mb-4 md:mb-6">Monthly Summary</CardTitle>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {attendanceMetrics.map((metric, idx) => (
                <Card key={idx} className="shadow-none">
                  <CardHeader className="flex-row justify-between items-center">
                    <CardDescription>{metric.title}</CardDescription>
                    <Clock4Icon className="text-gray-600 size-4" />
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-bold text-lg">{metric.value}</h4>
                  </CardContent>
                  <CardFooter className="space-x-2 text-xs text-gray-600">
                    <span
                      className={cn("bg-blue-500 size-2 rounded-full", {
                        "bg-red-500": metric.subtitle.includes("Bad"),
                      })}
                    />
                    <span>{metric.subtitle}</span>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>

          <Card className="p-4">
            <h4 className="text-base">Flags & Notes</h4>
            <div className="space-y-2 mt-4">
              {flags.map((flag, idx) => (
                <div
                  key={idx}
                  className={cn("text-sm font-normal rounded p-3", {
                    "bg-yellow-100/50": flag.severity === "low",
                    "bg-red-50": flag.severity === "mid",
                  })}
                >
                  {`${flag.date}: ${flag.reason} (${flag.notes})`}
                </div>
              ))}
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};
