import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  discrepancyTableHeaders,
  overpaymentData,
  OverpaymentEntry,
} from "@/examples/team-lead/overpayment-monitoring/table";
import { formatCurrency } from "@/lib/utilities/formatCurrency";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Flag } from "lucide-react";
import { Fragment } from "react";

const DiscrepancyMonitoringTable = () => {
  return (
    <div className="overflow-auto">
      <Table className="rounded-t-xl">
        <TableHeader className="rounded-t-xl">
          <TableRow className="border !rounded-t-xl overflow-hidden">
            {discrepancyTableHeaders.map(({ key, label }) => (
              <TableHead
                className="text-[10px] whitespace-nowrap leading-0 "
                key={key}
              >
                {label}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {overpaymentData.length > 0 ? (
            overpaymentData.map((payment, idx) => (
              <Fragment key={`${payment.sellerUsername}-${idx}`}>
                <TableRow className="text-sm">
                  <TableCell className="whitespace-nowrap text-[10px]">
                    {payment.date}
                  </TableCell>
                  <TableCell className="whitespace-nowrap text-[10px]">
                    {formatCurrency(payment.amount, "NGN")}
                  </TableCell>
                  <TableCell className="text-[10px]">
                    {payment.sellerUsername}
                  </TableCell>
                  <TableCell className="text-[10px]">
                    {payment.sellerAccountNumber}
                  </TableCell>
                  <TableCell className="text-[10px]">
                    {payment.tradeCount}
                  </TableCell>
                  <TableCell className="text-[10px]">{payment.tag}</TableCell>
                  <TableCell className="text-sm">
                    <Badge
                      variant={
                        payment.status === "Not Recovered"
                          ? "destructive"
                          : payment.status === "Partially Recovered"
                            ? "pending"
                            : "success"
                      }
                      className="text-[10px] rounded-full"
                    >
                      {payment.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Switch checked={payment.flagged} />
                  </TableCell>
                  <TableCell>
                    <ViewDiscrepancyDetails {...payment} />
                  </TableCell>
                </TableRow>

                {payment.flagged && (
                  <TableRow className="">
                    <TableCell
                      className="rounded-none bg-white"
                      colSpan={discrepancyTableHeaders.length}
                    >
                      <Card className="bg-orange-600 relative rounded-xl  border-0 h-36 border-orange-300 text-sm">
                        <div className="rounded-xl bg-orange-50 px-4 py-0 absolute bg-none flex items-center inset-y-0 left-1 right-0">
                          <div className="w-full">
                            <p className="font-semibold mb-2 text-orange-700 flex items-center gap-4">
                              <Flag />
                              Follow-up Required
                            </p>
                            <div className="flex flex-row items-end gap-4">
                              <div className="flex-1 w-full">
                                <Label className="font-light mb-2">
                                  Account Holder Name
                                </Label>
                                <Input
                                  type="text"
                                  placeholder="Enter account holder name"
                                  className="border bg-white p-2 rounded w-full "
                                />
                              </div>
                              <div className="w-full flex-1">
                                <Label className="font-light mb-2">
                                  Seller Username
                                </Label>
                                <Input
                                  type="text"
                                  placeholder="Enter account holder name"
                                  className="border p-2 rounded w-full"
                                  value={payment.sellerUsername}
                                />
                              </div>
                              <Button className="flex-1 w-full text-white">
                                Save Follow-up
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </TableCell>
                  </TableRow>
                )}
              </Fragment>
            ))
          ) : (
            <TableRow>
              <TableCell
                colSpan={discrepancyTableHeaders.length}
                className="text-center"
              >
                No Data Available
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DiscrepancyMonitoringTable;

const ViewDiscrepancyDetails = ({
  amount,
  date,
  sellerUsername,
  status,
  sellerAccountNumber,
  tag,
  tradeCount,
  flagged,
  accountHolderName,
}: OverpaymentEntry) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" className="text-sm">
          View Details
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="font-medium text-lg">
            Overpayment Details - TRNX001234567
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col divide-y space-y-4">
          <div className="flex items-start justify-between py-4">
            <div className="">
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Transaction Date</h4>
                <p>{date}</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Amount Overpaid</h4>
                <p className="text-[18px] text-red-500 font-bold">
                  {formatCurrency(amount, "NGN")}
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className=" text-gray-600">Transaction ID</h4>
              <p>TRNX0012345678</p>
              <span className="flex gap-2 items-center">
                <p className=" text-gray-600">Status</p>
                <Badge variant="destructive" className="text-[10px]">
                  {status}
                </Badge>
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-medium ">Seller Information</h3>
            <div className="flex items-start justify-between gap-4 py-4">
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Seller Information</h4>
                <p>{sellerUsername}</p>

                <h4 className=" text-gray-600">Trade Count</h4>
                <p>{tradeCount} trade(s)</p>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Account Number</h4>
                <p>{sellerAccountNumber}</p>
                <h4 className=" text-gray-600">Account Holder Name</h4>
                <p>{accountHolderName ?? "Not Provided"}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-medium ">Recovery Information</h3>
            <div className="flex items-start justify-between py-4">
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Recovery Attempts</h4>
                <p>2 attempts</p>
                <span className="flex gap-2 items-center">
                  <p className=" text-gray-600">Tag</p>
                  <Badge variant="destructive" className="text-[10px]">
                    {tag}
                  </Badge>
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className=" text-gray-600">Last contact date</h4>
                <p>2024-01-03</p>
                <h4 className=" text-gray-600">Flagged for follow up</h4>
                <p>{flagged ? "Yes" : "No"}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <h3 className="text-lg font-medium ">Notes</h3>
            <p className="">
              Customer overpaid by {formatCurrency(amount, "NGN")} during BTC
              transaction
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
