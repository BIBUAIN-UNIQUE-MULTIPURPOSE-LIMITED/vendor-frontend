import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export function Flow() {
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
        <div className="@5xl/card:w-2xl">
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
            <div className="p-3 border bg-chart-3/5 rounded-lg">
              <p className="text-base">
                <span className="font-bold sentence">note</span>
                <span className="sentence text-muted-foreground">
                  once submitted, this report will be locked and cannot be
                  edited until admin review is complete
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
