import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Flag, Plus } from "lucide-react";

import DiscrepancyMonitoringTable from "./data-table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { Textarea } from "@/components/ui/textarea";

const DiscrepancyMonitoring = () => {
  return (
    <div>
      <div>
        <Card>
          <CardHeader className="flex items-center justify-between">
            <h2 className="flex text-lg md:text-2xl items-center gap-2 font-bold tracking-normal leading-tight">
              <Flag className="text-primary" />
              Overpayment Error Monitoring
            </h2>
            <div className="flex items-center gap-2 ">
              <AddDiscrepancyDialog />
              <Button className="text-xs py-2">
                <Download />
                Export CSV
              </Button>
            </div>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <div className="bg-gray-100 rounded-xl grid grid-cols-1 grid-rows-4 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-4 lg:grid-rows-1 p-4 gap-4">
              {/* /form */}
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Status Filter
                </Label>
                {/* TODO: */}
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue className="" placeholder="All Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="all">All</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Seller Useraname
                </Label>
                <Input
                  type="text"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">
                  Date From
                </Label>
                <Input
                  type="date"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
              <div className="flex flex-col items-start gap-2 w-full">
                <Label className="sm:text-xs text-sm font-light">Date To</Label>
                <Input
                  type="date"
                  placeholder=""
                  className="bg-white p-3 h-fit text-sm sm:text-xs"
                />
              </div>
            </div>

            <DiscrepancyMonitoringTable />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DiscrepancyMonitoring;

// add discrepancy dialog
const AddDiscrepancyDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-green-500 hover:bg-green-500/90 text-xs py-2">
          <Plus />
          Add discrepancy
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-lg font-bold">
            Add New Discrepancy
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-4 gap-y-6 gap-x-4">
            <div className="flex flex-col gap-2 font-light">
              <Label>Transaction Date *</Label>
              <Input type="date" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Transaction ID *</Label>
              <Input type="text" placeholder="TRNX001234567" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Amount Overpaid *</Label>
              <Input type="number" placeholder="25000" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Tag *</Label>
              <Select defaultValue="overpayment">
                <SelectTrigger className="">
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="overpayment">Overpayment</SelectItem>
                    <SelectItem value="dt">Duplicate Transfer</SelectItem>
                    <SelectItem value="ur">Unresolved Flag</SelectItem>
                    <SelectItem value="wra">Wrong Rate Applied</SelectItem>
                    <SelectItem value="systemError">System Error</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Seller Username *</Label>
              <Input type="text" placeholder="crypto_trader_01" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Seller Accoount Number *</Label>
              <Input type="number" placeholder="1234567890" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Trade Count *</Label>
              <Input type="number" placeholder="2" />
            </div>
            <div className="flex flex-col gap-2 font-light">
              <Label>Status *</Label>
              <Select defaultValue="notRecovered">
                <SelectTrigger>
                  <SelectValue placeholder="" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectItem value="overpayment">Overpayment</SelectItem>
                    <SelectItem value="notRecovered">Not Recovered</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex flex-col gap-2 font-light">
            <Label>Note</Label>
            <Textarea placeholder="Additional Details..." />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">Cancel</Button>
          </DialogClose>
          <Button>Add Discrepancy</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
