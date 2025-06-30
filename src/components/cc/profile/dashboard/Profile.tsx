import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

export function Profile() {
  return (
    <Card className="py-3 shadow-none rounded-md">
      <CardContent className="px-3 @container/flex">
        <div className="flex gap-3 flex-col justify-between @xl/flex:flex-row @xl/flex:items-center">
          <div className="flex-1">
            <div className="flex gap-3 flex-col @lg/flex:flex-row @lg/flex:items-center">
              <div className="flex-none">
                <Avatar className="z-0 size-14 relative">
                  <AvatarImage
                    alt="User Avatar"
                    src="https://avatars.githubusercontent.com/u/100626?v=4"
                  />
                  <AvatarFallback className="text-sm font-semibold">
                    <span className="uppercase">tma</span>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="flex-1">
                <div className="space-y-2">
                  <div>
                    <h5 className="text-base font-semibold">
                      <span className="capitalize">john smith</span>
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      <span className="capitalize">payer - level 3</span>
                    </p>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    <span className="capitalize">
                      ID: EMP001 &bull; trading operations &bull; morning (8AM -
                      4PM)
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-none">
            <div className="space-y-1">
              <Badge className="text-green-600 bg-green-600/20">
                <Award />
                <p className="text-xs font-semibold">
                  <span className="capitalize">bonus eligible</span>
                </p>
              </Badge>
              <p className="text-sm font-normal">
                <span className="sentence text-muted-foreground">
                  target score: 85/100
                </span>
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
