"use client";

import { Badge } from "@/components/ui/badge";

import { Ticket } from "./ticket";
import { LucideAlarmClock } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectLabel } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { ChatInterface } from "./chat-interface";
import { TradeDetail } from "@/examples/customer-care/inbox/trade-details";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { tickets, TicketStatus } from "@/examples/customer-care/inbox/ticket";
import { formatCurrency } from "@/lib/utilities/formatCurrency";

export const CCInbox = () => {
  const [ticketStatus, setTicketStatus] = useState<TicketStatus>("Paid");
  const [isOpenTradeDetails, setIsOpenTradeDetails] = useState(false);
  return (
    <div className="bg-white flex h-full items-start">
      <div className="divide-y h-full hidden md:block overflow-hidden px-2">
        {/* ticket */}
        <h3 className="text-xl font-medium pb-2 text-center ">Ticket</h3>
        <Ticket setTicketStatus={setTicketStatus} ticketStatus={ticketStatus} />
      </div>
      <div className="flex-1 flex flex-col h-full text-gray-600">
        <div className="border-b text-[10px] px-2.5 py-2 gap-2 lg:gap-4 flex items-center justify-between">
          <div className="flex items-start flex-col justify-between  gap-1.5">
            <h4 className="text-sm font-medium text-black">PaxfulAgent001</h4>
            <p>Paid: Aisha Vendor</p>
          </div>
          <div className="hidden md:flex flex-1/2  justify-between">
            <div className="flex items-center flex-col gap-1.5">
              <Badge variant="destructive" className="border border-red-300">
                Urgent
              </Badge>
              <p>{formatCurrency(1850000, "NGN")}</p>
            </div>
            <div className="flex items-start flex-col gap-1.5 text-[11px]">
              <p>Ticket ID: PAX-12345 May 12</p>
              <p>Trade Link: AFYzaQA8stc</p>
            </div>
            <div className="flex items-center flex-col gap-1.5">
              <p className="flex items-center">
                <LucideAlarmClock className="size-3 mr-1" />
                Opened 72d 1h ago
              </p>
              <Badge
                variant={
                  ticketStatus === "Paid"
                    ? "success"
                    : ticketStatus === "Escalated"
                      ? "default"
                      : "destructive"
                }
              >
                {ticketStatus}
              </Badge>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex gap-2">
              <Select defaultValue="action">
                <SelectTrigger>
                  <SelectValue placeholder="Select a value" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Actions</SelectLabel>
                    <SelectItem value="action">Actions</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    onClick={() => setIsOpenTradeDetails(!isOpenTradeDetails)}
                  >
                    Trade Details
                  </Button>
                </TooltipTrigger>
                <TooltipContent className="flex flex-col p-4 size-fit gap-6">
                  <div className="flex flex-col gap-3">
                    <h4 className="">Customer Details</h4>
                    <div className="text-gray-500 flex gap-1 flex-col">
                      <p> Email: user@example.com</p>
                      <p>Account ID: USR-78901</p>
                      <p>Joined: Jan 15, 2023</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h4 className="">Transaction Details</h4>
                    <div className="text-gray-500 flex gap-1 flex-col">
                      <p> Transaxtion ID: TRX-56890</p>
                      <p>Amount: {formatCurrency(tickets[0].amount, "NGN")}</p>
                      <p>Status: Pending</p>
                    </div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </div>
            <p className="text-primary">Complaint title not assigned</p>
          </div>
        </div>

        {/* chat interface */}
        <ChatInterface
          isOpenTradeDetails={isOpenTradeDetails}
          setIsOpenTradeDetails={setIsOpenTradeDetails}
          tradeDetails={TradeDetail}
          status={ticketStatus}
        />

        <div></div>
      </div>
    </div>
  );
};
