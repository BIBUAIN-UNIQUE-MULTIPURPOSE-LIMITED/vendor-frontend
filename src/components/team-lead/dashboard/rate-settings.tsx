"use client";

import { Badge } from "@/components/ui/badge";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  coins,
  platforms,
} from "@/examples/temporary/dummy-data/rate-dashboard";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { cn } from "@/lib/utils";

import { TabsContent } from "@radix-ui/react-tabs";
import { ChevronDown, Plus, RefreshCcw } from "lucide-react";
import { CurrencyDropdown } from "../currency-dropdown-menu";
import { MyOffers } from "./my-offers";
import { CostPriceAnalysis } from "./cost-price-analysis";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectGroup } from "@radix-ui/react-select";

const RateSettings = () => {
  const [activeCoin, setActiveCoin] = useState<{
    name: string;
    symbol: string;
  } | null>(coins[0]);
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Rate Management Settings</h2>
      <Tabs
        defaultValue={coins[0].symbol}
        value={activeCoin?.symbol || "add"}
        className="flex-1 space-y-4"
      >
        {/* Top row: TabsList + Dropdown + Refresh Button */}
        <div className="flex items-start justify-between gap-4 flex-wrap">
          {/* mobile selector */}
          <DropdownMenu>
            <DropdownMenuTrigger
              className={cn(
                buttonVariants({ variant: "outline" }),
                "flex flex-1  items-center justify-between gap-2 md:hidden",
              )}
            >
              {activeCoin?.name || "Add Coin"} <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Select Coins</DropdownMenuLabel>
              {coins.map((coin) => (
                <DropdownMenuItem
                  key={coin.symbol}
                  onClick={() => setActiveCoin(coin)}
                >
                  {coin.name}
                </DropdownMenuItem>
              ))}
              <DropdownMenuItem
                onClick={() => setActiveCoin(null)}
                className="flex flex-col justify-center  items-center"
              >
                <Plus />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <TabsList className="hidden md:flex bg-white rounded border flex-1">
            {coins.map(({ name, symbol }) => (
              <TabsTrigger
                key={symbol}
                value={symbol}
                className="text-sm py-3 data-[state=active]:bg-primary data-[state=active]:text-white p-0 h-full flex-1 text-center rounded"
                onClick={() => setActiveCoin({ name, symbol })}
              >
                {name}
              </TabsTrigger>
            ))}
            <TabsTrigger
              onClick={() => setActiveCoin(null)}
              value="add"
              className="text-gray-950 rounded max-w-8"
            >
              +
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <CurrencyDropdown />
            <Button variant="outline" className="flex items-center gap-1">
              <RefreshCcw size={16} /> Refresh
            </Button>
          </div>
        </div>

        {/* Tab content below, full width */}
        {activeCoin && (
          <TabsContent value={activeCoin.symbol}>
            <div className="flex flex-col md:flex-row items-center w-full gap-4">
              {platforms.map((platform, idx) => (
                <PlatformRates key={idx} {...platform} />
              ))}
            </div>
            <div className="flex flex-col gap-10 my-10">
              <EditRate />
              <MyOffers coin={activeCoin?.symbol} />
              <CostPriceAnalysis />
            </div>
          </TabsContent>
        )}

        <TabsContent value="add">
          <div className="p-4 border rounded bg-primary text-white">
            Add new coin tab
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};
export default RateSettings;

