import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { CardContent, CardDescription } from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectContent } from "@/components/ui/select";
import { SelectGroup, SelectItem } from "@/components/ui/select";
import {
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Shift() {
  return (
    <Card>
      <CardHeader className="gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">shift report</span>
        </CardTitle>
        <CardDescription className="text-base">
          <span className="sentence">
            25-06-10 | Morning Shift (08:00 AM - 04:00 PM)
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent className="@container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">staff name</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Type staff name here..."
              />
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">team lead</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full !h-auto">
                  <SelectValue placeholder="Select team lead" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-sm font-semibold">
                      <span className="capitalize">team leads</span>
                    </SelectLabel>
                    <SelectItem value="project-manager">
                      <span className="capitalize">project manager</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @xl/grid:col-span-6 @3xl/grid:col-span-4">
            <div className="space-y-1">
              <Label className="one-line text-base">
                <span className="capitalize">shift date</span>
              </Label>
              <Input
                type="text"
                className="p-3 w-full h-auto"
                placeholder="Type staff name here..."
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
