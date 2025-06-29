"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  ChevronDownIcon,
  CircleCheck,
  Clock4,
  MessageCircleMoreIcon,
  Save,
  Shield,
  TrendingUp,
} from "lucide-react";
import React from "react";

export const PayerSubmitShiftReport = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      <ShiftReport />
      <Punctuality />
      <TradeReport />
      <FinancialReport />
      <InternalAudit />
      <Comments />
      <ShiftSummary />

      <div className="p-6 flex flex-col md:flex-row items-start md:items-center gap-2 justify-between rounded-xl border">
        <div className="text-gray-500 flex items-center gap-2 flex-1 w-full text-base">
          <Clock4 className="size-4" />
          <p>Last saved: 12:38:26</p>
        </div>
        <div className="space-x-4 flex w-full md:w-fit">
          <Button className="w-full" variant="outline">
            <Save className="size-3" />
            Save Draft
          </Button>
          <Button className="w-full">
            <CircleCheck className="size-3" />
            Submit Report
          </Button>
        </div>
      </div>
    </div>
  );
};

const ShiftReport = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <div className="space-y-2">
          <CardTitle>Shift Report</CardTitle>
          <CardDescription>
            2025-06-02 • Morning Shift(8:00 AM - 4:00 PM)
          </CardDescription>
        </div>
        <div className="flex flex-col items-end text-gray-400">
          <Badge className="bg-gray-100 text-black">Draft</Badge>
          <p>Payer Report</p>
        </div>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label>Staff Name</Label>
          <Input placeholder="John Smith" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Role</Label>
          <Input placeholder="Payer" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Shift Date</Label>
          <DatePicker />
        </div>
      </CardContent>
    </Card>
  );
};

const Punctuality = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-3">
          <Clock4 />
          Punctuality
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col items-start gap-1">
          <Label>Clock-In Time</Label>
          <TimePicker />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Clock-Out Time</Label>
          <TimePicker />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Clock-Out Time</Label>
          <Input placeholder="e.g., 12:00-13:00" />
        </div>
      </CardContent>
    </Card>
  );
};

const TradeReport = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-3">
          <TrendingUp />
          Trade Report
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label>Total Trade Count</Label>
          <Input />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Coin Purchased</Label>
          <Input />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Escalated Trades</Label>
          <Input />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Amount Spent</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col col-span-2 items-start gap-2">
          <Label>Amount Speed (minutes/trade)</Label>
          <Input placeholder="" />
        </div>
      </CardContent>
    </Card>
  );
};
const FinancialReport = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-3">
          <TrendingUp />
          Finanacial Report
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label>Opening Balance (₦)</Label>
          <Input placeholder="₦500,000" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Inflow</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Reversals Paid</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Remove</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Discrepancies</Label>
          <Input placeholder="1" />
        </div>
        <div className="flex flex-col  items-start gap-2">
          <Label>Return Trade</Label>
          <Input placeholder="1" />
        </div>

        <div className="flex flex-col  items-start gap-2">
          <Label>Closing Balance (₦)</Label>
          <Input placeholder="Enter closing balance" />
        </div>
        <div className="flex flex-col  items-start gap-2">
          <Label>Amount Spent</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col  items-start gap-2">
          <Label>Banks Used</Label>
          <Input placeholder="e.g,. GTBank, Access Bank" />
        </div>
      </CardContent>
    </Card>
  );
};

const InternalAudit = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-3">
          <Shield />
          Internal Audit
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-4">
        <div className="flex flex-col items-start gap-1">
          <Label>Total Trade Amount Spent</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Total Naira Amount Spent</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Bank Charges</Label>
          <Input placeholder="₦0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>My Shift Accuracy (%)</Label>
          <Input placeholder="Balance" className="bg-green-100" />
        </div>
      </CardContent>
    </Card>
  );
};

const Comments = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg font-medium flex items-center gap-3">
          <MessageCircleMoreIcon />
          Comments & Issues
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1  gap-4">
        <div className="flex flex-col items-start gap-1">
          <Label>General Comments</Label>
          <Textarea
            className="resize-none"
            placeholder="Enter any general comments about the shift..."
          />
        </div>

        <div className="flex flex-col items-start gap-1">
          <Label>Issues Encountered</Label>
          <Textarea
            className="resize-none"
            placeholder="Describe any issues, problems, or challeneges faced during the shift..."
          />
        </div>
      </CardContent>
    </Card>
  );
};

const ShiftSummary = () => {
  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle className="font-medium">Shift Report</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex flex-col items-start gap-2">
          <Label>Punctuality</Label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Select Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="punctual">Punctual</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Completion Rate (%)</Label>
          <Input placeholder="0.00" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Average Speed</Label>
          <Input placeholder="2.4 min" />
        </div>
        <div className="flex flex-col items-start gap-2">
          <Label>Internal Audit Accuracy</Label>
          <Input placeholder="0.00" />
        </div>
      </CardContent>
    </Card>
  );
};

// ------------------------------------------------------------------
// ------------------------------------------------------------------
// ------------------------------------------------------------------

const DatePicker = () => {
  const [open, setOpen] = React.useState(false);
  // const [date, setDate] = React.useState<Date | undefined>(undefined)
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          id="date"
          className="w-full justify-between font-normal"
        >
          {/* {date ? date.toLocaleDateString() : "Select date"} */}
          {"Select date"}
          <ChevronDownIcon />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto overflow-hidden p-0" align="start">
        {/* <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date)
              setOpen(false)
            }}
          /> */}
      </PopoverContent>
    </Popover>
  );
};

const TimePicker = () => {
  return (
    <Input
      type="time"
      id="time-picker"
      step="1"
      defaultValue="10:30:00"
      className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none"
    />
  );
};
