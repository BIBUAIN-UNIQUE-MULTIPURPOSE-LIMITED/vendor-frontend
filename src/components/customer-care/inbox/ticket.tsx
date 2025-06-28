import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TicketStatus,
  TicketT,
  tickets,
} from "@/examples/customer-care/inbox/ticket";
import { formatCurrency } from "@/lib/formatters";
import { cn } from "@/lib/utils";
import {
  CheckCircle2Icon,
  InfoIcon,
  LucideMessageSquareMore,
} from "lucide-react";
import { Dispatch, SetStateAction } from "react";

type TicketProps = {
  setTicketStatus: Dispatch<SetStateAction<TicketStatus>>;
  ticketStatus: "Paid" | "Dispute" | "Escalated";
};
export const Ticket = ({ setTicketStatus, ticketStatus }: TicketProps) => {
  return (
    <div className="h-full">
      <div className="space-x-2 my-2 flex items-center justify-evenly">
        <Button variant="default" className="">
          All(2)
        </Button>
        <Button variant="outline" className="">
          Urgent
        </Button>
        <Button variant="outline" className="">
          Warning
        </Button>
        <Button variant="outline" className="">
          Info
        </Button>
      </div>
      <div className="border-r h-full">
        <div className="rounded-tl-xl py-2 space-x-2 flex items-center justify-center px-3 gap-2 bg-gray-100 ">
          <Button
            variant={ticketStatus === "Escalated" ? "default" : "outline"}
            onClick={() => setTicketStatus("Escalated")}
          >
            {" "}
            <InfoIcon /> Escalated{" "}
          </Button>
          <Button
            variant={ticketStatus === "Paid" ? "default" : "outline"}
            onClick={() => setTicketStatus("Paid")}
          >
            {" "}
            <CheckCircle2Icon /> Paid{" "}
          </Button>
          <Button
            variant={ticketStatus === "Dispute" ? "default" : "outline"}
            onClick={() => setTicketStatus("Dispute")}
          >
            {" "}
            <CheckCircle2Icon /> Dispute{" "}
          </Button>
        </div>
        {/* ticket table */}
        <div className="divide-y">
          {tickets.map((ticket, id) => (
            <TicketRow key={id} ticket={{ ...ticket, status: ticketStatus }} />
          ))}
        </div>
      </div>
    </div>
  );
};

const TicketRow = ({ ticket }: { ticket: TicketT }) => {
  const { user, platform, amount, messages, label, status } = ticket;

  return (
    <div className="hover:bg-gray-100 p-3 flex gap-6 justify-between">
      <div className="flex flex-col flex-1/2 gap-1 items-start justify-between">
        <h4 className="">{user}</h4>
        <p className="text-pretty text-gray-700 text-sm">
          {formatCurrency(amount, "NGN")}
        </p>
      </div>
      <div className="flex-1/2 flex justify-between">
        <div className="flex flex-col items-start gap-1 justify-between text-sm">
          <p>{platform}</p>
          <Badge
            variant={
              status === "Paid"
                ? "success"
                : status === "Escalated"
                  ? "default"
                  : "destructive"
            }
          >
            {status}
          </Badge>
        </div>
        <div className="flex flex-col items-start gap-1 justify-between">
          <AssignComplaintTitle label={label} platform={platform} />
          <div className="flex items-center gap-1 text-gray-600 text-[10px]">
            <LucideMessageSquareMore className="size-3" />
            <p>{messages} messages</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AssignComplaintTitle = ({ label, platform }: Partial<TicketT>) => {
  let badgeClass;
  switch (label) {
    case "Urgent":
      badgeClass =
        "text-red-900 bg-red-200 hover:bg-red-300 border border-red-300";
      break;
    case "Warning":
      badgeClass =
        "text-yellow-900 bg-yellow-200 hover:bg-yellow-300 border border-yellow-300";
      break;
    case "Info":
      badgeClass =
        "text-blue-900 bg-blue-200 hover:bg-blue-300 border border-blue-300";
      break;
  }
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Badge className={cn("cursor-pointer", badgeClass)}>{label}</Badge>
      </DialogTrigger>
      <DialogContent className="md:max-w-[448px]">
        <DialogHeader>
          <DialogTitle>Assign Complaint Title</DialogTitle>
        </DialogHeader>
        <form className="flex flex-col gap-6">
          <div className="">
            <Label>Platform</Label>
            <Input value={platform} type="text" />
          </div>
          <div>
            <Label>Ticket ID</Label>
            <Input value="PAX-12345" type="text" />
          </div>
          <div>
            <Label>Username</Label>
            <Input value="Aisha Vendor" type="text" />
          </div>
          <div>
            <Label>Complaint Title</Label>
            <ComplaintSelect />
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" className="px-8">
              Assign
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export const ComplaintSelect = () => {
  return (
    <Select>
      <SelectTrigger>
        <SelectValue placeholder="Select complaint type" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="serviceIssue">Service Issues</SelectItem>
        <SelectItem value="paymentProblem">Payment Problems</SelectItem>
        <SelectItem value="techSupport">Technical Support</SelectItem>
        <SelectItem value="accountAccess">Account Access</SelectItem>
        <SelectItem value="billingDispute">Billing Dispute</SelectItem>
      </SelectContent>
    </Select>
  );
};
