import { ThumbsUp } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectGroup } from "@/components/ui/select";
import {
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function Reputation() {
  return (
    <Card className="py-3 gap-3 shadow-none rounded-md">
      <CardHeader className="px-3 gap-0">
        <Button
          disabled
          variant="ghost"
          className="h-auto justify-start !p-0 disabled:opacity-100"
        >
          <ThumbsUp className="size-6" />
          <CardTitle className="text-xl font-semibold">
            <span className="capitalize">reputation report</span>
          </CardTitle>
        </Button>
      </CardHeader>
      <CardContent className="px-3 @container/grid">
        <div className="grid gap-3 grid-cols-12">
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4 @4xl/grid:col-span-6">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">total positive feedback</span>
              </Label>
              <Input
                placeholder=""
                className="p-3 h-auto shadow-none !bg-transparent"
              />
              <Label className="text-xs">
                <span className="capitalize text-green-600">
                  auto-counted from system
                </span>
              </Label>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4 @4xl/grid:col-span-6">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">total negative feedback</span>
              </Label>
              <Input
                placeholder="E.g.: 2/5"
                className="p-3 h-auto shadow-none !bg-transparent"
              />
              <Label className="text-xs">
                <span className="capitalize text-red-600">
                  requires attention
                </span>
              </Label>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4 @4xl/grid:col-span-6">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">platform breakdown</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full shadow-none !h-auto !bg-transparent">
                  <SelectValue placeholder="Select platform..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xs font-semibold">
                      <span className="capitalize">platforms</span>
                    </SelectLabel>
                    <SelectItem value="a" className="text-sm font-semibold">
                      <span className="capitalize">Platform A</span>
                    </SelectItem>
                    <SelectItem value="b" className="text-sm font-semibold">
                      <span className="capitalize">Platform B</span>
                    </SelectItem>
                    <SelectItem value="c" className="text-sm font-semibold">
                      <span className="capitalize">Platform C</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="col-span-12 @md/grid:col-span-6 @2xl/grid:col-span-4 @4xl/grid:col-span-6">
            <div className="space-y-0.5">
              <Label className="text-sm font-semibold">
                <span className="capitalize">platform breakdown</span>
              </Label>
              <Select>
                <SelectTrigger className="p-3 w-full shadow-none !h-auto !bg-transparent">
                  <SelectValue placeholder="Select platform..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel className="text-xs font-semibold">
                      <span className="capitalize">platforms</span>
                    </SelectLabel>
                    <SelectItem value="a" className="text-sm font-semibold">
                      <span className="capitalize">Platform A</span>
                    </SelectItem>
                    <SelectItem value="b" className="text-sm font-semibold">
                      <span className="capitalize">Platform B</span>
                    </SelectItem>
                    <SelectItem value="c" className="text-sm font-semibold">
                      <span className="capitalize">Platform C</span>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