type PlatformRatesProps = (typeof platforms)[0];
const PlatformRates = ({
  costPrice,
  currency,
  marketPrice,
  name,
  order,
  status,
}: PlatformRatesProps) => {
  const [activeStatus, setActiveStatus] = useState(
    status === "active" ? true : false,
  );
  return (
    <Card
      key={name}
      className="aspect-[1.75/1] flex-1 flex-col items-start flex justify-evenly"
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-sm tracking-tight leading-tight">
            {name}
          </h3>
          <span
            className={cn("capitalize", {
              "text-green-500": order === "buy",
              "text-red-500": order === "sell",
            })}
          >
            {order}
          </span>
        </div>
      </CardHeader>
      <CardContent>
        <div>
          <p className="text-xs font-light text-gray-700">
            Market Price ({currency})
          </p>
          <h4 className="font-bold">{formatCurrency(marketPrice, currency)}</h4>
        </div>
        <div>
          <div>
            <p className="text-xs font-light text-gray-700">Cost Price (NGN)</p>
            <h4 className="font-medium text-sm">
              {formatCurrency(costPrice, "NGN")}
            </h4>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center w-full justify-between">
        <Badge
          variant={activeStatus ? "success" : "destructive"}
          className="capitalize text-xs"
        >
          {activeStatus ? "active" : "inactive"}
        </Badge>
        <Switch
          id="status"
          checked={activeStatus}
          onClick={() => setActiveStatus(!activeStatus)}
        />
      </CardFooter>
    </Card>
  );
};

const EditRate = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm">All Platforms</p>
        <CurrencyDropdown />
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center">
            <div className="flex-1">
              <p className="text-xs font-light text-gray-700">USD Price</p>
              <h4 className="font-bold">{formatCurrency(64134, "USD")}</h4>
            </div>
            <div className="flex-1">
              <p className="text-xs font-light text-gray-700">NGN Price</p>
              <h4 className="font-bold">{formatCurrency(1000000, "NGN")}</h4>
            </div>
          </div>
        </div>
        <div>
          <h4 className="mb-2 font-medium">Markup Price</h4>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 flex flex-col gap-2 items-start">
              <Label
                htmlFor="markup-percentage"
                className="text-xs font-light text-gray-700 flex items-center w-full"
              >
                <span>Percentage (%)</span>
                <Badge variant="success" className="text-[10px] ml-2">
                  Active
                </Badge>
                <Switch id="markup-percentage-switch" className="ml-auto" />
              </Label>
              <Input
                id="markup-percentage"
                type="number"
                placeholder="Enter Markup Percentage"
                className="w-full"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2 items-start">
              <Label
                htmlFor="markup-naira"
                className="text-xs font-light text-gray-700 flex items-center w-full"
              >
                <span>Naira (₦)</span>
                <Badge variant="destructive" className="text-[10px] ml-2">
                  Inactive
                </Badge>
                <Switch id="markup-naira-switch" className="ml-auto" />
              </Label>
              <Input
                id="markup-naira"
                type="number"
                placeholder="Markup value in Naira"
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="mb-2 font-medium">Rate</h4>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1 flex flex-col gap-2 items-start">
              <Label
                htmlFor="buy-rate"
                className="text-xs font-light text-gray-700 flex items-center w-full"
              >
                <span>Buy Rate ($)</span>
                <Badge variant="success" className="text-[10px] ml-2">
                  Active
                </Badge>
                <Switch id="buy-rate-switch" className="ml-auto" />
              </Label>
              <Input
                id="buy-rate"
                type="number"
                placeholder="Set cost price in USD"
                className="w-full"
              />
            </div>

            <div className="flex-1 flex flex-col gap-2 items-start">
              <Label
                htmlFor="sell-rate"
                className="text-xs font-light text-gray-700 flex items-center w-full"
              >
                <span>Sell Rate (₦)</span>
                <Badge variant="destructive" className="text-[10px] ml-2">
                  Inactive
                </Badge>
                <Switch id="sell-rate-switch" className="ml-auto" />
              </Label>
              <Input
                id="sell-rate"
                type="number"
                placeholder="Set cost price in Naira"
                className="w-full"
              />
            </div>
          </div>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full">Apply to all Platforms</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Apply to Platform</DialogTitle>
              <DialogDescription>
                Select which platform you want to apply the current settings
              </DialogDescription>
            </DialogHeader>
            <div>
              <PlatformSelect />
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Apply to (0) Platforms</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export const PlatformSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-full">
        <SelectValue
          placeholder="Select Platform"
          className="placeholder:font-normal placeholder:text-black"
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Platforms</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          {platforms.map((platform) => (
            <SelectItem key={platform.name} value={platform.name}>
              {platform.name}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
