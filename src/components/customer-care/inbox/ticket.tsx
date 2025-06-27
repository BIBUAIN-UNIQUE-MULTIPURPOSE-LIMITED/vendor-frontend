import { Button } from "@/components/ui/button";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";

export const Ticket = () => {
  return (
    <div>
      <div className="space-x-2 my-2 flex items-center justify-evenly">
        <Button variant="outline" className="">
          All
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
      <div>
        <div className="rounded-2xl py-2 space-x-2 flex items-center justify-center px-3 gap-2 bg-gray-100 ">
          <Button variant="outline">
            {" "}
            <InfoIcon /> Escalated{" "}
          </Button>
          <Button variant="outline">
            {" "}
            <CheckCircle2Icon /> Paid{" "}
          </Button>
          <Button variant="outline">
            {" "}
            <CheckCircle2Icon /> Dispute{" "}
          </Button>
        </div>
        {/* ticket table */}
        <TicketRow />
      </div>
    </div>
  );
};

const TicketRow = () => {
  return (
    <div>
      <div></div>
      <div></div>
    </div>
  );
};
