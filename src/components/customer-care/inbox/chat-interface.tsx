import { useEffect, useRef, useState, Dispatch, SetStateAction } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ArrowUp,
  Check,
  CreditCard,
  Paperclip,
  Send,
  UserCheck2,
  X,
} from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { seedChat } from "@/examples/customer-care/inbox/chat";
import { TradeDetail } from "@/examples/customer-care/inbox/trade-details";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import { Label } from "@/components/ui/label";
import { ComplaintSelect } from "./ticket";
import { toast } from "sonner";

type ChatInterfaceProps = {
  tradeDetails: typeof TradeDetail;
  status: string;
  isOpenTradeDetails: boolean;
  setIsOpenTradeDetails: Dispatch<SetStateAction<boolean>>;
};

export const ChatInterface = ({
  tradeDetails,
  status,
  isOpenTradeDetails,
  setIsOpenTradeDetails,
}: ChatInterfaceProps) => {
  const author = "customer";
  const [messages, setMessages] = useState<Array<(typeof seedChat)[number]>>([
    ...seedChat,
  ]);
  const [draft, setDraft] = useState("");
  const viewportRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    viewportRef.current?.scrollTo({ top: viewportRef.current.scrollHeight });
  }, [messages]);

  const sendMessage = () => {
    const text = draft.trim();
    if (!text) return;
    setMessages((prev) => [
      ...prev,
      {
        user: author,
        message: text,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    ]);
    setDraft("");
  };

  return (
    <div className="relative flex h-full w-full rounded-sm bg-gray-100">
      {/* ────────────── Trade details (desktop) ────────────── */}
      {isOpenTradeDetails && (
        <TradeDetails
          {...tradeDetails}
          status={status}
          className="absolute right-0 top-4 hidden w-[28%] lg:block"
        />
      )}

      {/* ────────────── Mini overlay box (desktop) ─────────── */}
      {isOpenTradeDetails && (
        <MiniBox className="absolute top-6 right-[30%] z-10 hidden lg:block" />
      )}

      {/* ────────────── Chat viewport & composer ────────────── */}
      <div className="flex w-full flex-col">
        {/* CHAT LIST */}
        <div
          ref={viewportRef}
          className={cn(
            "absolute inset-x-0 top-0 bottom-24 space-y-8 overflow-y-auto px-4 py-12",
            isOpenTradeDetails ? "w-full lg:w-[72%]" : "w-full",
          )}
        >
          {messages.map((msg, idx) => {
            const isCustomer = msg.user === "customer";
            return (
              <div
                key={idx}
                className={cn("flex text-sm", {
                  "justify-end": isCustomer,
                  "justify-start": !isCustomer,
                })}
              >
                <div
                  className={cn(
                    "flex max-w-xs flex-col gap-2 rounded-xl px-3 py-2 leading-snug shadow",
                    isCustomer
                      ? "ml-auto bg-primary text-white"
                      : "mr-auto bg-gray-200 text-gray-900",
                  )}
                >
                  <h4
                    className={cn(
                      "text-base font-medium",
                      isCustomer ? "opacity-70" : "text-gray-600",
                    )}
                  >
                    {isCustomer ? "Customer" : "Support Agent"}
                  </h4>
                  <p>{msg.message}</p>
                  <p
                    className={cn(
                      "self-end text-[10px]",
                      isCustomer ? "opacity-70" : "text-gray-600",
                    )}
                  >
                    {msg.time}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* MESSAGE COMPOSER */}
        <div
          className={cn(
            "absolute bottom-4 left-4 w-[95%] lg:w-[72%]",
            isOpenTradeDetails ? "" : "lg:w-[95%]",
          )}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage();
            }}
          >
            <div className="flex h-20 w-full gap-2">
              <Textarea
                placeholder="Type your message here…"
                className="h-full flex-1 resize-none px-3 py-2 text-sm focus-visible:ring-1 focus-visible:ring-gray-400"
                value={draft}
                rows={1}
                onChange={(e) => setDraft(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    sendMessage();
                  }
                }}
              />
              <div className="flex flex-col items-center gap-1">
                <Button
                  variant="outline"
                  className="aspect-square rounded-full p-0.5"
                >
                  <Paperclip />
                </Button>
                <Button
                  type="submit"
                  className="aspect-square rounded-full p-0.5"
                >
                  <Send />
                </Button>
              </div>
            </div>
          </form>
          <p className="py-2 text-sm">
            Press <kbd>Enter</kbd> to send • <kbd>Shift&nbsp;+&nbsp;Enter</kbd>{" "}
            for new line
          </p>
        </div>
      </div>

      {/* ────────────── Mobile dialog (trade details + mini) ────────────── */}
      {isMobile && (
        <Dialog open={isOpenTradeDetails} onOpenChange={setIsOpenTradeDetails}>
          <DialogContent className="p-0 lg:hidden">
            <TradeDetails {...tradeDetails} status={status} />
            <MiniBox className="mt-4" /> {/* stacked under on mobile */}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

const MiniBox = ({ className = "" }: { className?: string }) => (
  <div
    className={cn(
      "w-fix rounded-lg bg-white/80 p-2 shadow backdrop-blur-sm",
      className,
    )}
  >
    {/* replace with real content */}
    <div className="space-y-1 flex flex-col items-start w-fit text-sm">
      <AssignComplaintTitle />
      <Button
        variant="ghost"
        onClick={() =>
          toast("Ticket escalated", {
            description: "Ticket has been forwarded to admninistrator",
          })
        }
        className="text-yellow-500 justify-start"
      >
        {" "}
        <ArrowUp className="transform rotate-12" /> Forward to Admin
      </Button>
      <CancelTrade />
      <ReassignTrade />
    </div>
  </div>
);

type TradeDetailsProps = typeof TradeDetail & {
  status: string;
  className?: string;
};

const TradeDetails = ({
  agentName,
  amountInNaira,
  coinType,
  id,
  offerRate,
  paidBy,
  paymentMethod,
  platform,
  timeline,
  tradeLink,
  status,
  className = "",
}: TradeDetailsProps) => (
  <div className={cn("hidden lg:block", className)}>
    {/* original card UI … kept intact … */}
    <div className="w-full rounded-lg bg-white shadow">
      <div className="border-b px-6 py-4">
        <h2 className="text-xl font-semibold">Trade Details</h2>
      </div>
      <div className="space-y-4 p-6">
        <Row label="Ticket ID" value={id} />
        <Row
          label={agentName}
          value={<Badge>{platform}</Badge>}
          labelClass="text-gray-600"
        />
        <Row label="Paid By" value={paidBy} />
        <Row label="Coin Type" value={coinType} />
        <Row label="Amount" value={formatCurrency(amountInNaira, "NGN")} />
        <Row label="Offer Rate" value={offerRate} />
        <Row
          label="Payment Method"
          value={
            <span className="flex items-center gap-1">
              <CreditCard />
              {paymentMethod}
            </span>
          }
        />
        <Row label="Status" value={status} />
        <p className="text-sm text-gray-600">Trade Link: {tradeLink}</p>

        <p className="text-sm text-gray-600">Timeline</p>
        <div className="space-y-2 border-l-4 border-green-900 pl-4">
          <p>Trade Opened</p>
          <p className="flex gap-1 text-sm text-gray-600">
            {timeline.openedDate} • {timeline.openedTime}
          </p>
        </div>
        <div>
          <p>Trade Paid by</p>
          <p className="text-sm text-gray-600">{paidBy}</p>
        </div>
      </div>
    </div>
  </div>
);

const Row = ({
  label,
  value,
  labelClass = "text-gray-600",
}: {
  label: string;
  value: React.ReactNode;
  labelClass?: string;
}) => (
  <div className="flex items-center justify-between">
    <p className={cn("text-sm", labelClass)}>{label}</p>
    {label === "Status" ? (
      <Badge
        variant={
          value === "Paid"
            ? "success"
            : value === "Escalated"
              ? "default"
              : "destructive"
        }
      >
        {value}
      </Badge>
    ) : (
      <p className="text-sm">{value}</p>
    )}
  </div>
);

const AssignComplaintTitle = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start w-full gap-2"
        >
          <Check />
          Mark as Resolved
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Assign Complaint Title</DialogTitle>
          <DialogDescription>
            Please assign a complaint title PAX-12345. This is required before
            resolving the trade
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label>Complaint Title</Label>
          <ComplaintSelect />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className="px-8">Assign</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const CancelTrade = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center w-full justify-start gap-2 text-red-500"
        >
          <X />
          Cancel Trade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Cancel Trade</DialogTitle>
          <DialogDescription>
            Are you sure you want to cancel this trade? This action cannot be
            undone.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label>Reason for cancellation</Label>
          <ComplaintSelect />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Additional Note</Label>
          <Textarea
            className="resize-none"
            placeholder="Provide any addtional details about the cancellation..."
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className="text-white" variant="destructive">
            Confirm Cancellation
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

const ReassignTrade = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center justify-start w-full gap-2 "
        >
          <UserCheck2 />
          Reassign Trade
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Reassign Trade</DialogTitle>
          <DialogDescription>
            Select a support agent to reassign this ticket to{" "}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Label>Assign To</Label>
          <ComplaintSelect />
        </div>
        <div className="flex flex-col gap-2">
          <Label>Additional Note</Label>
          <Textarea
            placeholder="Provide context and details for the agent taking over..."
            className="resize-none"
          />
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button className="px-4">Reassign Ticket</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
