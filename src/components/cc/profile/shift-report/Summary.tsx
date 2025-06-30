import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup } from "@/components/ui/select";
import {
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

export function Summary() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <CardTitle className="text-xl font-semibold">
          <span className="capitalize">shift summary</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @md/grid:col-span-6 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">punctuality</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full shadow-none !h-auto !bg-transparent">
                  <SelectValue placeholder="Select punctuality..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xs font-semibold">
                      <span className="capitalize">punctualities</span>
                    </SelectLabel>
                    <SelectItem value="a" className="text-sm font-semibold">
                      <span className="capitalize">punctuality A</span>
                    </SelectItem>
                    <SelectItem value="b" className="text-sm font-semibold">
                      <span className="capitalize">punctuality B</span>
                    </SelectItem>
                    <SelectItem value="c" className="text-sm font-semibold">
                      <span className="capitalize">punctuality C</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">total open tickets</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">resolution rate (%)</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @xl/grid:col-span-6 @3xl/grid:col-span-4 @5xl/grid:col-span-3">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">average response time</span>
              </Label>
              <Input
                placeholder="Minutes"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
