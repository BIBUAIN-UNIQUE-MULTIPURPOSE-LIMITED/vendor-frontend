import { AppWindow } from "lucide-react";

import { Button } from "@/components/ui/button";
import { CardHeader } from "@/components/ui/card";
import { Card, CardContent } from "@/components/ui/card";

export function PlatformInsight() {
  return (
    <Card className="py-3 gap-4 h-full shadow-none rounded-md">
      <CardHeader className="px-4">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <AppWindow className="text-yellow-500" />
          <p className="text-base font-semibold">
            <span className="capitalize">platform insight</span>
          </p>
        </Button>
      </CardHeader>
      <CardContent className="px-4">
        <table className="w-full table-auto">
          <tbody>
            <tr className="h-9">
              <th colSpan={2} className="w-full">
                <p className="text-left font-normal">
                  <span className="capitalize text-muted-foreground">
                    trade by platform
                  </span>
                </p>
              </th>
            </tr>
            <tr className="h-9">
              <th colSpan={2} className="w-full">
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="py-1 h-auto w-full"
                    >
                      <div className="text-center">
                        <h5 className="text-sm font-bold">
                          <span className="capitalize">12</span>
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          <span className="capitalize">paxful</span>
                        </p>
                      </div>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="py-1 h-auto w-full"
                    >
                      <div className="text-center">
                        <h5 className="text-sm font-bold">
                          <span className="capitalize">8</span>
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          <span className="capitalize">noones</span>
                        </p>
                      </div>
                    </Button>
                  </div>
                  <div className="flex-1">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="py-1 h-auto w-full"
                    >
                      <div className="text-center">
                        <h5 className="text-sm font-bold">
                          <span className="capitalize">8</span>
                        </h5>
                        <p className="text-sm text-muted-foreground">
                          <span className="capitalize">byBit</span>
                        </p>
                      </div>
                    </Button>
                  </div>
                </div>
              </th>
            </tr>
            <tr className="h-9">
              <th className="w-7/12">
                <p className="text-left font-normal">
                  <span className="capitalize text-muted-foreground">
                    total coin purchased
                  </span>
                </p>
              </th>
              <td className="w-5/12">
                <p className="text-right font-semibold">1.245 BTC</p>
              </td>
            </tr>
            <tr className="h-9">
              <th className="w-7/12">
                <p className="text-left font-normal">
                  <span className="capitalize text-muted-foreground">
                    BTC in wallet
                  </span>
                </p>
              </th>
              <td className="w-5/12">
                <p className="text-right font-semibold">1.245 BTC</p>
              </td>
            </tr>
          </tbody>
        </table>
      </CardContent>
    </Card>
  );
}
